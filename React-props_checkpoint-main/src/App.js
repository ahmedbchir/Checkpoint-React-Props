import './App.css';
import Profile from './profile/Profile';
import image from './profile/123.jpg';
function App() {
  const fullName="Ahmed Bchir";
  const bio="GOMYCODE";
  const profession="student"
  const handleClick = e =>{
    e.preventDefault();
    alert(fullName);
  }
  return (
    <div className="App">
      <header className="App-header">
      <Profile fullName={fullName} bio={bio} profession={profession}>
        <img src={image} alt='img'/>
      </Profile>
      <a href="/" onClick={handleClick}>
        Click me
      </a>
      </header>
    </div>
  );
}

export default App;
