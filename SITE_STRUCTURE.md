# Portfolio Site Structure - 2025 Overhaul

## 🏠 Homepage Flow

```
┌─────────────────────────────────────┐
│          HERO SECTION               │
│  "Writing, Marketing & Tech"        │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│    🍓 BERRY HOUSE (RED)             │
│  Primary Focus - New Initiative     │
│  • JAMstack Development             │
│  • Digital Writing Services         │
│  • Social Enterprise Mission        │
│  CTA: Get in Touch with Berry House │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│    💰 SUPPORT SECTION (ORANGE)      │
│  Support My FOSS Work               │
│  • Ko-fi Link                       │
│  • GitHub Sponsors Link             │
│  • CTA to Support Tiers Page        │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│    📚 BOOKS SECTION (GREEN)         │
│  Published Works Showcase           │
│  • 3 Featured Books                 │
│  • Amazon/Gumroad Links             │
│  • CTA to Full Books Page           │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│    👤 ABOUT SECTION                 │
│  Holistic Self-Description          │
│  • Queer Métis Identity             │
│  • Diverse Background               │
│  • Open-Source Contributor          │
│  • Personal Touch                   │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│    ✍️ WRITING SECTION               │
│  Writing Portfolio Preview          │
│  • 3 Recent Articles                │
│  • CTAs to Other Platforms:         │
│    - Medium Blog                    │
│    - Tumblr Poetry                  │
│    - Bluesky/Threads/Mastodon       │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│    🎨 THEMES SECTION (BLUE)         │
│  Jekyll & Eleventy Themes           │
│  • 4 Featured Themes                │
│  • Demo + Code Links                │
│  • Star Counts                      │
│  • CTA to Full Portfolio            │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│    💼 PROJECTS SECTION (PURPLE)     │
│  Apps, Tools & Websites             │
│  • 4 Featured Projects              │
│  • Full-stack Applications          │
│  • Developer Tools                  │
│  • CTA to Full Portfolio            │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│    📋 RESUME SECTION                │
│  Education & Experience             │
│  • Berry House (NEW)                │
│  • Write Club (UPDATED)             │
│  • Journal.kim (NEW)                │
│  • Previous Work History (NEW):     │
│    - 7 Cups                         │
│    - Rotary Flames House            │
│    - ServiceMaster Clean            │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│    💬 TESTIMONIALS SECTION          │
│  (Existing - Unchanged)             │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│    🛠️ SKILLS SECTION                │
│  (Existing - Unchanged)             │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│    📊 SERVICES SECTION              │
│  (Existing - Unchanged)             │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│    🎯 HOBBIES SECTION               │
│  Beyond the Code                    │
│  • ♟️ Competitive Chess             │
│  • 🎵 Music Composition             │
│  • 📷 Photography                   │
│  • 🇫🇷 French Language              │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│    📁 PORTFOLIO (COMPATIBILITY)     │
│  (Existing - May be hidden)         │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│          FOOTER                     │
│  Social Links + Contact Info        │
└─────────────────────────────────────┘
```

## 📄 Standalone Pages

### `/books` - Complete Bibliography
```
┌─────────────────────────────────────┐
│  BOOKS & PUBLISHED WORKS            │
│                                     │
│  • Author Bio                       │
│  • 9 Complete Books with:           │
│    - Full descriptions              │
│    - Publication details            │
│    - Amazon links                   │
│    - Ratings                        │
│  • Write Club Info                  │
└─────────────────────────────────────┘
```

### `/tiers` - Support Tiers & Perks
```
┌─────────────────────────────────────┐
│  SUPPORT TIERS & MONTHLY PERKS      │
│                                     │
│  1. ☕ Coffee Tier - $3/mo          │
│  2. 📚 Reader Tier - $8/mo          │
│  3. 💻 Developer Tier - $15/mo      │
│  4. 🌟 Patron Tier - $30/mo         │
│  5. 🏆 Collaborator Tier - $50/mo   │
│  6. 💖 Benefactor Tier - $100/mo    │
│                                     │
│  • Detailed perk descriptions       │
│  • FAQ section                      │
│  • Ko-fi + GitHub Sponsors links    │
└─────────────────────────────────────┘
```

### `/blog` - Writing Samples (Existing)
All blog posts and writing samples

### `/portfolio` - Full Portfolio (Existing)
Complete portfolio of projects and themes

### `/contact` - Contact Page (Existing)
Contact form and information

## 🧭 Navigation Menu

```
┌──────────────────────────────────────────────────────────┐
│  Home | Berry House | About | Books | Work | Writing |  │
│  Resume | Support Me | Contact                           │
└──────────────────────────────────────────────────────────┘
```

**Menu Items:**
1. Home → `#home`
2. Berry House → `#berryhouse`
3. About → `#about`
4. Books → `/books`
5. Work → `/portfolio`
6. Writing → `/blog`
7. Resume → `#resume`
8. Support Me → `/tiers`
9. Contact → `/contact`

