# Portfolio Overhaul 2025 - Quick Start Guide

## ✅ What's Been Completed

All major features from your spec sheet have been implemented:

- [x] 🍓 Berry House section with red theming (top priority)
- [x] 🌈 ROYGBIV color scheme across sections
- [x] 💰 Support section with Ko-fi and GitHub Sponsors
- [x] 📚 Books section + dedicated books page
- [x] 🎯 Support tiers page with realistic perks
- [x] 💼 Portfolio split: Blog themes + Other projects
- [x] 📋 Resume updates (Berry House, Journal.kim, Write Club, graduation)
- [x] 🏥 Previous work history (7 Cups, hospice, ServiceMaster)
- [x] ✍️ Writing section CTAs (Medium, Tumblr, Bluesky, Threads, Mastodon)
- [x] 🎨 Hobbies section (chess, music, photography, French)
- [x] 👤 About section redesign (holistic, less corporate)
- [x] 🧭 Updated navigation menu

## 🚀 Before You Deploy

### 1. Add Missing Images (5-10 minutes)

**Required:**
- Berry House image: `static/images/berryhouse/strawberry-collective.jpg`
- 3 book covers: `static/images/books/*.jpg`

**Optional:**
- Updated hero image
- Updated about photo

See `IMAGES_NEEDED.md` for details.

### 2. Update These URLs (2 minutes)

Check and update in the data files:

```bash
# data/berryHouseSection.yml
buttonURL: "https://berryhouse.collective"  # Update if different

# data/booksSection.yml
gumroadURL: "#"  # Add real Gumroad links or remove

# data/supportSection.yml
kofiURL: "https://ko-fi.com/brennan"  # Verify
githubSponsorsURL: "https://github.com/sponsors/brennanbrown"  # Verify
```

### 3. Test Locally (5 minutes)

```bash
# Navigate to project directory
cd /Users/brennan/Documents/GitHub/marketing

# Start Hugo server
hugo server -D

# Open in browser
# http://localhost:1313

# Check:
# - All sections display correctly
# - Colors look good
# - Links work
# - Mobile responsive
```

### 4. Build and Deploy

```bash
# Build the site
hugo

# Deploy to Netlify (if using automatic deployment)
git add .
git commit -m "Portfolio overhaul 2025: Berry House, books, tiers, ROYGBIV redesign"
git push origin main
```

## 📱 Quick Navigation

**New Pages Created:**
- `/books` - Complete bibliography
- `/tiers` - Support tiers and perks

**New Homepage Sections:**
- `#berryhouse` - Berry House section
- `#support` - Support/donations
- `#books` - Books preview
- `#themes` - Blog themes portfolio
- `#projects` - Other projects
- `#hobbies` - Personal hobbies

## 🎨 Visual Guide

**Section Colors (ROYGBIV):**
```
🍓 Berry House    → Red (#dc2626)
💰 Support        → Orange (#fbbf24)
📚 Books          → Green (#22c55e)
📝 About          → Default theme
✍️ Writing        → Default theme
🎨 Themes         → Blue (#3b82f6)
💼 Projects       → Purple (#8b5cf6)
📋 Resume         → Default theme
🎯 Hobbies        → Light grey
```

## 📞 Common Issues & Fixes

### Issue: Images not showing
**Fix:** Check file paths in `static/images/` folder

### Issue: YAML errors
**Fix:** Validate YAML syntax at https://www.yamllint.com/
- Common issue: Incorrect indentation (use 2 spaces)

### Issue: Links not working
**Fix:** Check URLs in data/*.yml files, ensure `absURL` filter is used in templates

### Issue: Sections not displaying
**Fix:** Check `enable: true` in each data/*.yml file

### Issue: Menu items missing
**Fix:** Check `config.toml` - menu weights should be sequential

## 🔧 Quick Edits

### Change section order:
Edit `layouts/index.html` - rearrange partial includes

### Update Berry House content:
Edit `data/berryHouseSection.yml`

### Add/remove books:
Edit `data/booksSection.yml` and `content/books/_index.md`

### Modify support tiers:
Edit `content/tiers/_index.md`

### Change theme colors:
Edit inline styles in `layouts/partials/*.html` files

### Update social links:
Edit `config.toml` - `[[params.social]]` sections

## 📚 Documentation

**Detailed documentation:**
- `PORTFOLIO_OVERHAUL_2025.md` - Complete implementation summary
- `IMAGES_NEEDED.md` - Image requirements and setup

**Original requirements:**
- `docs/2025-spec-sheet.md` - Your original specifications
- Supporting docs in `docs/` folder

## 💡 Tips

1. **Preview before deploying** - Always test locally first
2. **Commit frequently** - Make small commits as you add images
3. **Keep backups** - Your old site content is preserved
4. **Test mobile** - Resize browser to check responsiveness
5. **Check performance** - Run Lighthouse audit before final deploy

## ✨ What Makes This Special

Your portfolio now:
- **Leads with Berry House** - Your new initiative takes center stage
- **Supports your mission** - Donation/support infrastructure in place
- **Shows the whole you** - Not just corporate skills, but chess, poetry, music, crisis support, hospice work
- **Guides to collaboration** - Clear path from "interested" to "supporter" to "client"
- **Celebrates your work** - Books, themes, projects, and hobbies all featured
- **Follows ROYGBIV** - Beautiful visual progression through rainbow colors

## 🎯 Next Steps

1. [ ] Add images (see IMAGES_NEEDED.md)
2. [ ] Update any placeholder URLs
3. [ ] Test locally
4. [ ] Review on mobile device
5. [ ] Deploy to production
6. [ ] Share with friends for feedback
7. [ ] Update social media profiles to link to new tiers page
8. [ ] Consider promoting Berry House on your platforms

---

**Questions?** Review the detailed documentation or check the original files in `docs/`

**Ready to launch?** You've got this! 🚀
