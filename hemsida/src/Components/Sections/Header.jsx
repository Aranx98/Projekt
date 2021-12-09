import "./Header.css";
import { Link } from "react-scroll";

function Header() {
   return (
      <header className="header">
          <nav className="nav-menu-container">
            <ul className ="nav-menu">

            <Link 
    className="link-all"
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}

>Home</Link>           
<Link
    className="link-all"
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}

>About</Link>
<Link 
    className="link-all"
    activeClass="active"
    to="testimonials"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}

>Testimonials</Link>
<Link
    className="link-all"
    activeClass="active"
    to="portfolio"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}

>Portfolio</Link>
<Link 
    className="link-all"
    activeClass="active"
    to="weather"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}

>Weather</Link>
<Link 
    className="link-all"
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}

>Contact</Link>
            </ul>
          </nav>
      </header>
   );
}

export default Header;