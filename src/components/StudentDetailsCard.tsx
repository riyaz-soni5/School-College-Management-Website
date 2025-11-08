type StudentsDetails = {
  studentPic: string;
  studentName: string;
  GPA: number;
};

function StudentDetailsCard({ studentPic, studentName, GPA }: StudentsDetails) {
  return (
    <div className="flex flex-col items-center text-center m-4 shrink-0 ">
      <div
        style={{ backgroundImage: `url(${studentPic})` }}
        className="container w-[170px] h-[170px] bg-cover bg-center rounded-full"
      ></div>
      <div>
        <div>
          <p>{studentName}</p>
        </div>
        <div>
          <p>
            GPA : <strong>{GPA}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentDetailsCard;
