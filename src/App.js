/* eslint-disable */  //warning Lint 끄는 기능

import { useState } from 'react';
import './styles/App.css';
import logo from './images/icon-banner-01.svg';

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
        <h1 className="App-logo">리액트 블로그</h1>
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

        <h2><a href="http://cafesi.aurorasoft.co.kr/" target="_blank">http://cafesi.aurorasoft.co.kr/</a></h2>
        <h2><a href="https://yl1017-yang.github.io/reactTest/" target="_blank">https://yl1017-yang.github.io/reactTest/</a></h2>
        
        <img src={logo} className='App-logo' alt='React' />

        <img src={'./images/icon-banner-01.svg'} alt="이미지배너" />
        <img src={`${process.env.PUBLIC_URL}/public/images/icon-banner-01.svg`} className='App-logo' alt='React'/>
        <div style={{ backgroundImage: 'url(/public/images/icon-banner-01.svg)' }}></div>
        
        
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


      <Modal></Modal>

      

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>모달내용 함수사용하기</h2>
      <p>
        return() 안엔 태그 하나만 들어갈 수 있습니다. , fragments라는 문법으로 <> </>로 묶어줘도 됨 <br/>
        이렇게 축약한 HTML 덩어리를 Component 라고 칭함
      </p>

      <div>
        <br/>
        <h4>Component특징 정리</h4>
        <ul>
          <li>1. Component 작명시 영어대문자 시작</li>
          <li>return () 안엔 태그들이 평행하게 여러개 들어갈 수 없음 <br/>
            1 평행하게 여러개의 태그를 쓰고 싶으면 div로 묶거나 <br/>
            2 <> </> 이걸로 묶음</li>
          <li>component 위치는 function App(){} 과 보통 나란히 만들어줌</li>
          <li>Modal 이라는 컴포넌트가 App(){} 안에 있는 state를 사용하고 싶을 때 그냥 바로 쓸 수 없다는 것. props 사용</li>
        </ul>
      </div>
      <p>참고사이트 : https://velog.io/@ksung1889/React-6.-%EB%A7%8E%EC%9D%80-div%EB%93%A4%EC%9D%84-%ED%95%9C-%EB%8B%A8%EC%96%B4%EB%A1%9C-%EC%A4%84%EC%9D%B4%EA%B3%A0-%EC%8B%B6%EC%9D%80-%EC%B6%A9%EB%8F%99%EC%9D%B4-%EB%93%A4-%EB%95%8C</p>
      <p>코딩애플내용 : https://velog.io/@abcd8637/%EC%BD%94%EB%94%A9%EC%95%A0%ED%94%8C-React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EC%B4%88%EB%B6%80%ED%84%B0-%EC%87%BC%ED%95%91%EB%AA%B0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EA%B9%8C%EC%A7%80-part.1%EB%91%90%EB%B2%88%EC%A7%B8%EC%9D%B4%EC%95%BC%EA%B8%B0</p>
    </div>
  )
}

export default App;
