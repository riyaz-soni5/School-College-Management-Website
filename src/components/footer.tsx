import logo from '../../public/Main-logo-full.png'
import {Facebook, Instagram, Linkedin} from 'lucide-react'

function Footer(){
    return (
        <div className="footerwraper flex flex-col items-center bg-[var(--secondary-color)] *:text-[var(--primary-color)]">
            <footer className="flex-col md:flex-row flex transtion-[gap] lg:gap-30 gap-5 p-5">
                <section className="flex flex-col justify-center items-center">
                    <div className="logo bg-[var(--primary-color)] w-50">
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <p>Kathmandu, Nepal</p>
                    </div>
                </section>
                <section className="Footer-nav">
                    <ul className='[*:font-thin]'>
                        <li className='first:font-bold'>Quick Links</li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Academic Programs</li>
                        <li>Admission</li>
                        <li>News</li>
                    </ul>

                </section>
                <section className="Programmes">
                    <ul className='[*:font-thin]'>
                        <li className='first:font-bold'>Programmes</li>
                        <li>School</li>
                        <li>High School/+2</li>
                    </ul>

                </section>
                <section className="Contact">
                    <ul className='[*:font-thin]'>
                        <li className='font-bold'>Contact Us</li>
                        <li>01-1234567,01-1234567</li>
                        <li>info@silveroakacademy.edu.np</li>
                        <li className='font-bold mt-5'>FOLLOW US</li>
                        <li className='flex gap-5 mt-1'>
                            <Facebook/>
                            <Instagram/>
                            <Linkedin/>
                        </li>
                    </ul>
                </section>
            </footer>
            <div className='w-full text-center'>
                <p className='p-5 bg-[#003476]'>@2025 Everest International School. All Rights Reserved.</p>
            </div>
        </div>

    )
}


export default Footer