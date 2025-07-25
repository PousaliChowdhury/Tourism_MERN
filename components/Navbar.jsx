import {Component} from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.jpeg"
import { Link } from 'react-router-dom'




class Navbar extends Component {
 
  state = { clicked: false};
  handleClick = () =>{
    this.setState({ clicked: !this.state.clicked})
  }
 
  render(){
  return (
    <div className="NavbarItems">
        <img src={logo} className="navbar-logo" alt=""/>


          <div className='menu-icons' onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>


          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to='/' className='nav-links'>Home</Link>
            </li>
            <li>
              <Link to='/about' className='nav-links'>About</Link>
            </li>
            <li>
              <Link to='/gallery' className='nav-links'>Gallery</Link>
            </li>
            <li>
              <Link to='/packages' className='nav-links'>Packages</Link>
            </li>
            <li>
              <Link to='/reviews' className='nav-links'>Reviews</Link>
            </li>
           <Link to="/Login" className='navlinks'> <button>Book Now</button> </Link>
            <li>
              <Link href='/booknow' className='nav-links-mobile'>Book Now</Link>
            </li>
          </ul>
    </div>
  )
}
}
export default Navbar