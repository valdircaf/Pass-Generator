import './App.css';
import SplashScreen from './Pages/SplashScreen/SplashScreen';
import Generator from './Pages/Generator/Generator';
import Password from './Pages/Password/Password'
import {BrowserRouter as  Router, Route, Routes} from 'react-router-dom'
function App() {
  function roll(){
    setTimeout(()=>{
      window.scrollTo(0, 2000)
    }, 2000)
  }

  return (

    

    <div className='App'>
      <SplashScreen id='splashScreen' onLoad={roll()}/>
    <Router>
    
      <Routes>
      
          <Route path='splashScreen' element={<SplashScreen/>}/>
          <Route path="/" element={<Generator id='home'/>}/>
          <Route path="/password" element={<Password/>}/>
      </Routes>
    </Router>
    
    </div>
    
  );
}

export default App;
