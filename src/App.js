import logo from './logo.svg';
import './App.css';
import MyCOmponents from './components/MyComponents';

function App() {
  return (
    <div className="App">
      <h1> test react web</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adispiscing elit. Nullam convallis
        risus id nunc vehicula, eu consequat velit ultricies. Fusce bibendum, sapien vitae aliquam
        </p>
      
      <aside>
        <h2>aside_header_no_spaces after_space</h2>
        <nav> 
      <ul>
        <li><a href="/builds">Builds</a></li>
        <li><a href="/items">Items</a></li>
        <li><a href="/forum">Forum</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav></aside>
    
      <MyCOmponents />
    </div>
  );
}

export default App;
