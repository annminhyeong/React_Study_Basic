import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
  let [chk, setChk] = useState(true);
  let [count, setCount] = useState(0);
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);
  let [num, setNum] = useState('');

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

  return (
    <div className='Detail'>
      <div className='container'>
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
    </div>
  );
}

export default Detail;