## 🎨 Color Scheme (ROYGBIV)

```
🟥 RED      → Berry House Section
🟧 ORANGE   → Support Section
🟩 GREEN    → Books Section
⬜ NEUTRAL  → About, Writing, Resume, etc.
🟦 BLUE     → Themes Section
🟪 PURPLE   → Projects Section
⬜ GREY     → Hobbies Section
```

## 📱 Social Media Links

**Footer & Header:**
- GitHub → https://github.com/brennanbrown
- LinkedIn → https://linkedin.com/in/brennankbrown
- Tumblr → https://bkpoetry.com
- Medium → https://blog.brennanbrown.ca
- Bluesky → https://bsky.app/profile/brennan.bsky.social
- Mastodon → https://mastodon.social/@brennan
- ResearchGate → https://researchgate.net/profile/Brennan-Brown-2
- Email → mail@brennanbrown.ca

## 🗂️ File Organization

### Data Files (Content)
```
data/
├── aboutSection.yml          (UPDATED - holistic)
├── berryHouseSection.yml     (NEW - red section)
├── blogSection.yml           (UPDATED - added CTAs)
├── booksSection.yml          (NEW - books preview)
├── hobbiesSection.yml        (NEW - personal hobbies)
├── portfolioSection.yml      (existing)
├── projectsSection.yml       (NEW - other projects)
├── resumeSection.yml         (UPDATED - new experiences)
├── serviceSection.yml        (existing)
├── skillSection.yml          (existing)
├── supportSection.yml        (NEW - donations)
├── testimonialSection.yml    (existing)
└── themesSection.yml         (NEW - blog themes)
```

### Layout Templates
```
layouts/
├── index.html                (UPDATED - new section order)
└── partials/
    ├── berryHouseSection.html    (NEW)
    ├── booksSection.html         (NEW)
    ├── blogSection.html          (UPDATED)
    ├── hobbiesSection.html       (NEW)
    ├── projectsSection.html      (NEW)
    ├── supportSection.html       (NEW)
    └── themesSection.html        (NEW)
```

### Content Pages
```
content/
├── books/
│   └── _index.md             (NEW - complete bibliography)
├── tiers/
│   └── _index.md             (NEW - support tiers)
├── blog/                     (existing)
└── portfolio/                (existing)
```

## 🎯 User Journey Mapping

### New Visitor Flow
```
1. Lands on Homepage
   ↓
2. Sees Berry House (RED) - Main offering
   ↓
3. Scrolls to Support (ORANGE) - Can support if interested
   ↓
4. Discovers Books (GREEN) - Sees published work
   ↓
5. Reads About - Gets holistic view
   ↓
6. Explores Writing - Finds other platforms
   ↓
7. Views Themes/Projects (BLUE/PURPLE) - Sees technical work
   ↓
8. Checks Resume - Understands background
   ↓
9. Sees Hobbies - Complete picture of person
   ↓
10. Takes Action:
    • Contacts Berry House for work
    • Supports on Ko-fi/GitHub
    • Follows on social media
    • Buys a book
```

### Supporter Flow
```
Homepage → Support Section → Tiers Page → Ko-fi/GitHub Sponsors
```

### Client Flow
```
Homepage → Berry House Section → Contact Form / Berry House Website
```

### Reader Flow
```
Homepage → Books Section → Books Page → Amazon Purchase
                ↓
         Writing Section → Blog/Medium/Tumblr
```

### Developer Flow
```
Homepage → Themes/Projects Sections → GitHub Repos → Star/Fork/Use
```

## 📊 Content Inventory

**Total Sections on Homepage:** 13
**New Sections Added:** 6
**Updated Sections:** 3
**New Pages Created:** 2
**Total Navigation Items:** 9
**Social Media Links:** 8
**Books Featured:** 3 (homepage) / 9 (books page)
**Themes Featured:** 4 (homepage) / 11 (total)
**Projects Featured:** 4 (homepage) / 12 (total)
**Support Tiers:** 6
**Work Experiences Added:** 3

## ✨ Key Differentiators

**What makes this portfolio unique:**

1. **Berry House First** - Social enterprise takes priority over personal branding
2. **Support Infrastructure** - Built-in donation/patronage system
3. **Holistic Identity** - Not just skills, but whole person (chess, poetry, crisis support)
4. **FOSS Emphasis** - Clear mission to support open-source work
5. **ROYGBIV Design** - Unique visual journey through colors
6. **Multi-dimensional** - Developer + Writer + Author + Activist + Volunteer
7. **Community-focused** - Write Club, CSET, accessibility advocacy
8. **Transparent Support** - Clear tiers with realistic, skill-based perks

---

**Summary:** Your portfolio now tells a complete story of who you are, what you do, and how people can engage with your work—whether as clients, supporters, readers, or collaborators.
