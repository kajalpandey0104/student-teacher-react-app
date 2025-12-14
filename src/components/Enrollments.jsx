export default function Enrollments({ students, courses, enrollments, enroll }) {
return (
<div>
<h2>Enroll Students</h2>
<table>
<thead>
<tr><th>Student</th><th>Course</th></tr>
</thead>
<tbody>
{students.map(s => (
<tr key={s.id}>
<td>{s.name}</td>
<td>
<select onChange={(e) => enroll(s.name, e.target.value)}>
<option>Select</option>
{courses.map(c => (
<option key={c.id} value={c.name}>{c.name}</option>
))}
</select>
</td>
</tr>
))}
</tbody>
</table>


<h3>Enrollment Details</h3>
<ul>
{enrollments.map((e, i) => (
<li key={i}>{e.student} → {e.course}</li>
))}
</ul>
</div>
);
}