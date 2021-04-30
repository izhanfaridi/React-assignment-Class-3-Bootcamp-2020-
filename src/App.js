import logo from './logo.svg';
import './App.css';

function App({name,age}) {
  return (
    <div>
      <ul>
        <li className="name">My name is <strong>{name}</strong>.</li>
        <li className="age">I am {age} years old!</li>
      </ul>
       </div>
  );
}

export default App;
