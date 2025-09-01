import mountainLogo from '../assets/imgs/Main-logo-mountain.png'
import textLogo from '../assets/imgs/Main-logo-text.png'

function Header(){
    return (
        <header className='w-screen bg-(--primary-color) justify-start md:justify-center flex p-5'>
            <div className="header-wraper flex items-center gap-x-[20vw]">

                <div className="flex items-center p-1">
                    <img src={mountainLogo} alt="School Logo"  className='nav-logo w-15 h-15'/>
                    <img src={textLogo} alt="" className='nav-logo w-30 h-10' />
                </div>
                <ul className=' md:flex lg:gap-x-20 gap-x-5 hidden  items-center px-5 *:hover:border-b-4  *:text-(--secondary-color) *:text-base'>
                    <li className='transtion-border-b delay-300 ease-in-out'><a href="#">Home</a></li>
                    <li><a href="">About Everest</a></li>
                    <li><a href="">Academic Programs</a></li>
                    <li><a href="">Admission</a></li>
                    <li ><a href="">News</a></li>
                </ul>
            </div>
        </header>
    )
}


export default Header;