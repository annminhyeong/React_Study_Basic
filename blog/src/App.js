import React, { useState } from 'react';
import './App.css';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState([
    '남자코트 추천',
    '강남 우동 맛집',
    '파이썬 독학',
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      {글제목.map((item, i) => {
        return (
          <div className='list' key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {item}
              <span
                onClick={(e) => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  e.stopPropagation(따봉변경(copy));
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          if (입력값 === '') return;
          let copy1 = [...글제목];
          copy1.unshift(입력값);
          글제목변경(copy1);
          let copy2 = [...따봉];
          copy2.push(0);
          따봉변경(copy2);
        }}
      >
        글발행
      </button>
      {modal ? <Modal 글제목={글제목} title={title} /> : null}
      <Modal2 프롭스={' 자식에게 전달'} />
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'kim',
      age: 20,
    };
  }

  render() {
    return (
      <div>
        {this.state.name}
        {this.props.프롭스}
        <button
          onClick={() => {
            this.setState({ name: '코딩애플' });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

export default App;
