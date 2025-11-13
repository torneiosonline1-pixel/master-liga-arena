export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <h1>Master Liga Arena</h1>
      <p>Tournament Management System for FIFA/PES</p>
      <div style={{ marginTop: '2rem' }}>
        <p><strong>Backend Status:</strong> ✓ Running</p>
      </div>
      <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <a href="/admin/dashboard" style={{ padding: '0.5rem 1rem', backgroundColor: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>Admin Panel</a>
        <a href="/user/dashboard" style={{ padding: '0.5rem 1rem', backgroundColor: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>User Dashboard</a>
      </div>
    </div>
  );
}
