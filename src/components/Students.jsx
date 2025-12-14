export default function Students({ students }) {
return (
<div>
<h2>Student List</h2>
<table>
<thead>
<tr><th>ID</th><th>Name</th></tr>
</thead>
<tbody>
{students.map(s => (
<tr key={s.id}>
<td>{s.id}</td>
<td>{s.name}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}