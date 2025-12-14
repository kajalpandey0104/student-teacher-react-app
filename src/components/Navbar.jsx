export default function Navbar({ setPage }) {
return (
<nav className="navbar">
<button onClick={() => setPage('students')}>Students</button>
<button onClick={() => setPage('teachers')}>Teachers</button>
<button onClick={() => setPage('courses')}>Courses</button>
<button onClick={() => setPage('enrollments')}>Enrollments</button>
</nav>
);
}