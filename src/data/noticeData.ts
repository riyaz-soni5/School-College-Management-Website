export interface Notice {
  id: number;
  title: string;
  date: string;
  content: string;
  contact?: string;
}

export const noticeData: Notice[] = [
  {
    id: 1,
    title: "ADMISSION EXAM POSTPONED!",
    date: "September 12, 2025",
    content: `Dear Students and Parents,

For the safety and well-being of our community, the administration originally scheduled for September 13, 2025, at Everest International School (Center 74064) has been postponed.

The exam will now be held on September 27, 2025, at the same center.

All registrations remain valid for the rescheduled date, and the School Board has been notified accordingly. We regret any inconvenience caused and appreciate your cooperation.`,
    contact: "anit.pandey@everest.edu.np",
  },
  {
    id: 2,
    title: "NOTICE: PARENT-TEACHER MEETING",
    date: "October 5, 2025",
    content: `We invite all parents to attend the upcoming Parent-Teacher Meeting.

This will provide an opportunity to discuss your child's academic progress and address any concerns.`,
    contact: "info@everest.edu.np",
  },
];
