export default function AdminDashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the Master Liga Arena Admin Panel</p>
      <div style={{ marginTop: '2rem', border: '1px solid #ddd', padding: '1rem', borderRadius: '4px' }}>
        <h2>Tournament Management</h2>
        <ul style={{ marginTop: '1rem' }}>
          <li>Create and manage tournaments</li>
          <li>View player statistics and ratings</li>
          <li>Manage team assignments</li>
          <li>Configure tournament settings</li>
          <li>View system reports and analytics</li>
        </ul>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <a href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>Back to Home</a>
      </div>
    </div>
  );
}
