export default function Teachers({ teachers }) {
return (
<div>
<h2>Teacher List</h2>
<table>
<thead>
<tr><th>ID</th><th>Name</th></tr>
</thead>
<tbody>
{teachers.map(t => (
<tr key={t.id}>
<td>{t.id}</td>
<td>{t.name}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}