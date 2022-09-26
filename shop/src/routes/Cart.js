import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store';

function Cart() {
  let a = useSelector((state) => state.user);
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  return (
    <div className='Cart'>
      {a}
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
                  <button onClick={() => dispatch(changeName())}>+</button>
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
