import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <nav className='nav-bar'>
        <ul>
          <li><a href=''>Home</a></li>
          <li><a href=''>About Us</a></li>
          <li><a href=''>Contact Us</a></li>
          <li><a href=''>Gallery</a></li>
        </ul>
      </nav>
      <header className='hero'>
        <div className='container hero-sect'>
            <h1>We provide 1000 solutions to your one problem</h1>
            <button>Sign Up Now!</button>
        </div>
      </header>
    </div>
  );
}

export default App;
