import logo from './logo.svg';
import './App.css';
import Info from './components/Info'
import Main from'./components/Main'
import Footer from'./components/Footer'

function App() {
  return (
    <div className="app--container">
       <div className="app--container--two">
        <Info/>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
