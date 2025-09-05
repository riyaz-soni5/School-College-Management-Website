type StudentsDetails = {
    studentPic: string,
    studentName: string,
    GPA: number
}



function StudentDetailsCard({studentPic, studentName, GPA}:StudentsDetails){
    return (
        <div className="flex flex-col w-full items-center *:text-center">
            <div style={{backgroundImage: `url(${studentPic})`}} className="w-[200px] h-[200px] bg-contain">
            </div>
            <div>
                <div className="text-[var(--secondary-color)]">
                    <p>{studentName}</p>
                </div>
                <div>
                    <p>GPA : <strong>{GPA}</strong></p>
                </div>

            </div>
        </div>
    )
}


export default StudentDetailsCard