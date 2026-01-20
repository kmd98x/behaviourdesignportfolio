# Next.js Migration Guide

This project has been migrated from a static HTML/CSS/JS site to Next.js.

## What's Been Done

✅ **Project Setup**
- Next.js 14+ installed and configured
- App Router structure created (`app/` directory)
- Components folder created for reusable React components
- Assets moved to `public/` folder

✅ **Core Components**
- `HamburgerMenu` - Navigation menu component
- `ScrollingFooter` - Footer with scrolling text
- Root layout with global styles and fonts

✅ **Pages Created**
- Home page (`app/page.js`)
- Gewoonte page (`app/gewoonte/page.js`)

✅ **Configuration**
- `next.config.js` - Next.js configuration
- `jsconfig.json` - Path aliases (`@/*` for root imports)
- `.gitignore` - Next.js specific ignores
- Global CSS imports in `app/globals.css`

## What Still Needs to Be Done

### 1. Convert Remaining HTML Pages
The following pages need to be converted to Next.js pages:
- `Inhoudsopgave.html` → `app/Inhoudsopgave/page.js`
- `0-meting.html` → `app/0-meting/page.js`
- `0-meting-orienteren.html` → `app/0-meting/orienteren/page.js`
- `0-meting-verbeelden.html` → `app/0-meting/verbeelden/page.js`
- `0-meting-prototypen.html` → `app/0-meting/prototypen/page.js`
- `0-meting-samen.html` → `app/0-meting/samen/page.js`
- `0-meting-evalueren.html` → `app/0-meting/evalueren/page.js`
- `ontwikkelplan.html` → `app/ontwikkelplan/page.js`
- `carddeck.html` → `app/carddeck/page.js`
- `bootcamp.html` → `app/bootcamp/page.js`
- `workshop.html` → `app/workshop/page.js`
- `omnient.html` → `app/omnient/page.js`
- `over-mij.html` → `app/over-mij/page.js`

### 2. Convert JavaScript to React
- Convert `script.js` functionality to React hooks and components
- Convert page navigation logic to Next.js routing
- Convert animations to React-friendly implementations
- Convert Swiper initialization (if using swiper-init.js)

### 3. Update Image References
All image references need to be updated:
- From: `<img src="images/...">`
- To: `<Image src="/images/..." />` (Next.js Image component)

### 4. CSS Migration
- Ensure all CSS works with Next.js
- Consider converting some CSS to Tailwind utilities where appropriate
- Test all styles are loading correctly

### 5. Client-Side Features
Convert client-side JavaScript to React:
- Hamburger menu interactions (✅ Done)
- Page navigation
- Tab switching (gewoonte nav, etc.)
- Video play/pause controls
- Accordion functionality
- Lightbox modals
- Intersection Observer animations

## Running the Project

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## File Structure

```
/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles
│   ├── gewoonte/
│   │   └── page.js        # Gewoonte page
│   └── [other pages]/
├── components/
│   ├── HamburgerMenu.js
│   └── ScrollingFooter.js
├── public/
│   ├── images/            # All images
│   └── videos/            # All videos
├── styles.css             # Original styles (imported in globals.css)
├── tailwind.css           # Tailwind CSS output
└── next.config.js
```

## Notes

- The original HTML files are still in the root directory - they can be removed once all pages are converted
- Original `script.js` is still present - functionality needs to be migrated to React
- CSS is imported in `globals.css` to maintain all existing styles
- Tailwind CSS v4 is set up and ready to use alongside existing CSS
