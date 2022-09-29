import { useState, createContext, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import './App.css';
import data from './data.js';
import Detail from './routes/Detail';
import Cart1 from './routes/Cart';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export let Context1 = createContext();

function App() {
  useEffect(() => {
    if (localStorage.getItem('watched') == '[]')
      localStorage.setItem('watched', JSON.stringify([]));
  }, []);

  let obj = { name: 'kim' };
  localStorage.setItem('data', JSON.stringify(obj));
  let a = JSON.parse(localStorage.getItem('data'));
  let [shoes, setShoes] = useState(data);
  let [제고, 제고변경] = useState([10, 11, 12]);

  let navigate = useNavigate();
  let result = useQuery(
    ['작명'],
    () =>
      axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
        console.log('요청됨');
        return a.data;
      }),
    { staleTime: 2000 }
  );

  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>ShoeShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/cart')}>Cart</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            {result.isLoading && '로딩중'}
            {result.error && '에러남'}
            {result.data && result.data.name}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path='/'
          element={
            <>
              {' '}
              <div className='main-bg'></div>
              <div className='container'>
                <div className='row'>
                  {shoes.map((item, i) => {
                    return <Cart key={i} shoes={item} i={i} />;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  axios
                    .get('https://codingapple1.github.io/shop/data2.json')
                    .then((결과) => {
                      setShoes([...shoes, ...결과.data]);
                    })
                    .catch(() => {
                      console.log('서버오류');
                    });
                }}
              >
                버튼
              </button>
            </>
          }
        />
        <Route
          path='/detail/:id'
          element={
            <Context1.Provider value={{ 제고, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
        <Route path='/cart' element={<Cart1 />}></Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Cart(props) {
  let navigate = useNavigate();
  return (
    <div className='col-md-4' onClick={() => navigate(`detail/${props.i}`)}>
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width='80%'
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
