// src/data/newsData.tsx
import annualImg from "../assets/imgs/annual.jpg";
import admissionImg from "../assets/imgs/admission.jpg";
import vacancyImg from "../assets/imgs/vacancy.jpg";
import parentsImg from "../assets/imgs/parents.jpg";
import melaImg from "../assets/imgs/mela.jpg";

export interface NewsItem {
  id: string;
  title: string;
  description: string; // short text for cards
  content: string; // full text for details
  date: string;
  image: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "School Annual Day",
    description:
      "Join us for a day full of cultural programs and fun activities.",
    content: `Everest International School celebrated its Annual Day with grandeur and excitement. The event showcased the remarkable talents of our students through various performances:

- Dance Performances: Class 5 to 8 students presented lively and colorful dances that highlighted creativity and teamwork.

- One-Act Play: Class 9 students performed an engaging one-act play, demonstrating excellent acting and storytelling skills.

- Music Recital: The school choir performed beautiful musical pieces, filling the auditorium with harmony and joy.

Awards and Recognition:

- Academic excellence awards were presented to students who achieved outstanding results.

- Sports achievers were recognized for their hard work, determination, and victories in various competitions.

-Best art projects were acknowledged, showcasing creativity and innovation among students.

The Annual Day was a memorable celebration bringing together students, teachers, and parents, fostering a sense of community, pride, and accomplishment. Everyone enjoyed the day full of entertainment, learning, and joyous moments.`,
    date: "2025-09-10",
    image: annualImg,
  },
  {
    id: "2",
    title: "Admission Open for Class 11",
    description:
      "Admissions are now open for the academic year 2025-26 for Class 11.",
    content: `Everest International School is now accepting applications for Class 11 admissions.

Form Distribution: Admission forms will be available from 15th September, 2025 at the school office and online.

Eligibility Criteria:

- Completion of Class 10 from a recognized school in Kathmandu or equivalent.

- Minimum required grades in core subjects (English, Mathematics, Science).

- Submission of academic transcripts and character certificate.

- Admission may include a personal interview or entrance test depending on the stream chosen.

- Prospective students and parents are encouraged to visit the school for guidance and detailed information.`,
    date: "2025-09-05",
    image: admissionImg,
  },
  {
    id: "3",
    title: "Admission Open for Class 1",
    description:
      "Admissions are now open for the academic year 2025-26 for Class 1.",
    content: `Everest International School is now accepting applications for Class 1 admissions for the upcoming academic session.

Form Distribution: Admission forms will be available from 10th September, 2025 at the school office and online on the school website.

Eligibility Criteria:

- The child should be 5-6 years old as of [Insert Cut-off Date].

- Completion of pre-school or kindergarten from a recognized institution in Kathmandu.

- Submission of a birth certificate and previous school records (if applicable).

- Parents may be invited for a short interaction or orientation session to understand the school environment.

Admissions are offered on a first-come, first-served basis, so parents are encouraged to submit forms early to secure a place for their child.`,
    date: "2025-09-05",
    image: admissionImg,
  },
  {
    id: "4",
    title: "Vacancy Announcement",
    description:
      "Strong understanding of Classroom Management and excellent communication skills.",
    content: `Everest International School is looking for a passionate English Teacher to join our team.

Requirements:

- Bachelor's degree in English or Education.

- Minimum 2 years teaching experience preferred.

- Strong communication and interpersonal skills.

- Commitment to student development and school activities.

Interested candidates can submit their CV and cover letter to info@everstinternatioal.edu.np or visit the school office by 10th August, 2025.`,
    date: "2025-08-05",
    image: vacancyImg,
  },
  {
    id: "5",
    title: "Parents Day of Class 8-9",
    description: "Parents Day of Class 8-9 on August 2, 2025.",
    content: `Everest International School organized Parents Day for Classes 8 and 9, creating a platform for students to showcase their talents and interact with parents. Highlights included:

- One-Act Play: Students delivered an engaging and entertaining play, reflecting teamwork and creativity.

- Singing Performances: Talented students from Classes 8 and 9 performed melodious songs for their parents.

- Dance Performances: Colorful and energetic dances entertained and impressed the audience.

The day strengthened the bond between parents, teachers, and students, celebrating achievements and fostering school spirit.`,
    date: "2025-07-25",
    image: parentsImg,
  },
  {
    id: "6",
    title: "School Fair 2025-2026",
    description: "School Fair on December 21, 2025.",
    content: `Everest International School is excited to announce School Fair 2025, a fun-filled event for students, parents, and the community.

Activities Include:

- Games and competitions for all age groups.

- Food stalls offering a variety of delicacies.

- Exhibitions of student's art and projects.

- Live performances including music, dance, and drama.

The school fair aims to promote creativity, teamwork, and community engagement while creating memorable experiences for everyone attending.`,
    date: "2025-10-25",
    image: melaImg,
  },
];
