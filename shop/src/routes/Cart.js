import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart() {
  let a = useSelector((state) => state.user);
  let tmp = useSelector((state) => state.tmp);
  return (
    <div className='Cart'>
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
          {tmp.map((item, i) => {
            return <CartItem key={i} item={item} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

function CartItem({ item }) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.count}</td>
      <td>aa</td>
    </tr>
  );
}

export default Cart;
