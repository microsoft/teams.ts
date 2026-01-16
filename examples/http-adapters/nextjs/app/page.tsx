export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Next.js + teams.ts Integration</h1>
      <p>
        This is a Next.js app that integrates the teams.ts SDK using a shared HTTP server.
      </p>
      <ul>
        <li>
          <strong>Teams Bot Endpoint:</strong> <code>POST /api/messages</code>
        </li>
        <li>
          <strong>Bot Manifest:</strong> <code>GET /</code> (root)
        </li>
        <li>
          <strong>This Page:</strong> Served by Next.js routing
        </li>
      </ul>
      <h2>How it works:</h2>
      <ol>
        <li>A single HTTP server is created and shared between Next.js and teams.ts</li>
        <li>Both frameworks register request handlers via <code>server.on('request', handler)</code></li>
        <li>teams.ts HttpPlugin sets up Express routes (like <code>/api/messages</code>)</li>
        <li>Next.js handles its own routes (like this page)</li>
        <li>We call <code>app.initialize()</code> instead of <code>app.start()</code> to avoid conflicting <code>server.listen()</code> calls</li>
      </ol>
    </main>
  );
}
