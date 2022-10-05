import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase } from '../store/userSlice';
import { addCount } from '../store';
import React, { useState, memo, useMemo } from 'react';

function 함수() {
  return '반복문 10억번';
}

function Cart() {
  //배열 안의 값이 변할때만 재랜더링
  useMemo(() => {
    return 함수();
  }, []);
  let user = useSelector((state) => state.user);
  let cart = useSelector((state) => state.cart);
  let [count, setCount] = useState(0);
  let dispatch = useDispatch();

  return (
    <div className='Cart'>
      <Child count={count}></Child>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h6>
        {user.name} {user.age}의 장바구니
      </h6>
      <button onClick={() => dispatch(increase(10))}>버튼</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <button onClick={() => dispatch(addCount(item.id))}>+</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

//재랜더링 방지
let Child = memo(function () {
  console.log('재랜더링됨');
  return (
    <div>
      <p>자식임</p>
    </div>
  );
});

export default Cart;
