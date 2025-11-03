# Images Needed for Portfolio Overhaul

## Required Images

### 1. Berry House Section
**Path:** `static/images/berryhouse/`
**Filename:** `strawberry-collective.jpg`
**Specs:** 
- Dimensions: ~800x600px or larger
- Format: JPG or PNG
- Content: Berry House branding, strawberry theme, or abstract design in red tones
- Purpose: Main visual for Berry House section

### 2. Book Covers
**Path:** `static/images/books/`

**Files needed:**
- `prairie-boyspirit.jpg` - PRAIRIE BOYSPIRIT: An NDN Memoir
- `dogwood-verses.jpg` - THE DOGWOOD VERSES
- `weight-of-yr-heart.jpg` - The Weight of Yr Heart

**Specs:**
- Dimensions: Book cover ratio (typically 6:9 or similar)
- Format: JPG or PNG
- Quality: High resolution for zoom/retina displays
- Purpose: Featured on homepage books section and dedicated books page

### 3. Hero Image (Optional Update)
**Path:** `static/images/hero/`
**Current:** `hero-image.jpg`
**Specs:**
- Dimensions: ~1920x1080px (wide banner)
- Format: JPG
- Content: Professional photo or artistic representation
- Purpose: First impression on homepage

### 4. About Section Image (Optional Update)
**Path:** `static/images/about/`
**Current:** `about-img.jpg`
**Recommendation:**
- More personal/holistic photo reflecting your new positioning
- Could include: candid writing/coding photo, nature setting, or artistic portrait
- Should feel authentic rather than corporate

## Already Handled ✅

### Portfolio Screenshots
All portfolio screenshots have been copied from `docs/new-portfolio-screenshots/` to `static/images/portfolio/`:

- ✅ 11ty-gamification-live.png
- ✅ 11ty-indieweb-blog-starter-live.png
- ✅ bearminder-live.png
- ✅ campfire-hugo-theme-live.png
- ✅ classic-spirits-live.png
- ✅ communityandromance-live.png
- ✅ cset-live.png
- ✅ django-project-live.png
- ✅ enjoyment-work-live.png
- ✅ foothills-tumblr-live.png
- ✅ hyperpop-live.png
- ✅ jekyll-audit-live.png
- ✅ journalbar-live.png
- ✅ journalforme-live.png
- ✅ kindreadthepoet-live.png
- ✅ markdown-to-docx-live.png
- ✅ moneytree-live.png
- ✅ purelog-live.png
- ✅ retroweird-live.png
- ✅ sta-landing-page-live.png
- ✅ thinkingwhy-com-live.png
- ✅ watery-live.png
- ✅ watermelonclub-live.png
- ✅ writeclub-live.png

## Quick Setup Guide

### To add images:

1. **Book Covers:**
   ```bash
   # Create directory if needed
   mkdir -p static/images/books/
   
   # Add your book cover images
   cp /path/to/prairie-boyspirit-cover.jpg static/images/books/prairie-boyspirit.jpg
   cp /path/to/dogwood-verses-cover.jpg static/images/books/dogwood-verses.jpg
   cp /path/to/weight-of-yr-heart-cover.jpg static/images/books/weight-of-yr-heart.jpg
   ```

2. **Berry House Image:**
   ```bash
   # Create directory if needed
   mkdir -p static/images/berryhouse/
   
   # Add Berry House branded image
   cp /path/to/berry-house-image.jpg static/images/berryhouse/strawberry-collective.jpg
   ```

3. **Hero Image (if updating):**
   ```bash
   # Replace existing hero image
   cp /path/to/new-hero.jpg static/images/hero/hero-image.jpg
   ```

## Temporary Fallbacks

If you want to deploy before all images are ready, you can:

1. **Use placeholder images** from a service like:
   - https://placeholder.com/
   - https://via.placeholder.com/
   - https://picsum.photos/

2. **Example placeholder update** in `data/booksSection.yml`:
   ```yaml
   image: "https://via.placeholder.com/400x600/dc2626/ffffff?text=Book+Cover"
   ```

3. **Or comment out the books section** temporarily by setting `enable: false` in `data/booksSection.yml`

## Image Optimization Tips

Before adding images, consider:

1. **Compress images** to reduce load time:
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: <200KB for covers, <500KB for hero images

2. **Use appropriate formats:**
   - JPG for photos
   - PNG for graphics with transparency
   - Consider WebP for modern browsers

3. **Provide responsive versions** (optional):
   - Create @2x versions for retina displays
   - Use srcset in HTML templates for optimal loading

## Priority Order

If you're adding images incrementally, prioritize:

1. **Berry House image** (most prominent new section)
2. **Book covers for homepage** (3 featured books)
3. **Hero image** (if updating)
4. **About section image** (if updating)
5. **Remaining book covers** (for full books page)
