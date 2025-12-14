import { useState } from 'react';
import Navbar from './components/Navbar';
import Students from './components/Students';
import Teachers from './components/Teachers';
import Courses from './components/Courses';
import Enrollments from './components/Enrollments';


function App() {
const [page, setPage] = useState('students');


const [students] = useState([
{ id: 1, name: 'Rahul' },
{ id: 2, name: 'Anjali' }
]);


const [teachers] = useState([
{ id: 1, name: 'Mr. Sharma' },
{ id: 2, name: 'Ms. Gupta' }
]);


const [courses, setCourses] = useState([
{ id: 1, name: 'Math', teacher: '' },
{ id: 2, name: 'Science', teacher: '' }
]);


const [enrollments, setEnrollments] = useState([]);


const assignTeacher = (courseId, teacherName) => {
setCourses(courses.map(c =>
c.id === courseId ? { ...c, teacher: teacherName } : c
));
};


const enroll = (student, course) => {
setEnrollments([...enrollments, { student, course }]);
};


return (
<>
<Navbar setPage={setPage} />
{page === 'students' && <Students students={students} />}
{page === 'teachers' && <Teachers teachers={teachers} />}
{page === 'courses' && <Courses courses={courses} teachers={teachers} assignTeacher={assignTeacher} />}
{page === 'enrollments' && <Enrollments students={students} courses={courses} enrollments={enrollments} enroll={enroll} />}
</>
);
}


export default App;