import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home'
import Cart from './screens/Cart'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'
import Order from './screens/Order'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
function App() {
  return (
    <div className="App">
         
      <Navbar/>
      <BrowserRouter>
        <Route path = "/" exact component = {Home}></Route>
        <Route path = "/cart" exact component = {Cart}></Route>
        <Route path = "/register" exact component = {RegisterScreen}></Route>
        <Route path = "/login" exact component = {LoginScreen}></Route>
        <Route path = "/order" exact component = {Order}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
