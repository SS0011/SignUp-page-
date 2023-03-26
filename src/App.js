import './App.css';
import {Routes ,Route} from 'react-router-dom'
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/SignUp' element ={<SignUp/>}/>
        <Route path='/Login' element ={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
