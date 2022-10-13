/* eslint-disable */  //warning Lint 끄는 기능

import { useState } from 'react';
import './App.css';

function App() {
  
  let post = '리액트 내용 변경'; //자료 잠깐 저장할때 변수 사용, state 도 사용
  
  //a는 남자코트추천 나옴, b state 변경도와주는 함수
  //state 함수는 state를 쓰던 html은 자동 재렌더링 됨
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '맛집추천', '글제목']); 

  // 자바스크립트 Destructuring 문법
  // let num = [1, 2];
  // let a = num[0];
  // let c = num[1];

  // let [a, c] = [1, 2];
  let [따봉, 따봉변경] = useState(0); //따봉변경 state 변경 함수

  function 함수() {
    // console.log(1);
    따봉변경(따봉+1);
  }

  return (
    <div className="App">

      <header>
        <h1 className="App-logo">코딩애플 블로그</h1>
        <nav className="black-nav">
          메뉴1
        </nav>
      </header>
      <div className="contaner">
        <h3 id={post}>{ post }</h3>
        <p>- JSX 문법은 className 으로 사용해야함</p>
        <p>- JSX 문법2 : 변수넣을때 중괄호{} 데이터바인딩</p>
        <p style={ {color : 'skyblue', fontSize: '24px'} }>- JSX 문법3 : style 넣을 때 style={} 사용 <br/>
          스타일문법은 카멜케이스 사용
        </p>
        <p>코딩애플 강좌 : https://codingapple.com/unit/react2-jsx-classname-html/?id=2305</p>
      </div>

      <button onClick={ () => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }} className="buttom">가나다순정렬</button>
      
      <button onClick={ () => { 
        // 글제목변경(['-여자 코트 추천', '맛집추천', '글제목']);
        // 글제목[0] = '여자코트 추천';
        let copy = [...글제목];  //...는 괄호 벗겨주어서 새로운 state라고 합니다
        copy[0] = '여자코트 추천 변경';
        글제목변경(copy);
      } } className="buttom">글수정</button>

      <div className="list">
        <h4>▶ { 글제목[0] } <span onClick={ function(){ console.log(2) } }>👍</span> { 따봉 } </h4> 
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
      <h4>{ 글제목[1] } <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
      <h4>{ 글제목[2] } <span onClick={ 함수 }>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>

    </div>
  );
}

export default App;
