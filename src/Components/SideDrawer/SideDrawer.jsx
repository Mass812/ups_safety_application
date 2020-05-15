import React, {useRef, useEffect} from "react";
import './SideDrwawer.scss'
import { Link } from "react-router-dom";
import Button from '../Button/Button'
import Spinner from '../Spinner/Spinner'
import {useDispatch, useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import SignOutButton from '../Navbar/SignOutButton/SignOutButton'
import gsap from 'gsap'



const SideDrawer = props => {

const dispatch = useDispatch()
const darkMode = useSelector(state=>state.darkMode.darkMode)

const handleDarkMode = async (e) => {
    e.preventDefault()
    console.log()
    let dark = !darkMode

    dispatch({ type: 'DARK_MODE', darkMode: dark })
}



let parent = useRef(null);


useEffect(() => {
  


gsap.from(parent, .35, { ease: "slow(0.7, 0.7, false)", x: 100})


  return () => {
  };
}, [])



//prev props.close menu

  return (
    
    <div className={darkMode ? 'nav-icon-bar-dark' : 'nav-icon-bar-light'}>
    <nav className="drawer-parent" ref={cr=>parent=cr}>
    <Spinner size={'5x'} color={'red'}/>
      <ul className="drawer-ul" onClick={props.onClick}>
        <Link to="/home" exact="true" style={{ textDecoration: "none" }}>
          <Button>Home</Button>
        </Link>
        <Link to="/home" exact="true" style={{ textDecoration: "none" }}>
          <Button>Audits</Button>
        </Link>
        <Link to="/admin_console" exact="true" style={{ textDecoration: "none" }}>
          <Button>Admin</Button>
        </Link>
        <Link to="/home" exact="true" style={{ textDecoration: "none" }}>
				<Button onClick={handleDarkMode}>
					<FontAwesomeIcon icon={faSun} size={'sm'} /> / <FontAwesomeIcon icon={faMoon} size={'sm'} />
				</Button>
        </Link>
       
      
				<SignOutButton />
		
				
      </ul>
      
    </nav>
    
			</div>
  );
};

export default SideDrawer;