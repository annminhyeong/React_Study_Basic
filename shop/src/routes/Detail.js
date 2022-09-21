import React, { Component, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Context1 } from '../App';

function Detail(props) {
  let { 제고, shoes } = useContext(Context1);

  let [chk, setChk] = useState(true);
  let [count, setCount] = useState(0);
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);
  let [num, setNum] = useState('');
  let [탭, 탭변경] = useState(0);

  //Mount
  useEffect(() => {}, []);

  //Mount, Update
  useEffect(() => {});

  useEffect(() => {
    if (isNaN(num) == true) {
      alert('그러지마세요');
    }
  }, [num]);

  useEffect(() => {
    let a = setTimeout(() => setChk(false), 2000);

    //unMount
    return () => {
      //useEffect가 실행하기 전에 실행할 코드
      clearTimeout(a);
    };
  });

  let [fade2, setFade2] = useState('');

  useEffect(() => {
    setFade2('end');

    return () => {
      setFade2('');
    };
  }, []);

  return (
    <div className='Detail'>
      <div className={`container start ${fade2}`}>
        <input
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        {chk ? (
          <div className='alert alert-warning'>2초 이내에 구매</div>
        ) : null}
        {count}
        <button onClick={() => setCount(count + 1)}>버튼</button>
        <div className='row'>
          <div className='col-md-6'>
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                찾은상품.id + 1
              }.jpg`}
              width='100%'
            />
          </div>
          <div className='col-md-6'>
            <h4 className='pt-5'>{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className='btn btn-danger'>주문하기</button>
          </div>
        </div>
      </div>
      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link eventKey='link0' onClick={() => 탭변경(0)}>
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link1' onClick={() => 탭변경(1)}>
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link2' onClick={() => 탭변경(2)}>
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} />
    </div>
  );
}

function TabContent({ 탭 }) {
  let { 제고, shoes } = useContext(Context1);
  let [fade, setFade] = useState('');

  useEffect(() => {
    setTimeout(() => setFade('end'), 100);

    return () => {
      setFade('');
    };
  }, [탭]);

  return (
    <div className={`start ${fade}`}>
      {[<div>{제고}</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}

export default Detail;
