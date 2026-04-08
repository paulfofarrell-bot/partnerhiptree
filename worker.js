import { SignJWT, jwtVerify } from 'https://esm.sh/jose@5.2.0';

const JWT_SECRET_KEY = async (secret) => {
  const enc = new TextEncoder();
  return crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
};

async function hashPassword(password) {
  const enc = new TextEncoder();
  const data = enc.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function createToken(payload, secret) {
  const key = await JWT_SECRET_KEY(secret);
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(key);
}

async function verifyToken(token, secret) {
  try {
    const key = await JWT_SECRET_KEY(secret);
    const { payload } = await jwtVerify(token, key);
    return payload;
  } catch {
    return null;
  }
}

function getToken(request) {
  const cookie = request.headers.get('Cookie') || '';
  const match = cookie.match(/pt_session=([^;]+)/);
  return match ? match[1] : null;
}

function redirectToLogin(message) {
  const url = message ? `/login?error=${encodeURIComponent(message)}` : '/login';
  return Response.redirect(url, 302);
}

function htmlResponse(html, status = 200, extraHeaders = {}) {
  return new Response(html, {
    status,
    headers: { 'Content-Type': 'text/html; charset=utf-8', ...extraHeaders }
  });
}

const LOGIN_PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login — The Partnership Tree</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,600&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Lato',sans-serif;background:#0f2318;min-height:100vh;display:flex;align-items:center;justify-content:center;}
.card{background:#fff;border-radius:16px;padding:48px;width:100%;max-width:420px;box-shadow:0 24px 80px rgba(0,0,0,0.4);}
.logo{display:flex;align-items:center;gap:12px;margin-bottom:32px;}
.logo-icon{width:36px;height:36px;}
.logo-text{font-family:'Playfair Display',serif;font-size:18px;color:#1a3a2a;font-weight:600;}
.logo-sub{font-size:10px;color:#6b7c6b;letter-spacing:.06em;text-transform:uppercase;margin-top:1px;}
h1{font-family:'Playfair Display',serif;font-size:26px;color:#1a3a2a;margin-bottom:8px;}
p{font-size:14px;color:#6b7c6b;margin-bottom:28px;line-height:1.6;}
label{font-size:11px;font-weight:700;color:#1a3a2a;letter-spacing:.06em;text-transform:uppercase;display:block;margin-bottom:6px;}
input{width:100%;padding:12px 14px;border:1.5px solid #dde8de;border-radius:8px;font-size:14px;font-family:inherit;color:#1a3a2a;outline:none;margin-bottom:16px;transition:border-color .2s;}
input:focus{border-color:#c9a84c;}
.btn{width:100%;padding:14px;background:#1a3a2a;border:none;border-radius:8px;font-weight:800;font-size:15px;color:#fff;cursor:pointer;font-family:inherit;letter-spacing:.04em;margin-top:4px;}
.btn:hover{background:#0f2318;}
.error{background:#ffeaea;color:#c0392b;padding:12px;border-radius:8px;font-size:13px;font-weight:700;margin-bottom:20px;display:none;}
.footer{margin-top:24px;text-align:center;font-size:12px;color:#6b7c6b;}
.footer a{color:#1a3a2a;font-weight:700;text-decoration:none;}
</style>
</head>
<body>
<div class="card">
  <div class="logo">
    <svg class="logo-icon" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="18" fill="#1a3a2a"/>
      <path d="M18 8 C18 8 10 14 10 20 C10 24.4 13.6 28 18 28 C22.4 28 26 24.4 26 20 C26 14 18 8 18 8Z" fill="#c9a84c" opacity="0.9"/>
      <path d="M18 12 C18 12 13 16 13 20 C13 22.8 15.2 25 18 25 C20.8 25 23 22.8 23 20 C23 16 18 12 18 12Z" fill="#fff" opacity="0.15"/>
    </svg>
    <div>
      <div class="logo-text">The Partnership Tree</div>
      <div class="logo-sub">A Life Science Partner Network</div>
    </div>
  </div>
  <h1>Welcome back</h1>
  <p>Sign in to access the partner search platform.</p>
  <div class="error" id="err">__ERROR__</div>
  <form method="POST" action="/login">
    <label>Email address</label>
    <input type="email" name="email" placeholder="your@company.com" required autofocus/>
    <label>Password</label>
    <input type="password" name="password" placeholder="Your password" required/>
    <button type="submit" class="btn">Sign In →</button>
  </form>
  <div class="footer">Need access? <a href="/#page-join" onclick="window.location.href='https://thepartnershiptree.com'">Request a demo</a></div>
</div>
<script>
const p=new URLSearchParams(location.search);
const e=p.get('error');
if(e){const el=document.getElementById('err');el.textContent=e;el.style.display='block';}
</script>
</body>
</html>`;

const SET_PASSWORD_PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Set Your Password — The Partnership Tree</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,600&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Lato',sans-serif;background:#0f2318;min-height:100vh;display:flex;align-items:center;justify-content:center;}
.card{background:#fff;border-radius:16px;padding:48px;width:100%;max-width:420px;box-shadow:0 24px 80px rgba(0,0,0,0.4);}
.logo{display:flex;align-items:center;gap:12px;margin-bottom:32px;}
.logo-icon{width:36px;height:36px;}
.logo-text{font-family:'Playfair Display',serif;font-size:18px;color:#1a3a2a;font-weight:600;}
.logo-sub{font-size:10px;color:#6b7c6b;letter-spacing:.06em;text-transform:uppercase;margin-top:1px;}
h1{font-family:'Playfair Display',serif;font-size:26px;color:#1a3a2a;margin-bottom:8px;}
p{font-size:14px;color:#6b7c6b;margin-bottom:28px;line-height:1.6;}
label{font-size:11px;font-weight:700;color:#1a3a2a;letter-spacing:.06em;text-transform:uppercase;display:block;margin-bottom:6px;}
input{width:100%;padding:12px 14px;border:1.5px solid #dde8de;border-radius:8px;font-size:14px;font-family:inherit;color:#1a3a2a;outline:none;margin-bottom:16px;transition:border-color .2s;}
input:focus{border-color:#c9a84c;}
.btn{width:100%;padding:14px;background:#1a3a2a;border:none;border-radius:8px;font-weight:800;font-size:15px;color:#fff;cursor:pointer;font-family:inherit;letter-spacing:.04em;margin-top:4px;}
.btn:hover{background:#0f2318;}
.error{background:#ffeaea;color:#c0392b;padding:12px;border-radius:8px;font-size:13px;font-weight:700;margin-bottom:20px;display:none;}
.notice{background:#f0f8f0;color:#1a6b2a;padding:14px;border-radius:8px;font-size:13px;margin-bottom:24px;line-height:1.6;}
</style>
</head>
<body>
<div class="card">
  <div class="logo">
    <svg class="logo-icon" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="18" fill="#1a3a2a"/>
      <path d="M18 8 C18 8 10 14 10 20 C10 24.4 13.6 28 18 28 C22.4 28 26 24.4 26 20 C26 14 18 8 18 8Z" fill="#c9a84c" opacity="0.9"/>
      <path d="M18 12 C18 12 13 16 13 20 C13 22.8 15.2 25 18 25 C20.8 25 23 22.8 23 20 C23 16 18 12 18 12Z" fill="#fff" opacity="0.15"/>
    </svg>
    <div>
      <div class="logo-text">The Partnership Tree</div>
      <div class="logo-sub">A Life Science Partner Network</div>
    </div>
  </div>
  <h1>Set your password</h1>
  <div class="notice">Welcome! This is your first login. Please set a personal password to secure your account.</div>
  <div class="error" id="err"></div>
  <form method="POST" action="/set-password">
    <label>New password</label>
    <input type="password" name="password" id="pw" placeholder="Minimum 8 characters" required/>
    <label>Confirm password</label>
    <input type="password" name="confirm" id="pw2" placeholder="Repeat your password" required/>
    <button type="submit" class="btn">Set Password & Continue →</button>
  </form>
</div>
<script>
document.querySelector('form').addEventListener('submit',function(e){
  var p=document.getElementById('pw').value;
  var p2=document.getElementById('pw2').value;
  var err=document.getElementById('err');
  if(p.length<8){e.preventDefault();err.textContent='Password must be at least 8 characters.';err.style.display='block';return;}
  if(p!==p2){e.preventDefault();err.textContent='Passwords do not match.';err.style.display='block';return;}
});
</script>
</body>
</html>`;

const ADMIN_PAGE = (users) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin — The Partnership Tree</title>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Lato',sans-serif;background:#f5f5f0;min-height:100vh;padding:40px 24px;}
.container{max-width:900px;margin:0 auto;}
h1{font-size:24px;color:#1a3a2a;margin-bottom:6px;}
.sub{font-size:14px;color:#6b7c6b;margin-bottom:32px;}
.card{background:#fff;border-radius:12px;padding:28px;border:1.5px solid #dde8de;margin-bottom:24px;}
h2{font-size:16px;color:#1a3a2a;margin-bottom:20px;font-weight:700;}
label{font-size:11px;font-weight:700;color:#1a3a2a;letter-spacing:.06em;text-transform:uppercase;display:block;margin-bottom:5px;}
input{width:100%;padding:10px 12px;border:1.5px solid #dde8de;border-radius:7px;font-size:13px;font-family:inherit;color:#1a3a2a;outline:none;margin-bottom:12px;}
input:focus{border-color:#c9a84c;}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.btn{padding:10px 20px;background:#1a3a2a;border:none;border-radius:7px;font-weight:700;font-size:13px;color:#fff;cursor:pointer;font-family:inherit;}
.btn-red{background:#c0392b;}
.msg{font-size:13px;font-weight:700;margin-top:12px;display:none;}
table{width:100%;border-collapse:collapse;font-size:13px;}
th{text-align:left;font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#6b7c6b;padding:8px 12px;border-bottom:2px solid #dde8de;}
td{padding:10px 12px;border-bottom:1px solid #f0f0ea;color:#1a3a2a;vertical-align:middle;}
.badge{display:inline-block;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:700;}
.badge-green{background:#e8f5e9;color:#1a6b2a;}
.badge-red{background:#ffeaea;color:#c0392b;}
.badge-amber{background:#fff8e1;color:#8a6000;}
.logout{float:right;font-size:13px;color:#c0392b;font-weight:700;text-decoration:none;}
</style>
</head>
<body>
<div class="container">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
    <h1>Platform Admin</h1>
    <a href="/logout" class="logout">Log out</a>
  </div>
  <div class="sub">The Partnership Tree — User Management</div>

  <div class="card">
    <h2>Create New User</h2>
    <form method="POST" action="/admin/create-user">
      <div class="grid">
        <div><label>Full Name *</label><input type="text" name="name" placeholder="Jane Smith" required/></div>
        <div><label>Company *</label><input type="text" name="company" placeholder="Pharma Co Ltd" required/></div>
      </div>
      <div class="grid">
        <div><label>Email *</label><input type="email" name="email" placeholder="jane@pharma.com" required/></div>
        <div><label>Role</label><input type="text" name="role" placeholder="Head of Business Development"/></div>
      </div>
      <label>Temporary Password *</label>
      <input type="text" name="temp_password" placeholder="e.g. Welcome2025" required style="margin-bottom:16px;"/>
      <button type="submit" class="btn">Create User →</button>
    </form>
  </div>

  <div class="card">
    <h2>Current Users (${users.length})</h2>
    <table>
      <tr><th>Name</th><th>Company</th><th>Email</th><th>Role</th><th>Status</th><th>First Login</th><th>Created</th><th></th></tr>
      ${users.map(u => `
      <tr>
        <td>${u.name}</td>
        <td>${u.company}</td>
        <td>${u.email}</td>
        <td>${u.role || '—'}</td>
        <td><span class="badge ${u.active ? 'badge-green' : 'badge-red'}">${u.active ? 'Active' : 'Inactive'}</span></td>
        <td><span class="badge ${u.first_login ? 'badge-amber' : 'badge-green'}">${u.first_login ? 'Pending' : 'Set'}</span></td>
        <td>${u.created_at ? u.created_at.substring(0,10) : '—'}</td>
        <td>
          <form method="POST" action="/admin/toggle-user" style="display:inline;">
            <input type="hidden" name="id" value="${u.id}"/>
            <input type="hidden" name="active" value="${u.active ? 0 : 1}"/>
            <button type="submit" class="btn ${u.active ? 'btn-red' : ''}" style="padding:4px 10px;font-size:11px;">${u.active ? 'Deactivate' : 'Activate'}</button>
          </form>
        </td>
      </tr>`).join('')}
    </table>
  </div>
</div>
</body>
</html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;
    const JWT_SECRET = env.JWT_SECRET || 'pt-secret-change-this';

    // ── CORS preflight ──
    if (method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    // ── Redirect www to non-www ──
    if (url.hostname === 'www.thepartnershiptree.com') {
      return Response.redirect(url.href.replace('www.thepartnershiptree.com', 'thepartnershiptree.com'), 301);
    }

    // ── Public routes (no auth needed) ──

    // Sitemap
    if (path === '/sitemap.xml') {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://thepartnershiptree.com/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://thepartnershiptree.com/#about</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://thepartnershiptree.com/#faq</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://thepartnershiptree.com/#services</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://thepartnershiptree.com/#join</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://thepartnershiptree.com/#contact</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
</urlset>`;
      return new Response(sitemap, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=86400' } });
    }

    // Robots
    if (path === '/robots.txt') {
      const robots = `User-agent: *\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: ClaudeBot\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: https://thepartnershiptree.com/sitemap.xml`;
      return new Response(robots, { headers: { 'Content-Type': 'text/plain', 'Cache-Control': 'public, max-age=86400' } });
    }

    // llms.txt
    if (path === '/llms.txt') {
      return env.ASSETS.fetch(request);
    }

    // Login page GET
    if (path === '/login' && method === 'GET') {
      return htmlResponse(LOGIN_PAGE);
    }

    // Login POST
    if (path === '/login' && method === 'POST') {
      const form = await request.formData();
      const email = (form.get('email') || '').toLowerCase().trim();
      const password = form.get('password') || '';

      const user = await env.DB.prepare('SELECT * FROM users WHERE email = ? AND active = 1').bind(email).first();

      if (!user) {
        return redirectToLogin('Invalid email or password.');
      }

      // Check password - handle both plain temp passwords and hashed
      const hashed = await hashPassword(password);
      const validHash = user.password_hash === hashed;
      const validTemp = user.password_hash === password; // plain temp password

      if (!validHash && !validTemp) {
        return redirectToLogin('Invalid email or password.');
      }

      // Create session token
      const token = await createToken({ userId: user.id, email: user.email, name: user.name }, JWT_SECRET);

      const headers = {
        'Set-Cookie': `pt_session=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=604800`,
        'Location': user.first_login ? '/set-password' : '/'
      };

      return new Response(null, { status: 302, headers });
    }

    // Logout
    if (path === '/logout') {
      return new Response(null, {
        status: 302,
        headers: {
          'Set-Cookie': 'pt_session=; Path=/; HttpOnly; Secure; Max-Age=0',
          'Location': '/login'
        }
      });
    }

    // Set password page GET
    if (path === '/set-password' && method === 'GET') {
      const token = getToken(request);
      const payload = token ? await verifyToken(token, JWT_SECRET) : null;
      if (!payload) return redirectToLogin('Please log in first.');
      return htmlResponse(SET_PASSWORD_PAGE);
    }

    // Set password POST
    if (path === '/set-password' && method === 'POST') {
      const token = getToken(request);
      const payload = token ? await verifyToken(token, JWT_SECRET) : null;
      if (!payload) return redirectToLogin('Please log in first.');

      const form = await request.formData();
      const password = form.get('password') || '';
      const confirm = form.get('confirm') || '';

      if (password.length < 8 || password !== confirm) {
        return htmlResponse(SET_PASSWORD_PAGE.replace('display:none', 'display:block').replace('</div>\n<form', 'Invalid password.</div>\n<form'));
      }

      const hashed = await hashPassword(password);
      await env.DB.prepare('UPDATE users SET password_hash = ?, first_login = 0 WHERE id = ?').bind(hashed, payload.userId).run();

      return new Response(null, { status: 302, headers: { 'Location': '/' } });
    }

    // ── Claude API proxy (auth required) ──
    if (path === '/claude' && method === 'POST') {
      const token = getToken(request);
      const payload = token ? await verifyToken(token, JWT_SECRET) : null;
      if (!payload) {
        return new Response(JSON.stringify({ error: 'Unauthorised' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
      }

      const body = await request.json();
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    // ── Admin routes ──
    if (path.startsWith('/admin')) {
      const token = getToken(request);
      const payload = token ? await verifyToken(token, JWT_SECRET) : null;
      if (!payload) return redirectToLogin('Please log in to access admin.');

      // Admin home
      if (path === '/admin' && method === 'GET') {
        const { results } = await env.DB.prepare('SELECT * FROM users ORDER BY created_at DESC').all();
        return htmlResponse(ADMIN_PAGE(results || []));
      }

      // Create user
      if (path === '/admin/create-user' && method === 'POST') {
        const form = await request.formData();
        const name = form.get('name') || '';
        const company = form.get('company') || '';
        const email = (form.get('email') || '').toLowerCase().trim();
        const role = form.get('role') || '';
        const temp_password = form.get('temp_password') || '';

        try {
          await env.DB.prepare(
            'INSERT INTO users (email, password_hash, name, company, role, first_login, active) VALUES (?, ?, ?, ?, ?, 1, 1)'
          ).bind(email, temp_password, name, company, role).run();
        } catch (e) {
          // Email already exists or other error - just redirect back
        }
        return new Response(null, { status: 302, headers: { 'Location': '/admin' } });
      }

      // Toggle user active status
      if (path === '/admin/toggle-user' && method === 'POST') {
        const form = await request.formData();
        const id = form.get('id');
        const active = form.get('active');
        await env.DB.prepare('UPDATE users SET active = ? WHERE id = ?').bind(active, id).run();
        return new Response(null, { status: 302, headers: { 'Location': '/admin' } });
      }
    }

    // ── Protected routes — require auth ──
    // Check if user is trying to access the main app
    if (path === '/' || path === '/index.html' || path === '') {
      const token = getToken(request);
      const payload = token ? await verifyToken(token, JWT_SECRET) : null;
      if (!payload) return redirectToLogin();
      // If first login, redirect to set password
      const user = await env.DB.prepare('SELECT first_login FROM users WHERE id = ?').bind(payload.userId).first();
      if (user && user.first_login) return new Response(null, { status: 302, headers: { 'Location': '/set-password' } });
    }

    // Serve static assets
    return env.ASSETS.fetch(request);
  }
}
