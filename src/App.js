import logo from './logo.svg';
import './App.css';
//App.js는 웹사이트에서 화면출력 담당
//리액트에서는 jsx문법 따름
function App() {
  return (
    <div className="gray-background">
      <img src={logo} lat="logo" />
      <h2>let's develop management system!</h2>
    </div>
  );
}

export default App;
