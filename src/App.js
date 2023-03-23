import './App.css';
import Customer from './components/Customer';
//App.js는 웹사이트에서 화면출력 담당
//리액트에서는 jsx문법 따름
const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': 'kms',
  'birthday': '990804',
  'gender': '여자',
  'job': '학생',
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '000101',
  'gender': '남자',
  'job': '무직',
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/2',
  'name': '주환',
  'birthday': '990305',
  'gender': '남자',
  'job': '기획자',
}
]
//hint : map함수
//개발자 도구 열면 key넣으라고 에러남
//map함수는 key를 넣어줘야, 각 원소 구분할 수 있는 key넣어줘야
function App() {
  return (
    <div>
      {customers.map(c => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job} />
        )
      })}

    </div>
  );
}

export default App;
