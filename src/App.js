import logo from './logo.svg';
import './App.css';
import Header from "./component/header/index"
import Banner from "./component/banner/index"
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
