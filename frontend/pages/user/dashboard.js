export default function UserDashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>User Dashboard</h1>
      <p>Welcome to Master Liga Arena - Your Tournament Portal</p>
      <div style={{ marginTop: '2rem', border: '1px solid #ddd', padding: '1rem', borderRadius: '4px' }}>
        <h2>Your Status</h2>
        <ul style={{ marginTop: '1rem' }}>
          <li>View active tournaments</li>
          <li>Check your team standings</li>
          <li>Track match history</li>
          <li>View player statistics</li>
          <li>Participate in leagues</li>
        </ul>
      </div>
      <div style={{ marginTop: '2rem', backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '4px' }}>
        <h3>Quick Stats</h3>
        <p>Tournaments Joined: 5</p>
        <p>Current Ranking: Pending</p>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <a href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>Back to Home</a>
      </div>
    </div>
  );
}
