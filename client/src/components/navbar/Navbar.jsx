import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {

  const [isScrolled,setIsScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext);

  window.onscroll = () =>{
    setIsScrolled( window.pageYOffset === 0 ? false : true );
    return ()=>( window.onscroll = null );
  };

  return (
    <div className={isScrolled ?'navbar scrolled' : 'navbar' }>
      <div className="container">
        <div className="left">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/185px-Netflix_2015_logo.svg.png' />
        
            <Link to="/" className="link">
                <span>Homepage</span>
            </Link>
            <Link to="/series" className="link">
                <span className="navbarmainLinks">Series</span>
            </Link>
            <Link to="/movies" className="link">
                <span className="navbarmainLinks">Movies</span>
            </Link>
            <span>New and Popular</span>
            <span>My list</span>

        </div>
        <div className="right">

            <Search className="icons" />
            <span>KID</span>
            <Notifications className="icons" />
            <img src="https://wallpaperaccess.com/full/435440.jpg" />
            <div className="profile">
              <ArrowDropDown className="icons" />
              <div className="options">
                <span>Settings</span>
                <span onClick={() => dispatch(logout())}>Logout</span>
              </div>
            </div>
            

        </div>
      </div>
    </div>
  )
}

export default Navbar