import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase } from '../store/userSlice';
import { addCount } from '../store';

function Cart() {
  let user = useSelector((state) => state.user);
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  return (
    <div className='Cart'>
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

export default Cart;
