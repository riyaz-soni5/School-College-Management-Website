
import SeeImg from '../assets/imgs/see-student-img.png'
import Plus2Img from '../assets/imgs/plus2-Student-img.png'

import { useState } from 'react'

type SectionData = {
    id:string,
    name:string,
    img:string,
    description:string,
}


const Tabs: SectionData[] = [
    {
        id: "see",
        name: "SEE",
        img: SeeImg,
        description: "At Everest International School, our SEE (Secondary Education Examination) program serves as the culmination of a student's academic journey from Class 3 to Class 10. We provide a well-structured and supportive learning environment that empowers students to excel in all subjects — with a strong focus on analytical thinking, communication skills, and moral values. Our dedicated teachers guide students through a balanced curriculum that prepares them not just for exams, but for life beyond school.",

    },
    {
        id: "plus2",
        name: 'NEB +2',
        img: Plus2Img,
        description: "At Everest International School, our NEB +2 program is designed to help students transition confidently into higher education and future careers. We offer specialized streams in Science, Management, and Law, each tailored to develop academic excellence, critical thinking, and real-world skills. Whether students aim to pursue medicine, engineering, business, or legal studies, our curriculum provides a strong foundation through expert instruction, practical learning, and personal mentorship.Beyond academics, we focus on holistic development by encouraging leadership, ethical values, and active participation in co-curricular activities. With modern facilities, experienced faculty, and a supportive learning environment, Everest International School ensures that each student is prepared not just for board exams, but for the opportunities and challenges that lie ahead."
    }

]


function ProgrammerSection(){
    
    let [activeTab, changeTab] = useState("see");

    let activeContent = Tabs.find((item)=> item.id == activeTab)


    return (
        <div className='container bg-white border border-white shadow-white rounded-xl flex justify-around m-5 mx-10 overflow-hidden'>
            <div className='flex-1'>
                <img src={activeContent?.img} alt="" className='w-full h-full'/>
            </div>
            <div className='flex  flex-1 flex-col'>
                <div className='border rounded-r-xl flex *:text-2xl *:border-r *:p-2 *:hover:bg-[#DDDDDD] *:focus:bg-[#DDDDDD]'>
                    <button type='button' onClick={()=> changeTab('see')} className='cursor-pointer'>SEE</button>
                    <button type='button' onClick={()=> changeTab('plus2')} className='cursor-pointer'>NEB +2</button>
                </div>
                <div className='p-5 text-justify text-l'>
                    <p>{activeContent?.description}</p>
                </div>
                <div>
                    <p className='text-right mr-5 hover:underline mb-10 cursor-pointer'>Learn More</p>
                </div>
            </div>
        </div>
    )



}

export default ProgrammerSection