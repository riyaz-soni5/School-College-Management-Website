import { Typewriter } from 'react-simple-typewriter'
import { NavLink } from 'react-router-dom';

import SectionContainer from "../components/SectionContainer";
import SchoolImg from '../assets/imgs/school-Image.png';
import CollageImg1 from '../assets/imgs/collage-1.png';
import CollageImg2 from '../assets/imgs/collage-2.png';
import CollageImg3 from '../assets/imgs/collage-3.png';
import CollageImg4 from '../assets/imgs/collage-4.png';
import CollageImg5 from '../assets/imgs/collage-5.png';
import StudentPhoto1 from '../assets/imgs/student-photo-girl.png';
import StudentPhoto2 from '../assets/imgs/student-photo-guy.png';
import PrincipalePhoto from '../assets/imgs/principal-photo.png';
import StudentDetailsCard from "../components/StudentDetailsCard";
import ProgrammerSection from "../components/ProgrammesSection";
import CounterCard from '../components/CounterCard';
import HighlightedNews from '../components/HighlightedNews';
import { Palette, Trophy, User, UserStar } from 'lucide-react';
import Gallery from '../components/Gallery';
import Testimonial from '../components/Testimonial';





function Home(){
    return (
        <main className="flex flex-col items-center justify-center">
            <SectionContainer backgroundImg=  {SchoolImg} height="small">
                <div className='w-full h-full flex items-end md:text-4xl text-2xl'>
                    <h1>WE BUILD{' '}

                        <span className='text-[#F5D32B]'>
                            <Typewriter 
                            words={["FUTURES,", "LEADERS,", "INNOVATORS,", "DREAMS,"]}
                            loop={false}
                            cursor
                            cursorStyle='|'
                            />

                        </span>
                        <span>
                            <button className='block text-xl border p-3 rounded-sm hover:bg-[var(--secondary-color)] cursor-pointer'><NavLink to="/admission">Apply Now</NavLink></button>
                        </span>
                    </h1>
                    
                </div>
                
            </SectionContainer>
            <SectionContainer upperTitle="MESSAGE FROM" belowTitle="PRINCIPAL" description="Welcome to Everest International School, a place where learning meets purpose and potential is nurtured with care.At Everest International School, we believe education is not just about academic success—it's about shaping responsible global citizens with strong values, sharp minds, and compassionate hearts. Located in the heart of Nepal, our school blends international standards with the rich cultural heritage of our nation, providing a truly holistic learning environment.Our mission is to empower students to think critically, communicate effectively, and act ethically. We offer a balanced curriculum that encourages creativity, innovation, and academic excellence while placing equal emphasis on character-building and community service.Our dedicated team of educators brings passion, experience, and commitment to every classroom, guiding students through a journey of discovery and growth. We foster an environment where students feel safe, supported, and inspired to achieve their highest potential.As the principal of Everest International School, I am proud to lead a community that values curiosity, respect, and lifelong learning. We are not just preparing students for exams—we are preparing them for life.Thank you for taking the time to learn more about us. I warmly invite you to visit our school, meet our team, and see firsthand what makes Everest International School a unique and inspiring place to learn.With warm regards, Mr.Rajendra Prasad Joshi, Everest International School" textAlign="left" titleAlignment="left" background="secondary">
                <div className="flex flex-col items-center">
                    <img src={PrincipalePhoto} alt="" />
                    <h5>Mr. Rajendra Prasad Joshi</h5>
                </div>
            </SectionContainer>
            <SectionContainer upperTitle="THE EVEREST" belowTitle="EXPERIENCE" description="At Everest International School, learning goes far beyond textbooks and classrooms. Join us in a journey filled with vibrant events, lasting friendships, and unforgettable memories. Experience education at its peak — experience Everest!" background="primary" height="100%" titleAlignment="top">
                <div className="w-full h-full grid grid-row-2 grid-cols-[repeat(3,20%)] gap-2 m-5 items-center *:flex *:justify-center justify-center">
                    <div className="order-1">
                        <img src={CollageImg1} alt="" />

                    </div>

                    <div className="order-2">
                        <img src={CollageImg2} alt="" />

                    </div>
                    <div className="order-4">
                        <img src={CollageImg3} alt="" />

                    </div>
                    <div className="order-5">
                        <img src={CollageImg4} alt="" />

                    </div >
                    <div className="order-3 row-span-2">
                        <img src={CollageImg5} alt="" />
                    </div>


                </div>
            </SectionContainer>
            <SectionContainer background='primary' upperTitle='WHY CHOOSE US?' description="At Everest International School, we combine academic excellence with a supportive, inclusive environment that helps every student thrive. Our experienced faculty, modern facilities, and focus on real-world skills ensure you’re not just prepared for exams, but for life beyond the classroom. Whether you're aiming for university, a career, or personal growth, we provide the resources, guidance, and opportunities to help you succeed."> 
                <div className='flex items-center justify-around w-full'>
                        <CounterCard icon={Trophy} iconBg='#FFF9C4' counter= "15+"  description='Years Of Excellence' />
                        <CounterCard icon={User} iconBg='#C8E6C9' counter='500+' description='Total Student Enrolled' />
                        <CounterCard icon={UserStar} iconBg='#BBDEFB' counter='100+' description='Total Teacher/Staff' />
                        <CounterCard icon={Palette} iconBg='#FFE0B2' counter='50+' description='Extra Activities'/>

                </div>
            </SectionContainer>


            <SectionContainer upperTitle="SEE BOARD" belowTitle="TOPPERS" description="At Everest International School, excellence isn't just a goal — it's our standard.Our students consistently achieve outstanding results at national and international levels, reflecting our commitment to high-quality education and personal growth." titleAlignment="left" background="secondary">

                <div className="grid grid-cols-3 grid-rows-2 w-full h-full">
                    <StudentDetailsCard studentPic={StudentPhoto1} studentName= "Aayusha Karki" GPA={4.00} />
                    <StudentDetailsCard studentPic={StudentPhoto2} studentName= "Pratik Sharma" GPA={4.00} />
                    <StudentDetailsCard studentPic={StudentPhoto1} studentName= "Shena Adhikari" GPA={4.00} />
                    <StudentDetailsCard studentPic={StudentPhoto2} studentName= "Ramesh Bhandari" GPA={3.91} />
                    <StudentDetailsCard studentPic={StudentPhoto1} studentName= "Sita Tamang" GPA={3.90} />
                    <StudentDetailsCard studentPic={StudentPhoto2} studentName= "Anish Karel" GPA={3.90} />
                    
                </div>

            </SectionContainer>
            <SectionContainer background="primary" upperTitle="OUR" belowTitle="PROGRAMMES"> 
                <div className="w-full flex justify-around items-center">
                    <ProgrammerSection />
                </div>
            </SectionContainer>
            <SectionContainer upperTitle='NEWS/' belowTitle='UPDATES'>
                <HighlightedNews />
            </SectionContainer>
            <SectionContainer upperTitle='WORDS OF INSPIRATION' belowTitle='SUCESS STORIES OF OUR ACHIEVERS' background='primary'>
                <Testimonial />
            </SectionContainer>


        </main>
    )

}



export default Home;