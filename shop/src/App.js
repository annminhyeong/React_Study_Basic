import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import './App.css';
import data from './data.js';
import Detail from './routes/Detail';

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>ShoeShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
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
            </>
          }
        />
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
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
    <div
      key={props.i}
      className='col-md-4'
      onClick={() => navigate(`detail/${props.i}`)}
    >
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
