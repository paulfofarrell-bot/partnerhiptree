export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.hostname === 'www.thepartnershiptree.com') {
      return Response.redirect('https://thepartnershiptree.com' + url.pathname + url.search, 301);
    }
    if (url.pathname === '/robots.txt') {
      return new Response('User-agent: *\nAllow: /\nSitemap: https://thepartnershiptree.com/sitemap.xml\n', {
        headers: { 'Content-Type': 'text/plain' }
      });
    }
    if (url.pathname === '/sitemap.xml') {
      return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://thepartnershiptree.com/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://thepartnershiptree.com/#platforms</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://thepartnershiptree.com/#insights</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
</urlset>`, {
        headers: { 'Content-Type': 'application/xml' }
      });
    }
    return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Partnership Tree | Life Science Platform Licensing Network</title>
<meta name="description" content="The Partnership Tree is a curated life science partner network where biotech and pharma companies promote their proprietary technology platforms, IP and partnership opportunities to Alliance, Technology and BD professionals worldwide.">
<meta name="keywords" content="life science partnerships, pharma licensing, biotech co-development, drug discovery platform, gene therapy licensing, cell therapy partnership, RNA therapeutics, antibody platform, AI drug discovery, CDMO partnership, CRO partnership, technology licensing">
<meta name="robots" content="index, follow">
<meta name="author" content="The Partnership Tree">
<link rel="canonical" href="https://thepartnershiptree.com/">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://thepartnershiptree.com/">
<meta property="og:title" content="The Partnership Tree | Life Science Platform Licensing Network">
<meta property="og:description" content="A curated network where life science companies actively promote their proprietary technology platforms and partnership opportunities to BD professionals worldwide.">
<meta property="og:site_name" content="The Partnership Tree">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="The Partnership Tree | Life Science Platform Licensing Network">
<meta name="twitter:description" content="Browse 25 curated life science platform technologies actively seeking licensing and co-development partners.">

<!-- Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Partnership Tree",
  "url": "https://thepartnershiptree.com",
  "description": "A curated life science partner network connecting platform technology companies with licensing and co-development partners.",
  "foundingDate": "2024",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "paul@thepartnershiptree.com",
    "contactType": "Business Development"
  },
  "sameAs": ["https://pharmaservicesdirectory.com"]
}
</script>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
<style>
:root {
  --forest: #1a3a2a;
  --forest-deep: #0f2318;
  --forest-mid: #2d5a3d;
  --gold: #c9a84c;
  --gold-light: #e8c96d;
  --cream: #f5f0e8;
  --fog: #f0ede6;
  --mid: #6b7c6b;
  --sage: #8aaa8a;
  --white: #ffffff;
  --card-border: #dde8de;
}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'Lato',sans-serif;background:var(--cream);color:var(--forest);min-height:100vh;}

/* NAV */
nav{position:fixed;top:0;left:0;right:0;background:var(--forest-deep);height:60px;display:flex;align-items:center;padding:0 40px;justify-content:space-between;z-index:100;border-bottom:1px solid rgba(201,168,76,0.2);}
.nav-logo{display:flex;align-items:center;gap:12px;text-decoration:none;}
.nav-logo-text{font-family:'Playfair Display',serif;font-size:17px;color:var(--cream);font-weight:600;}
.nav-logo-sub{font-size:9px;color:rgba(245,240,232,0.4);letter-spacing:.08em;text-transform:uppercase;margin-top:1px;}
.nav-actions{display:flex;align-items:center;gap:24px;}
.nav-link{font-size:12px;font-weight:700;color:rgba(245,240,232,0.6);text-decoration:none;letter-spacing:.04em;text-transform:uppercase;transition:color .2s;}
.nav-link:hover{color:var(--gold);}
.nav-cta{background:var(--gold);color:var(--forest-deep);font-size:11px;font-weight:900;padding:8px 18px;border-radius:6px;text-decoration:none;letter-spacing:.04em;text-transform:uppercase;}
.nav-cta:hover{background:var(--gold-light);}

/* HERO */
.hero{padding:120px 40px 80px;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;}
.hero-eyebrow{font-size:10px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin-bottom:20px;}
.hero-title{font-family:'Playfair Display',serif;font-size:52px;line-height:1.1;color:var(--forest-deep);margin-bottom:24px;font-weight:700;}
.hero-title em{color:var(--forest-mid);font-style:italic;}
.hero-body{font-size:16px;line-height:1.75;color:var(--mid);margin-bottom:36px;font-weight:300;}
.hero-actions{display:flex;gap:16px;align-items:center;flex-wrap:wrap;}
.btn-primary{background:var(--forest);color:var(--cream);font-size:13px;font-weight:800;padding:14px 28px;border-radius:8px;text-decoration:none;letter-spacing:.04em;display:inline-block;transition:all .2s;}
.btn-primary:hover{background:var(--forest-mid);transform:translateY(-1px);}
.btn-outline{border:2px solid var(--forest);color:var(--forest);font-size:13px;font-weight:700;padding:12px 24px;border-radius:8px;text-decoration:none;letter-spacing:.04em;display:inline-block;transition:all .2s;}
.btn-outline:hover{background:var(--forest);color:var(--cream);}
.hero-stats{display:grid;grid-template-columns:1fr 1fr;gap:24px;}
.stat-card{background:var(--white);border:1.5px solid var(--card-border);border-radius:12px;padding:28px;position:relative;overflow:hidden;}
.stat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--forest),var(--gold));}
.stat-num{font-family:'Playfair Display',serif;font-size:40px;font-weight:700;color:var(--forest);line-height:1;}
.stat-label{font-size:12px;color:var(--mid);margin-top:6px;line-height:1.4;}

/* PROPOSITION */
.prop-strip{background:var(--forest-deep);padding:60px 40px;}
.prop-inner{max-width:1200px;margin:0 auto;}
.prop-title{font-size:10px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);text-align:center;margin-bottom:48px;}
.prop-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;}
.prop-item{text-align:center;}
.prop-icon{width:48px;height:48px;background:rgba(201,168,76,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:22px;}
.prop-item h3{font-size:15px;font-weight:700;color:var(--cream);margin-bottom:8px;}
.prop-item p{font-size:13px;color:rgba(245,240,232,0.55);line-height:1.65;font-weight:300;}

/* SEARCH */
.search-section{padding:60px 40px 24px;max-width:1200px;margin:0 auto;}
.section-header{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:28px;}
.section-title{font-family:'Playfair Display',serif;font-size:32px;color:var(--forest-deep);font-weight:700;}
.section-sub{font-size:13px;color:var(--mid);margin-top:6px;}
.section-count{font-size:12px;color:var(--mid);font-weight:700;letter-spacing:.04em;}
.search-bar{display:flex;gap:12px;margin-bottom:20px;}
.search-input{flex:1;padding:14px 20px;border:1.5px solid var(--card-border);border-radius:10px;font-size:14px;font-family:'Lato',sans-serif;color:var(--forest);background:var(--white);outline:none;transition:border-color .2s;}
.search-input:focus{border-color:var(--gold);}
.search-input::placeholder{color:var(--sage);}
.search-btn{background:var(--forest);color:var(--cream);border:none;padding:14px 28px;border-radius:10px;font-size:13px;font-weight:800;cursor:pointer;font-family:'Lato',sans-serif;letter-spacing:.04em;transition:all .2s;}
.search-btn:hover{background:var(--forest-mid);}
.filter-chips{display:flex;gap:8px;flex-wrap:wrap;}
.chip{padding:6px 14px;border-radius:20px;font-size:11px;font-weight:700;cursor:pointer;border:1.5px solid var(--card-border);background:var(--white);color:var(--mid);transition:all .2s;letter-spacing:.03em;}
.chip:hover,.chip.active{background:var(--forest);color:var(--cream);border-color:var(--forest);}

/* RESULTS */
.results-section{padding:24px 40px 80px;max-width:1200px;margin:0 auto;}
.results-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.company-card{background:var(--white);border:1.5px solid var(--card-border);border-radius:14px;padding:28px;cursor:pointer;transition:all .25s;position:relative;display:flex;flex-direction:column;}
.company-card:hover{border-color:var(--forest);box-shadow:0 8px 32px rgba(26,58,42,0.12);transform:translateY(-2px);}
.card-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px;}
.card-logo{width:44px;height:44px;background:linear-gradient(135deg,var(--forest),var(--forest-mid));border-radius:10px;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:var(--gold);flex-shrink:0;}
.badge{font-size:9px;font-weight:800;padding:3px 8px;border-radius:4px;letter-spacing:.05em;text-transform:uppercase;}
.badge-ai{background:#f0e8ff;color:#4a1a8a;}
.badge-cell{background:#e8fff0;color:#1a6b2a;}
.badge-gene{background:#fff0e8;color:#8a4a1a;}
.badge-rna{background:#ffe8e8;color:#8a1a1a;}
.badge-antibody{background:#e8f8ff;color:#1a5a8a;}
.card-name{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:var(--forest-deep);margin-bottom:4px;line-height:1.2;}
.card-location{font-size:11px;color:var(--mid);margin-bottom:10px;}
.card-platform{font-size:11px;font-weight:800;color:var(--gold);letter-spacing:.04em;text-transform:uppercase;margin-bottom:10px;}
.card-summary{font-size:13px;color:var(--mid);line-height:1.6;flex:1;margin-bottom:16px;}
.card-keywords{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px;}
.kw-tag{font-size:10px;padding:3px 8px;background:var(--fog);color:var(--forest);border-radius:4px;font-weight:600;}
.card-footer{border-top:1px solid var(--fog);padding-top:14px;display:flex;align-items:center;justify-content:space-between;}
.card-type{font-size:10px;font-weight:700;color:var(--mid);letter-spacing:.05em;text-transform:uppercase;}
.card-arrow{font-size:16px;color:var(--gold);}
.no-results{text-align:center;padding:60px 20px;color:var(--mid);}
.no-results h3{font-family:'Playfair Display',serif;font-size:24px;margin-bottom:12px;color:var(--forest);}

/* MODAL */
.modal-overlay{display:none;position:fixed;inset:0;background:rgba(15,35,24,0.75);z-index:200;backdrop-filter:blur(4px);padding:60px 20px;overflow-y:auto;}
.modal-overlay.open{display:flex;align-items:flex-start;justify-content:center;}
.modal{background:var(--white);border-radius:20px;max-width:720px;width:100%;position:relative;overflow:hidden;}
.modal-hero{background:var(--forest-deep);padding:40px;position:relative;}
.modal-close{position:absolute;top:16px;right:20px;font-size:28px;color:rgba(245,240,232,0.4);cursor:pointer;background:none;border:none;line-height:1;}
.modal-close:hover{color:var(--cream);}
.modal-eyebrow{font-size:10px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:12px;}
.modal-company{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:var(--cream);margin-bottom:6px;}
.modal-platform-name{font-size:14px;color:rgba(245,240,232,0.6);margin-bottom:16px;}
.modal-meta{font-size:12px;color:rgba(245,240,232,0.45);}
.modal-body{padding:36px 40px;}
.modal-section{margin-bottom:28px;}
.modal-section-title{font-size:10px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:12px;}
.modal-text{font-size:14px;line-height:1.75;color:var(--mid);}
.modal-keywords{display:flex;gap:8px;flex-wrap:wrap;}
.modal-kw{font-size:11px;padding:5px 12px;background:var(--fog);color:var(--forest);border-radius:6px;font-weight:600;}
.modal-cta{background:var(--forest);padding:32px 40px;display:flex;align-items:center;justify-content:space-between;gap:20px;}
.modal-cta-text h3{font-family:'Playfair Display',serif;font-size:20px;color:var(--cream);margin-bottom:6px;}
.modal-cta-text p{font-size:13px;color:rgba(245,240,232,0.55);}
.modal-cta-btn{background:var(--gold);color:var(--forest-deep);font-size:12px;font-weight:900;padding:12px 24px;border-radius:8px;text-decoration:none;white-space:nowrap;letter-spacing:.04em;}
.modal-cta-btn:hover{background:var(--gold-light);}

/* FOOTER */
footer{background:var(--forest-deep);padding:60px 40px;border-top:1px solid rgba(201,168,76,0.1);}
.footer-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr;gap:60px;}
.footer-brand-name{font-family:'Playfair Display',serif;font-size:20px;color:var(--cream);margin-bottom:12px;}
.footer-desc{font-size:13px;color:rgba(245,240,232,0.4);line-height:1.7;font-weight:300;}
.footer-col h4{font-size:10px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:16px;}
.footer-col a{display:block;font-size:13px;color:rgba(245,240,232,0.5);text-decoration:none;margin-bottom:10px;transition:color .2s;}
.footer-col a:hover{color:var(--cream);}
.footer-bottom{max-width:1200px;margin:40px auto 0;padding-top:24px;border-top:1px solid rgba(245,240,232,0.06);display:flex;align-items:center;justify-content:space-between;}
.footer-copy{font-size:11px;color:rgba(245,240,232,0.25);}
.footer-tagline{font-family:'Playfair Display',serif;font-size:12px;color:rgba(201,168,76,0.5);font-style:italic;}

@media(max-width:900px){
  .hero{grid-template-columns:1fr;gap:48px;padding:100px 24px 60px;}
  .hero-title{font-size:36px;}
  .results-grid{grid-template-columns:1fr;}
  .prop-grid{grid-template-columns:1fr;}
  .footer-inner{grid-template-columns:1fr;}
  nav{padding:0 20px;}
  .nav-link{display:none;}
  .search-section,.results-section{padding-left:20px;padding-right:20px;}
  .modal-cta{flex-direction:column;}
}
</style>
</head>
<body>

<nav>
  <a href="/" class="nav-logo">
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="18" fill="#2d5a3d"/>
      <path d="M18 7C18 7 10 13 10 20C10 24.4 13.6 28 18 28C22.4 28 26 24.4 26 20C26 13 18 7 18 7Z" fill="#c9a84c" opacity="0.9"/>
      <path d="M18 11C18 11 13 15 13 20C13 22.8 15.2 25 18 25C20.8 25 23 22.8 23 20C23 15 18 11 18 11Z" fill="#fff" opacity="0.12"/>
    </svg>
    <div>
      <div class="nav-logo-text">The Partnership Tree</div>
      <div class="nav-logo-sub">Life Science Partner Network</div>
    </div>
  </a>
  <div class="nav-actions">
    <a href="#platforms" class="nav-link">Browse Platform</a>
    <a href="#insights" class="nav-link">Insights</a>
    <a href="mailto:paul@thepartnershiptree.com" class="nav-link">List Your Platform</a>
    <a href="https://app.thepartnershiptree.com/login" class="nav-cta">Member Login →</a>
  </div>
</nav>

<section class="hero">
  <div>
    <div class="hero-eyebrow">Life Science Platform Licensing Network</div>
    <h1 class="hero-title">Where proprietary platforms find their <em>ideal partners</em></h1>
    <p class="hero-body">The Partnership Tree is a curated network where life science companies actively promote their proprietary technology platforms, IP and partnership opportunities to Alliance, Technology &amp; BD professionals worldwide. Every listing is verified, intentional, and actively seeking engagement.</p>
    <div class="hero-actions">
      <a href="#platforms" class="btn-primary">Browse Platforms →</a>
      <a href="mailto:paul@thepartnershiptree.com" class="btn-outline">List Your Platform</a>
    </div>
  </div>
  <div class="hero-stats">
    <div class="stat-card">
      <div class="stat-num">20</div>
      <div class="stat-label">Curated platform technologies actively seeking partners</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">3,000+</div>
      <div class="stat-label">Life science companies in our broader partnership network</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">12+</div>
      <div class="stat-label">Countries represented across featured platforms</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">100%</div>
      <div class="stat-label">Verified active partnership intent — no stale listings</div>
    </div>
  </div>
</section>

<div class="prop-strip">
  <div class="prop-inner">
    <div class="prop-title">Why The Partnership Tree</div>
    <div class="prop-grid">
      <div class="prop-item">
        <div class="prop-icon">🎯</div>
        <h3>Curated, not crawled</h3>
        <p>Every platform here is hand-selected for clear partnership intent, proprietary IP, and verified profile completeness. No noise, no generic AI-scraped listings.</p>
      </div>
      <div class="prop-item">
        <div class="prop-icon">🤝</div>
        <h3>Intent, not just presence</h3>
        <p>Companies declare exactly what they're seeking — licence partners, co-development, geographic rights — so BD professionals can act on the information immediately.</p>
      </div>
      <div class="prop-item">
        <div class="prop-icon">🔍</div>
        <h3>Found where it matters</h3>
        <p>Your platform surfaces in precise keyword searches by life science BD professionals who know what they're looking for — not buried in generic search results.</p>
      </div>
    </div>
  </div>
</div>

<section class="search-section" id="platforms">
  <div class="section-header">
    <div>
      <h2 class="section-title">Featured Platform Opportunities</h2>
      <div class="section-sub">Proprietary technologies actively seeking licensing and co-development partners</div>
    </div>
    <div class="section-count" id="results-count">20 platforms</div>
  </div>
  <div class="search-bar">
    <input type="text" class="search-input" id="search-input" placeholder="Search by technology, therapy area, or platform name…" oninput="filterCompanies()">
    <button class="search-btn" onclick="filterCompanies()">Search</button>
    <button class="search-btn" style="background:var(--mid);" onclick="clearSearch()">Clear</button>
  </div>
  <div class="filter-chips">
    <span class="chip active" onclick="setFilter('all',this)">All Platforms</span>
    <span class="chip" onclick="setFilter('AI',this)">AI Drug Discovery</span>
    <span class="chip" onclick="setFilter('cell',this)">Cell Therapy</span>
    <span class="chip" onclick="setFilter('gene',this)">Gene Therapy</span>
    <span class="chip" onclick="setFilter('rna',this)">RNA Therapeutics</span>
    <span class="chip" onclick="setFilter('antibody',this)">Antibody</span>
    <span class="chip" onclick="setFilter('europe',this)">European Platforms</span>
  </div>
</section>

<section class="results-section">
  <div class="results-grid" id="results-grid"></div>
  <div class="no-results" id="no-results" style="display:none;">
    <h3>No platforms match your search</h3>
    <p>Try different keywords or browse by category above.</p>
  </div>
</section>

<div class="modal-overlay" id="modal" onclick="if(event.target===this)closeModal()">
  <div class="modal" id="modal-content"></div>
</div>


<!-- INSIGHTS SECTION -->
<section id="insights" style="background:var(--white);padding:80px 40px;">
  <div style="max-width:1200px;margin:0 auto;">
    <div style="margin-bottom:48px;">
      <div style="font-size:10px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin-bottom:12px;">Insights & Perspectives</div>
      <h2 style="font-family:'Playfair Display',serif;font-size:36px;color:var(--forest-deep);font-weight:700;margin-bottom:10px;">Thought Leadership</h2>
      <p style="font-size:15px;color:var(--mid);max-width:600px;line-height:1.7;">Perspectives on pharmaceutical partnerships, platform licensing, and the life science industry.</p>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-bottom:48px;">
      <article style="background:var(--fog);border-radius:16px;padding:36px;border:1.5px solid var(--card-border);">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
          <span style="background:var(--forest);color:var(--gold);font-size:10px;font-weight:800;letter-spacing:.08em;padding:4px 10px;border-radius:20px;text-transform:uppercase;">Thought Leadership</span>
          <span style="color:var(--mid);font-size:12px;">March 2026 · 6 min read</span>
        </div>
        <h3 style="font-family:'Playfair Display',serif;font-size:22px;color:var(--forest-deep);margin-bottom:12px;line-height:1.3;">How AI is Changing Pharmaceutical Partner Search</h3>
        <p style="font-size:14px;color:var(--mid);line-height:1.75;margin-bottom:20px;">The business of finding the right development partner has always been relationship-driven. Artificial intelligence is not replacing those relationships — but it is fundamentally changing how they begin.</p>
        <p style="font-size:14px;color:var(--mid);line-height:1.75;margin-bottom:20px;">Traditional directory search operates on keywords. AI-powered partner search interprets intent — understanding capability depth, geography, regulatory framework and partnership stage simultaneously. A query like <em>"Which European CDMOs handle cytotoxic ADC payload synthesis with GMP fill-finish for clinical stage programmes?"</em> is understood in its entirety, not just matched on keywords.</p>
        <p style="font-size:14px;color:var(--mid);line-height:1.75;margin-bottom:24px;">The Partnership Tree was built specifically for the pharmaceutical and life science industry, combining two decades of directory expertise from The Pharma Services Directory — established in 2003 — with a purpose-built partner network for platform technology companies seeking licensing and co-development partners.</p>
        <a href="mailto:paul@thepartnershiptree.com?subject=Insights Enquiry" style="font-size:13px;font-weight:700;color:var(--forest);text-decoration:none;border:1.5px solid var(--forest);padding:8px 18px;border-radius:6px;display:inline-block;">Discuss Partnership →</a>
      </article>
      <article style="background:var(--fog);border-radius:16px;padding:36px;border:1.5px solid var(--card-border);">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
          <span style="background:var(--forest);color:var(--gold);font-size:10px;font-weight:800;letter-spacing:.08em;padding:4px 10px;border-radius:20px;text-transform:uppercase;">Drug Discovery</span>
          <span style="color:var(--mid);font-size:12px;">March 2026 · 7 min read</span>
        </div>
        <h3 style="font-family:'Playfair Display',serif;font-size:22px;color:var(--forest-deep);margin-bottom:12px;line-height:1.3;">How AI-Based Partnerships Are Changing Drug Discovery</h3>
        <p style="font-size:14px;color:var(--mid);line-height:1.75;margin-bottom:20px;">Artificial intelligence is not just accelerating drug discovery — it is reshaping who does it, and how collaborations between technology companies and pharmaceutical developers are structured.</p>
        <p style="font-size:14px;color:var(--mid);line-height:1.75;margin-bottom:20px;">AI drug discovery companies are, almost by definition, partnership-dependent. The most sophisticated computational platform cannot take a drug to the clinic without wet laboratory validation, clinical expertise, regulatory knowledge and manufacturing capability.</p>
        <p style="font-size:14px;color:var(--mid);line-height:1.75;margin-bottom:24px;">This creates a structural need for partnerships that is different in character from traditional pharma-CDMO relationships — combining the AI company's discovery engine with the pharmaceutical partner's development infrastructure and commercial reach.</p>
        <a href="https://app.thepartnershiptree.com/login" style="font-size:13px;font-weight:700;color:var(--forest);text-decoration:none;border:1.5px solid var(--forest);padding:8px 18px;border-radius:6px;display:inline-block;">Read More in Member Portal →</a>
      </article>
    </div>
    <div style="text-align:center;padding:40px;background:var(--forest-deep);border-radius:16px;">
      <div style="font-size:10px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin-bottom:12px;">Full Articles Available</div>
      <h3 style="font-family:'Playfair Display',serif;font-size:24px;color:var(--cream);margin-bottom:10px;">More Insights in the Member Portal</h3>
      <p style="font-size:14px;color:rgba(245,240,232,0.6);margin-bottom:24px;max-width:500px;margin-left:auto;margin-right:auto;">Full articles, network news, partnership announcements and industry perspectives are available to members. Login or request access below.</p>
      <a href="https://app.thepartnershiptree.com/login" style="background:var(--gold);color:var(--forest-deep);font-size:13px;font-weight:900;padding:12px 28px;border-radius:8px;text-decoration:none;letter-spacing:.04em;display:inline-block;">Access Full Insights →</a>
    </div>
  </div>
</section>

<footer>
  <div class="footer-inner">
    <div>
      <div class="footer-brand-name">The Partnership Tree</div>
      <p class="footer-desc">A curated network connecting life science platform innovators with the co-development and licensing partners they need to maximise the impact of their technology. Built on 20+ years of pharma partnership intelligence.</p>
    </div>
    <div class="footer-col">
      <h4>Network</h4>
      <a href="#platforms">Browse Platform</a>
      <a href="https://app.thepartnershiptree.com">Member Login</a>
      <a href="mailto:paul@thepartnershiptree.com">List Your Platform</a>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <a href="mailto:paul@thepartnershiptree.com">paul@thepartnershiptree.com</a>
      <a href="https://pharmaservicesdirectory.com" target="_blank">Pharma Services Directory</a>
      <a href="https://app.thepartnershiptree.com">Member Platform</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">© 2026 The Partnership Tree. All rights reserved.</span>
    <span class="footer-tagline">Where platforms find their partners.</span>
  </div>
</footer>

<script data-cfasync="false">
var COMPANIES = [
  {id:793,name:"mAbsolve",location:"London, United Kingdom",platform:"Fc Silencing Technology",summary:"mAbsolve has developed proprietary technology to silence unwanted Fc-mediated effector functions in therapeutic antibodies — a critical capability for antibody engineering where immune activation must be precisely controlled.",description:"The need for silence in antibody therapeutics is clear: many of the most promising therapeutic targets require antibodies that can bind without triggering unwanted immune responses. mAbsolve's Fc silencing platform provides that precision control, offering a licensable solution that can be integrated into partners' antibody development programmes.",keywords:["Antibody Engineering","Fc Silencing","Biologics","Monoclonal Antibodies","Bi-specific Antibodies"],tags:["antibody"],badge:"Antibody Platform",badgeClass:"badge-antibody",seeking:"Licence OUT",geo:"europe"},
  {id:825,name:"Receptor.AI",location:"London, United Kingdom",platform:"AI-Accelerated Multi-Platform Drug Design",summary:"A next-generation TechBio company with a multiplatform AI-powered ecosystem for designing small molecules, peptides, and drug conjugates — accelerating novel therapy development for challenging targets.",description:"Receptor.AI combines computational drug design with high-throughput screening and lead optimisation into a seamless AI-powered workflow. Their platform specialises in difficult targets where conventional approaches have failed, offering partners access to a validated ecosystem rather than a single tool.",keywords:["AI Drug Design","Small Molecules","Peptides","Drug Conjugates","High Throughput Screening"],tags:["AI"],badge:"AI Platform",badgeClass:"badge-ai",seeking:"Licence OUT · Research",geo:"europe"},
  {id:236,name:"Exscientia",location:"Oxford, United Kingdom",platform:"AI-Driven Precision Medicine Platform",summary:"Exscientia applies AI to precision engineer medicines more rapidly and efficiently. Their platform has already delivered programmes into clinical trials, demonstrating real-world validation of AI-directed drug discovery.",description:"Finding faster and smarter ways to discover new and better drugs drives Exscientia. By actively applying AI to precision engineer medicines, they enable people to live more healthy and productive lives. Partners access a battle-tested AI platform with a track record of advancing programmes from concept to clinic.",keywords:["AI Drug Discovery","Precision Medicine","Small Molecules","Immuno-Oncology","Drug Design"],tags:["AI"],badge:"AI Platform",badgeClass:"badge-ai",seeking:"Licence OUT · Co-Development",geo:"europe"},
  {id:677,name:"Sibylla Biotech",location:"Bresso, Italy",platform:"Oneiros AI Platform",summary:"The Oneiros platform deploys advanced machine learning to navigate and prioritise the most promising compounds from a vast chemical universe — with a focus on oncology and neurodegenerative diseases.",description:"Sibylla Biotech's Oneiros platform represents a fundamental shift in how compounds are selected for development. By mapping the protein folding landscape with AI, it identifies compounds that others miss — particularly relevant for CNS diseases and oncology where conventional approaches consistently fail.",keywords:["AI","Oncology","Neurodegeneration","Protein Degradation","Drug Discovery"],tags:["AI"],badge:"AI Platform",badgeClass:"badge-ai",seeking:"Licence OUT · Research",geo:"europe"},
  {id:352,name:"Molecure",location:"Warsaw, Poland",platform:"RNA-Targeting Small Molecule Platform",summary:"Molecure has developed a unique platform to discover small molecule compounds that interact directly with the mRNA of disease-related proteins — opening an entirely new class of drug targets.",description:"The ability to target RNA with small molecules represents one of the most exciting frontiers in drug discovery. Molecure's platform makes this tractable at scale, with applications across oncology and immuno-oncology where undruggable protein targets have long frustrated conventional approaches.",keywords:["RNA Platform","Small Molecules","mRNA Targeting","Oncology","Immuno-oncology"],tags:["rna"],badge:"RNA Platform",badgeClass:"badge-rna",seeking:"Licence OUT · Research",geo:"europe"},
  {id:286,name:"Avectas",location:"Dublin, Ireland",platform:"SOLUPORE® Cell Engineering Platform",summary:"SOLUPORE® is a non-viral cell engineering solution for next-generation cell and gene therapies. Avectas actively seeks partners developing gene-modified cell therapy products.",description:"SOLUPORE® addresses one of the key bottlenecks in cell and gene therapy manufacturing — efficient, scalable, non-viral delivery of genetic cargo into cells. By eliminating the immunogenicity risks of viral vectors, the platform enables safer and more cost-effective production of advanced cell therapies.",keywords:["Cell Engineering","Non-Viral Delivery","Gene Therapy","Cell Therapy","Bioprocess"],tags:["cell","gene"],badge:"Cell & Gene Platform",badgeClass:"badge-cell",seeking:"Licence OUT · Research",geo:"europe"},
  {id:698,name:"Circio",location:"Oslo, Norway",platform:"Circular RNA Therapeutics Platform",summary:"Circio is pioneering circular RNA as a novel therapeutic modality — offering enhanced stability and expression compared to linear mRNA, with applications in immunotherapy and oncology.",description:"Circular RNA represents the next evolution in RNA medicine. Unlike linear mRNA, circRNA resists degradation and provides sustained protein expression — key advantages for therapeutic applications. Circio's platform enables the design, production, and delivery of circRNA medicines across cancer and infectious disease.",keywords:["Circular RNA","RNA Therapeutics","Immunotherapy","Oncology","mRNA Alternative"],tags:["rna"],badge:"RNA Platform",badgeClass:"badge-rna",seeking:"Licence OUT · Co-Development",geo:"europe"},
  {id:784,name:"Amarna Therapeutics",location:"Leiden, Netherlands",platform:"Nimvec™ Gene Delivery Platform",summary:"Nimvec™ is a non-immunogenic gene delivery vector derived from Simian Virus 40, offering high transduction efficiency across diverse cell types without the immunogenicity concerns of AAV.",description:"Amarna's Nimvec™ platform addresses a critical limitation of current gene therapy vectors — immune responses that limit repeat dosing and restrict patient populations. Nimvec™ vectors transduce a wide range of cell types and have demonstrated therapeutic potential in animal models across ophthalmology, diabetes, and autoimmune disease.",keywords:["Gene Delivery","Viral Vectors","Non-immunogenic","Ophthalmology","Gene Therapy"],tags:["gene"],badge:"Gene Therapy Platform",badgeClass:"badge-gene",seeking:"Licence OUT",geo:"europe"},
  {id:697,name:"Excellgene",location:"Monthey, Switzerland",platform:"Superior Cell Host Platform",summary:"Excellgene offers out-licensing of proprietary superior cell hosts — state-of-the-art technology that revolutionises biologics development programmes from research through clinical manufacture.",description:"The quality and productivity of cell hosts fundamentally determines the economics of biologic drug manufacturing. Excellgene's proprietary cell host platform delivers superior expression levels, consistency, and scalability — licensable technology that partners can integrate directly into their development and manufacturing pipelines.",keywords:["Cell Culture","Biologics Manufacturing","Monoclonal Antibodies","Cell Banking","Bioprocess"],tags:["antibody","cell"],badge:"Biologics Platform",badgeClass:"badge-antibody",seeking:"Licence OUT · Co-Development",geo:"europe"},
  {id:683,name:"Secarna Pharmaceuticals",location:"Planegg, Germany",platform:"LNAplus™ Antisense Discovery Platform",summary:"LNAplus™ is a proprietary drug discovery platform for discovering, testing, and selecting antisense oligonucleotides for pre-clinical and clinical development — with fully independent discovery capability.",description:"Antisense oligonucleotides represent a powerful and growing class of therapeutics. Secarna's LNAplus™ platform provides partners with an independent, validated route to ASO drug candidates — from target identification through lead selection. The platform's proprietary locked nucleic acid chemistry delivers superior affinity and selectivity.",keywords:["Antisense","Oligonucleotides","ASO","LNA Chemistry","Drug Discovery"],tags:["rna"],badge:"Oligonucleotide Platform",badgeClass:"badge-rna",seeking:"Licence OUT · Research",geo:"europe"},
  {id:779,name:"Smart Immune",location:"Paris, France",platform:"ProTcell™ Allogeneic T-Cell Platform",summary:"ProTcell™ is a pioneering allogeneic T-cell therapy platform that leverages the patient's own thymus to rapidly re-arm the immune system against cancers and infections — without the limitations of autologous approaches.",description:"The ProTcell platform addresses the fundamental scalability and cost challenges of current cell therapies by creating an allogeneic, off-the-shelf solution. By harnessing thymic education, Smart Immune generates T-cells with genuine immunological memory — a qualitative advance over conventional allogeneic approaches.",keywords:["Allogeneic Cell Therapy","T-Cells","Immuno-oncology","Thymic Education","Off-the-Shelf"],tags:["cell"],badge:"Cell Therapy Platform",badgeClass:"badge-cell",seeking:"Licence OUT · Co-Development",geo:"europe"},
  {id:558,name:"Denali Therapeutics",location:"San Francisco, USA",platform:"Transport Vehicle (TV) Platform",summary:"Denali's proprietary Transport Vehicle platform actively transports large molecule therapeutics across the blood-brain barrier — solving one of the most persistent challenges in CNS drug delivery.",description:"The blood-brain barrier has long prevented large molecules from reaching CNS targets. Denali's Transport Vehicle platform uses engineered proteins to actively carry biologics across the barrier, opening up entirely new treatment possibilities for neurodegenerative diseases including Alzheimer's, Parkinson's, and rare CNS disorders.",keywords:["Blood-Brain Barrier","CNS Drug Delivery","Large Molecules","Neuroscience","Platform Technology"],tags:["gene"],badge:"CNS Delivery Platform",badgeClass:"badge-gene",seeking:"Licence OUT · Co-Development",geo:""},
  {id:443,name:"Intellia Therapeutics",location:"Cambridge, USA",platform:"CRISPR/Cas9 Gene Editing Platform",summary:"Intellia is focused on developing proprietary therapeutics using the CRISPR/Cas9 system — one of the most powerful and versatile gene editing tools available for therapeutic application.",description:"The CRISPR/Cas9 system represents a generational advance in the ability to precisely edit the human genome. Intellia's platform encompasses the IP, delivery systems, and manufacturing know-how to translate this technology into medicines — they actively seek partners for licensing and co-development in disease areas beyond their internal pipeline.",keywords:["CRISPR","Gene Editing","Gene Therapy","Biologics","Licensing"],tags:["gene"],badge:"Gene Editing Platform",badgeClass:"badge-gene",seeking:"Licence OUT · Research",geo:""},
  {id:753,name:"MaxCyte",location:"Rockville, USA",platform:"ExPERT™ Electroporation Platform",summary:"MaxCyte's ExPERT™ platform has spent 20+ years refining the science of electroporation — offering scalable, GMP-compatible cell engineering for therapeutics from research through commercial manufacture.",description:"Electroporation is increasingly the method of choice for engineering cells for therapy — but scaling it reliably is technically demanding. MaxCyte's ExPERT™ platform provides a validated, GMP-compatible solution that works across cell types and scales seamlessly from research to commercial manufacture. Used in hundreds of programmes worldwide.",keywords:["Electroporation","Cell Engineering","GMP Manufacturing","Cell Therapy","Gene Therapy"],tags:["cell","gene"],badge:"Cell Engineering Platform",badgeClass:"badge-cell",seeking:"Licence OUT · Co-Development",geo:""},
  {id:444,name:"Intellia Therapeutics",location:"Cambridge, USA",platform:"CRISPR/Cas9 Platform",summary:"Intellia is focused on the development of proprietary therapeutics using the CRISPR/Cas9 system — actively seeking licensing and co-development partners in disease areas beyond their core pipeline.",description:"The CRISPR/Cas9 system is the driving force behind Intellia's creation. Their platform encompasses comprehensive gene editing IP, validated delivery systems, and the manufacturing expertise needed to advance programmes from discovery to clinic.",keywords:["CRISPR/Cas9","Gene Editing","Gene Therapy","Licensing","Biologics"],tags:["gene"],badge:"Gene Editing Platform",badgeClass:"badge-gene",seeking:"Licence OUT",geo:""},
  {id:740,name:"Sanyou Bio",location:"Cambridge, USA",platform:"Super Trillion Common Light Chain Platform",summary:"Sanyou's Common Light Chain Antibody Discovery Platform provides access to a super-trillion diverse antibody library — dramatically accelerating identification of development-ready bispecific candidates.",description:"The Super Trillion Common Light Chain platform addresses a key challenge in bispecific antibody development: manufacturing complexity. By engineering a common light chain across diverse heavy chains, Sanyou's platform enables discovery of bispecific antibodies that are inherently manufacturable — combining diversity with developability from the outset.",keywords:["Antibody Discovery","Bispecific Antibodies","Common Light Chain","ADC","Drug Discovery"],tags:["antibody"],badge:"Antibody Platform",badgeClass:"badge-antibody",seeking:"Licence OUT · Research",geo:""},
  {id:821,name:"OBI Pharma",location:"Taipei, Taiwan",platform:"GlycOBI® Glycan ADC Platform",summary:"GlycOBI® is a unique glycan-based ADC platform delivering precise, site-specific conjugation of cytotoxic payloads to antibodies — improving therapeutic index and manufacturability of antibody-drug conjugates.",description:"Antibody-drug conjugates are one of the most exciting frontiers in oncology, but their manufacturing complexity limits their potential. OBI Pharma's GlycOBI® platform uses glycan engineering to achieve precise, homogeneous conjugation — resulting in ADCs with superior pharmacokinetics and a cleaner safety profile.",keywords:["ADC","Glycan Engineering","Site-Specific Conjugation","Oncology","Antibody Drug Conjugates"],tags:["antibody"],badge:"ADC Platform",badgeClass:"badge-antibody",seeking:"Licence OUT · Co-Development",geo:""},
  {id:644,name:"Absci",location:"Vancouver, USA",platform:"Integrated Drug Creation™ Platform",summary:"Absci's Integrated Drug Creation™ platform enables simultaneous multi-parameter optimisation of affinity, specificity, manufacturability, and safety — de-risking biologic drug discovery from day one.",description:"Conventional biologic drug discovery optimises parameters sequentially — leading to late-stage failures. Absci's Integrated Drug Creation™ platform collapses this into a single AI-powered workflow, enabling partners to explore a broader solution space and select candidates that work on all dimensions simultaneously.",keywords:["AI Biologics","Drug Design","Antibody Discovery","Manufacturability","Immuno-oncology"],tags:["AI","antibody"],badge:"AI Biologics Platform",badgeClass:"badge-ai",seeking:"Licence OUT · Co-Development",geo:""},
  {id:492,name:"Schrödinger",location:"New York, USA",platform:"Physics-Based Computational Drug Design Platform",summary:"Schrödinger's leading computational platform for molecular discovery has enabled two FDA-approved drugs and multiple clinical programmes — available for research collaborations and licensing.",description:"Schrödinger's platform applies physics-based simulation to predict how molecules will behave in biological systems — with a level of accuracy that has transformed early drug discovery. Partners gain access to a validated platform that has already generated FDA-approved medicines, alongside a collaborative team with a track record of co-founding startups and partnering with leading global pharma companies.",keywords:["Computational Chemistry","Molecular Design","Small Molecules","Drug Discovery","AI"],tags:["AI"],badge:"Computational Platform",badgeClass:"badge-ai",seeking:"Licence OUT · Research",geo:""},
  {id:826,name:"Valo Health",location:"Boston, USA",platform:"Opal™ Computational Platform",summary:"Opal™ is a groundbreaking closed-loop AI platform combining multi-omic data, computational modelling, and experimental validation — driving next-generation drug discovery and development.",description:"Valo Health's Opal™ platform represents a fundamental reimagining of how drug discovery is conducted. By closing the loop between computation and experiment, Opal™ continuously learns and improves — enabling partners to identify and develop drug candidates faster and with higher probability of success than conventional approaches.",keywords:["AI Drug Discovery","Computational Platform","Multi-omic Data","Drug Development","Closed-Loop AI"],tags:["AI"],badge:"AI Platform",badgeClass:"badge-ai",seeking:"Licence OUT · Research",geo:""}
  ,{id:843,name:"Orna Therapeutics",location:"Cambridge, USA",platform:"oRNA™ Circular RNA Platform",summary:"Orna's oRNA™ platform engineers circular RNA for persistent protein expression — enabling a new class of RNA medicines with superior durability over linear mRNA for immunotherapy and genetic disease.",description:"Linear mRNA degrades rapidly, limiting its therapeutic utility. Orna's oRNA™ circular RNA platform overcomes this fundamental limitation by creating RNA molecules that resist exonuclease degradation and provide sustained, tunable protein expression. The platform enables a broad range of applications from in vivo cell reprogramming to durable protein replacement therapies.",keywords:["Circular RNA","oRNA","Gene Therapy","Immunotherapy","RNA Medicine"],tags:["rna","cell"],badge:"Circular RNA Platform",badgeClass:"badge-rna",seeking:"Licence OUT · Co-Development",geo:""},
  {id:844,name:"Larimar Therapeutics",location:"Bala Cynwyd, USA",platform:"Cell-Penetrating Peptide Platform",summary:"Larimar's proprietary cell-penetrating peptide platform enables intracellular delivery of large therapeutic molecules — opening targets previously inaccessible to biologics.",description:"The ability to get large molecules inside cells has long been the holy grail of biologics drug delivery. Larimar's cell-penetrating peptide platform provides a validated, licensable solution that has been demonstrated across multiple disease areas, with particular strength in rare mitochondrial diseases.",keywords:["Cell-Penetrating Peptides","Intracellular Delivery","Rare Disease","Biologics","Drug Delivery"],tags:["cell"],badge:"Cell Delivery Platform",badgeClass:"badge-cell",seeking:"Licence OUT",geo:""},
  {id:845,name:"Cardior Pharmaceuticals",location:"Hannover, Germany",platform:"ncRNA Cardiovascular Platform",summary:"Cardior's non-coding RNA platform targets cardiovascular disease at the RNA level — developing first-in-class therapeutics for heart failure and cardiac fibrosis using proprietary ncRNA technology.",description:"Non-coding RNAs regulate gene expression without encoding proteins, making them highly attractive therapeutic targets. Cardior's platform is focused exclusively on cardiovascular applications of ncRNA biology — an area of major unmet need where conventional small molecules and biologics have failed to deliver transformative outcomes.",keywords:["Non-coding RNA","Cardiovascular","Heart Failure","RNA Therapeutics","ncRNA"],tags:["rna"],badge:"RNA Therapeutics Platform",badgeClass:"badge-rna",seeking:"Licence OUT · Co-Development",geo:"europe"},
  {id:846,name:"Cellectis",location:"Paris, France",platform:"TALEN® Gene Editing Platform",summary:"Cellectis pioneered allogeneic CAR-T cell therapy using their proprietary TALEN® gene editing technology — offering a differentiated and validated alternative to CRISPR for cell therapy manufacturing.",description:"TALEN® (Transcription Activator-Like Effector Nucleases) technology was pioneered by Cellectis and represents a highly specific, proprietary approach to gene editing with particular advantages in the manufacturing of allogeneic cell therapies. The platform is validated in clinical programmes and offers partners an alternative to CRISPR with a distinct IP landscape.",keywords:["TALEN Gene Editing","Allogeneic CAR-T","Cell Therapy","Gene Engineering","Immunotherapy"],tags:["cell","gene"],badge:"Gene Editing Platform",badgeClass:"badge-gene",seeking:"Licence OUT · Co-Development",geo:"europe"},
  {id:847,name:"Merus",location:"Utrecht, Netherlands",platform:"Biclonics® Bispecific Antibody Platform",summary:"Merus's Biclonics® platform generates full-length bispecific antibodies using common light chain technology — producing development-ready candidates with natural antibody architecture and excellent manufacturability.",description:"Bispecific antibodies offer transformative potential across oncology and immunology, but their manufacture has historically been technically challenging. Merus's Biclonics® platform produces genuine full-length bispecific IgGs using common light chain engineering — resulting in antibodies with natural architecture, excellent biophysical properties, and straightforward CMC development.",keywords:["Bispecific Antibodies","Biclonics","Common Light Chain","Oncology","Full-Length IgG"],tags:["antibody"],badge:"Bispecific Antibody Platform",badgeClass:"badge-antibody",seeking:"Licence OUT · Co-Development",geo:"europe"}
];

// Remove duplicate Intellia (id 444 appears twice) 
COMPANIES = COMPANIES.filter((c,i,a) => a.findIndex(x=>x.id===c.id)===i);

var activeFilter = 'all';

function clearSearch() {
  document.getElementById('search-input').value = '';
  activeFilter = 'all';
  document.querySelectorAll('.chip').forEach(function(c){c.classList.remove('active');});
  document.querySelector('.chip').classList.add('active');
  render();
}

function setFilter(f, el) {
  activeFilter = f;
  document.querySelectorAll('.chip').forEach(function(c){c.classList.remove('active');});
  el.classList.add('active');
  render();
}

function filterCompanies() { render(); }

function getFiltered() {
  var q = document.getElementById('search-input').value.toLowerCase().trim();
  return COMPANIES.filter(function(c) {
    var matchFilter = activeFilter === 'all' ||
      (activeFilter === 'europe' ? c.geo === 'europe' : c.tags.indexOf(activeFilter) !== -1);
    var matchSearch = !q ||
      c.name.toLowerCase().indexOf(q) !== -1 ||
      c.platform.toLowerCase().indexOf(q) !== -1 ||
      c.summary.toLowerCase().indexOf(q) !== -1 ||
      c.keywords.some(function(k){return k.toLowerCase().indexOf(q) !== -1;});
    return matchFilter && matchSearch;
  });
}

function render() {
  var filtered = getFiltered();
  var grid = document.getElementById('results-grid');
  var noResults = document.getElementById('no-results');
  var count = document.getElementById('results-count');
  count.textContent = filtered.length + ' platform' + (filtered.length !== 1 ? 's' : '');
  if (filtered.length === 0) {
    grid.style.display = 'none';
    noResults.style.display = 'block';
    return;
  }
  grid.style.display = 'grid';
  noResults.style.display = 'none';
  grid.innerHTML = filtered.map(function(c) {
    return '<div class="company-card" onclick="openModal('+c.id+')">'
      + '<div class="card-header">'
      + '<div class="card-logo">'+c.name.charAt(0)+'</div>'
      + '<span class="badge '+c.badgeClass+'">'+c.badge+'</span>'
      + '</div>'
      + '<div class="card-name">'+c.name+'</div>'
      + '<div class="card-location">&#128205; '+c.location+'</div>'
      + '<div class="card-platform">'+c.platform+'</div>'
      + '<div class="card-summary">'+c.summary+'</div>'
      + '<div class="card-keywords">'+c.keywords.slice(0,3).map(function(k){return '<span class="kw-tag">'+k+'</span>';}).join('')+'</div>'
      + '<div class="card-footer"><span class="card-type">Seeking: '+c.seeking+'</span><span class="card-arrow">&rarr;</span></div>'
      + '</div>';
  }).join('');
}

function openModal(id) {
  var c = COMPANIES.find(function(x){return x.id===id;});
  if (!c) return;
  document.getElementById('modal-content').innerHTML =
    '<div class="modal-hero">'
    + '<button class="modal-close" onclick="closeModal()">&times;</button>'
    + '<div class="modal-eyebrow">Partnership Opportunity</div>'
    + '<div class="modal-company">'+c.name+'</div>'
    + '<div class="modal-platform-name">'+c.platform+'</div>'
    + '<div class="modal-meta">&#128205; '+c.location+' &nbsp;&middot;&nbsp; Seeking: '+c.seeking+'</div>'
    + '</div>'
    + '<div class="modal-body">'
    + '<div class="modal-section"><div class="modal-section-title">About the Platform</div><div class="modal-text">'+c.description+'</div></div>'
    + '<div class="modal-section"><div class="modal-section-title">Technology Keywords</div><div class="modal-keywords">'+c.keywords.map(function(k){return '<span class="modal-kw">'+k+'</span>';}).join('')+'</div></div>'
    + '</div>'
    + '<div class="modal-cta">'
    + '<div class="modal-cta-text"><h3>Interested in this platform?</h3><p>Contact us to make an introduction or to list your own platform opportunity.</p></div>'
    + '<a href="mailto:paul@thepartnershiptree.com?subject=Partnership Enquiry: '+encodeURIComponent(c.name)+'&body=I am interested in learning more about '+encodeURIComponent(c.name)+' and their '+encodeURIComponent(c.platform)+'." class="modal-cta-btn">Make an Enquiry &rarr;</a>'
    + '</div>';
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeModal(); });
render();
</script>
</body>
</html>
`, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
        'X-Robots-Tag': 'index, follow'
      }
    });
  }
};
