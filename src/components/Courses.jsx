export default function Courses({ courses, teachers, assignTeacher }) {
return (
<div>
<h2>Courses</h2>
<table>
<thead>
<tr><th>Course</th><th>Teacher</th></tr>
</thead>
<tbody>
{courses.map(course => (
<tr key={course.id}>
<td>{course.name}</td>
<td>
<select onChange={(e) => assignTeacher(course.id, e.target.value)}>
<option>Select</option>
{teachers.map(t => (
<option key={t.id} value={t.name}>{t.name}</option>
))}
</select>
</td>
</tr>
))}
</tbody>
</table>
</div>
);
}