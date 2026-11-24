const http = require('http');
const PAGE = `<!doctype html><html><head><meta charset="utf-8"><title>Cartly</title></head>
<body style="font-family:system-ui;max-width:420px;margin:48px auto;background:#f4f1ea">
<h1>Cartly</h1><p>Server-side total, fetched from the API.</p>
<button id="go" type="button">Get total</button><p id="out"></p><footer>© Cartly</footer>
<script>document.getElementById('go').addEventListener('click', async () => {
  const r = await fetch('/api/total'); const j = await r.json();
  document.getElementById('out').textContent = 'Total: $' + j.total;
});</script></body></html>`;
http.createServer((req, res) => {
  if (req.url === '/api/total') { res.setHeader('content-type','application/json'); return res.end(JSON.stringify({ total: 42 })); }
  if (req.url === '/') { res.setHeader('content-type','text/html'); return res.end(PAGE); }
  res.statusCode = 404; res.end('not found');
}).listen(process.env.PORT || 3000);
