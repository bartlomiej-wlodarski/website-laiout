import logo from './logo.svg';
import './App.css';
import profileImage from './img/laiout-logoicon.png';

function App() {
  return (
    <div className="App">
      <h1>Laiout website</h1>
      <h2>Bart Wlodarski</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
