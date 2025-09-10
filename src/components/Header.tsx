import { NavLink, Link } from 'react-router-dom';
import mountainLogo from '../assets/imgs/Main-logo-mountain.png'
import textLogo from '../assets/imgs/Main-logo-text.png'


function Header(){
    return (
        <header className='w-full bg-(--primary-color) justify-start md:justify-center flex'>
            <div className="header-wraper flex items-center gap-x-[20vw]">

                <div className="flex items-center p-1">
                    <Link to="/" ><img src={mountainLogo} alt="School Logo"  className='nav-logo w-15 h-15'/> </Link>
                    <Link to="/"><img src={textLogo} alt="" className='nav-logo w-30 h-10' /></Link>
                    
                    
                </div>
                <ul className=' md:flex lg:gap-x-20 gap-x-5 hidden  items-center px-5 *:hover:border-b-4  *:text-(--secondary-color) *:text-base'>
                    <li className='transtion-border-b delay-300 ease-in-out'> <NavLink to="/">Home</NavLink> </li>
                    <li> <NavLink to="/about">About Everest</NavLink> </li>
                    <li> <NavLink to="/academic-programs">Academic Programs</NavLink></li>
                    <li> <NavLink to="/admission">Admission</NavLink> </li>
                    <li> <NavLink to="/news">News</NavLink> </li>
                </ul>
            </div>
        </header>
    )
}


export default Header;