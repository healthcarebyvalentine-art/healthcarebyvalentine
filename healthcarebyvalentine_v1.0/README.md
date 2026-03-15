# Health Insurance Benefits by Valentine Saint Martin
## healthinsurancebenefitsbyvalentinesaintmartin.com
### Vite + React — Netlify Deployment

---

## 🚀 Push to GitHub & Deploy on Netlify

### Step 1 — Push to GitHub
```bash
# From inside this folder:
git init
git add .
git commit -m "Initial launch — Valentine Saint Martin"
git branch -M main
git remote add origin https://github.com/YOURNAME/valentine-saint-martin.git
git push -u origin main
```

### Step 2 — Connect to Netlify
1. Go to [netlify.com](https://netlify.com) → **Add new site → Import from Git**
2. Select **GitHub** → choose your repo
3. Netlify reads `netlify.toml` automatically:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site** — live in ~2 minutes ✅

### Step 3 — Add Custom Domain
- Netlify → Site Settings → Domain Management → Add `healthinsurancebenefitsbyvalentinesaintmartin.com`
- Free SSL auto-provisioned

---

## 💻 Local Development
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # builds to /dist
npm run preview  # preview the build locally
```

---

## 📁 Structure
```
src/
├── main.jsx
├── App.jsx
├── index.css          ← all styles + brand tokens
├── constants.js       ← all content, branding, data
├── utils/scroll.js
├── hooks/
│   ├── useScrolled.js
│   └── useCounter.js
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Ticker.jsx
    ├── About.jsx
    ├── WhoWeServe.jsx
    ├── Services.jsx
    ├── ForensicAudit.jsx
    ├── NurseFAQ.jsx
    ├── Reviews.jsx
    ├── Credentials.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    └── LeadForm.jsx
```

---

## ✏️ To Update Content
All copy, data, and branding lives in one file: `src/constants.js`
- Change reviews, products, FAQs, ticker items, boroughs, professions
- Update `GOOGLE_SCRIPT_URL` if you get a new Apps Script endpoint
- Update `SITE_URL` and `SITE_NAME` if domain changes
