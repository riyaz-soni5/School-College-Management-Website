import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

import StudentPhoto1 from '../assets/imgs/student-photo-girl.png';
import StudentPhoto2 from '../assets/imgs/student-photo-guy.png';


interface TestomonialData {
    img : string;
    name : string;
    description: string;
}




function Testimonial({img,name,description}:TestomonialData){
    return (
        <div className="justify-center ">
            <div className="container bg-white border border-white shadow-white text-[var(--secondary-color)] rounded-md relative p-10">
                <div className="flex flex-col items-center">
                    <img src={img} alt="" className="w-20 rounded-full border" />
                    <h5>{name}</h5>
                </div>
                <div>
                    <p>{description}</p>
                </div>
                <Quote className="absolute top-0 left-0 rotate-180" size={55} fill="var(--secondary-color)" stroke="none"/>
            </div>
        </div>
    )
}


function TestimonialContainer(){

    return(

        <div className="w-full p-10 container">

            <Swiper
            autoplay = {{
                delay:2500,
                disableOnInteraction: true,
            }}
            pagination={{
                dynamicBullets:true,
            }}
            style={{
                "--swiper-pagination-color": "var(--secondary-color)",
            }}
            spaceBetween={30}
            grid={{
                rows:1,
            }}
            breakpoints={{
                640:{
                    slidesPerView:1,
                },
                768:{
                    slidesPerView:2,
                },
                1024:{
                    slidesPerView:3,
                }
            }}
            modules={[Grid,Pagination, Autoplay]}
            
            className="w-full">

                <SwiperSlide>
                    {Testimonial({img: StudentPhoto1, name: "Aruna Basnet", description: "Well qualified teacher s with well equipped science lab , the college will help you to its fullest if you want to learn but can be challenging if you are here just for fun."})}
                </SwiperSlide>
                <SwiperSlide>
                    {Testimonial({img: StudentPhoto2, name: "Riyaj Soni", description: "The faculty here are truly dedicated and knowledgeable. The labs are modern and well-maintained, making practicals much more engaging. It's a place where serious students will thrive."})}
                </SwiperSlide>
                <SwiperSlide>
                    {Testimonial({img: StudentPhoto2, name: "Mahan Shrestha", description: "Great environment for learning, especially if you're focused and goal-oriented. The college offers everything you need academically, but you need to put in the effort to make the most of it."})}
                </SwiperSlide>
                <SwiperSlide>
                    {Testimonial({img: StudentPhoto2, name: "Bibek K.C", description: "Supportive teachers, good infrastructure, and a disciplined atmosphere. If you’re committed to your studies, you’ll definitely grow here both academically and personally."})}
                </SwiperSlide>
                <SwiperSlide>
                    {Testimonial({img: StudentPhoto1, name: "Shreya Battarai", description: "A great institution for those who value education. The lab facilities are excellent, and the teachers push you to do your best. Not the place to slack off—but perfect if you’re here to build your future."})}
                </SwiperSlide>
            </Swiper>


            
        </div>

        
        
    )
}

export default TestimonialContainer