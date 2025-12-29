// Navigation functionality
const topNavLinks = document.querySelectorAll('.top-nav-link');
const pages = document.querySelectorAll('.page');

// Top navigation links
topNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Only prevent default for internal page navigation (data-page links)
        const targetPage = link.getAttribute('data-page');
        if (targetPage) {
            e.preventDefault();
            
            // Update active nav link
            topNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Show target page
            showPage(targetPage);
        }
        // If no data-page, let the link work normally (external page links)
    });
});

// Show specific page
function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Update active nav link based on current page
        topNavLinks.forEach(l => {
            l.classList.remove('active');
            if (l.getAttribute('data-page') === pageId) {
                l.classList.add('active');
            }
        });
    }
}

// Timeline point clicks (for Inhoudsopgave)
const timelinePoints = document.querySelectorAll('.timeline-point');
timelinePoints.forEach(point => {
    point.addEventListener('click', () => {
        const pointNumber = point.getAttribute('data-point');
        let targetPage = '';
        
        switch(pointNumber) {
            case '01':
                targetPage = 'over-mij';
                break;
            case '02':
                targetPage = 'meting';
                break;
            case '03':
                targetPage = 'ontwikkelplan';
                break;
            case '04':
                targetPage = 'carddeck';
                break;
            case '05':
                targetPage = 'bootcamp';
                break;
        }
        
        if (targetPage) {
            showPage(targetPage);
        }
    });
});

// Handle browser back/forward and hash navigation
window.addEventListener('popstate', (e) => {
    const page = window.location.hash.replace('#', '') || 'home';
    showPage(page);
});

// Handle hash changes
window.addEventListener('hashchange', () => {
    const page = window.location.hash.replace('#', '') || 'home';
    showPage(page);
});

// Initialize - show home page and set active nav link
const initialPage = window.location.hash.replace('#', '') || 'home';
if (pages.length > 0) {
    showPage(initialPage);
}

// Logo glow effect on hover
const logoWrapper = document.getElementById('logoWrapper');
const homeLogo = document.querySelector('.home-logo');
const glowCircle = document.getElementById('glowCircle');
const glowGradient = document.getElementById('glowGradient');

if (logoWrapper && homeLogo && glowCircle && glowGradient) {
    let animationFrame = null;
    let targetColorMix = 0; // 0 = orange, 1 = blue
    let currentColorMix = 0;
    const colorTransitionSpeed = 0.12;
    let isAnimating = false;
    
    // Color definitions (RGB)
    const colors = {
        orange: { r: 235, g: 103, b: 64 }, // #EB6740
        orangeMid: { r: 255, g: 107, b: 53 }, // #FF6B35
        blue: { r: 73, g: 107, b: 207 } // #496BCF
    };
    
    function rgbToHex(r, g, b) {
        return "#" + [r, g, b].map(x => {
            const hex = Math.round(x).toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }).join("");
    }
    
    function lerpColor(color1, color2, t) {
        return {
            r: color1.r + (color2.r - color1.r) * t,
            g: color1.g + (color2.g - color1.g) * t,
            b: color1.b + (color2.b - color1.b) * t
        };
    }
    
    function updateGradient() {
        // Smooth color mix transition
        currentColorMix += (targetColorMix - currentColorMix) * colorTransitionSpeed;
        
        // Create gradient colors that blend between orange and blue
        const innerColor = lerpColor(colors.orange, colors.blue, currentColorMix);
        const midColor1 = lerpColor(colors.orangeMid, colors.blue, currentColorMix * 0.7);
        const midColor2 = lerpColor(colors.orangeMid, colors.blue, currentColorMix * 0.85);
        const outerColor = colors.blue;
        
        // Get gradient stops
        const stops = glowGradient.querySelectorAll('stop');
        if (stops.length >= 4) {
            stops[0].setAttribute('stop-color', rgbToHex(innerColor.r, innerColor.g, innerColor.b));
            stops[1].setAttribute('stop-color', rgbToHex(midColor1.r, midColor1.g, midColor1.b));
            stops[2].setAttribute('stop-color', rgbToHex(midColor2.r, midColor2.g, midColor2.b));
            stops[3].setAttribute('stop-color', rgbToHex(outerColor.r, outerColor.g, outerColor.b));
        }
        
        if (Math.abs(currentColorMix - targetColorMix) > 0.001) {
            animationFrame = requestAnimationFrame(updateGradient);
        } else {
            isAnimating = false;
        }
    }
    
    function startColorAnimation() {
        if (!isAnimating) {
            isAnimating = true;
            animationFrame = requestAnimationFrame(updateGradient);
        }
    }
    
    logoWrapper.addEventListener('mousemove', (e) => {
        const rect = homeLogo.getBoundingClientRect();
        
        // Get mouse position relative to SVG element
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // SVG viewBox is "0 0 510 133"
        // Convert pixel coordinates to SVG coordinates
        const svgX = (x / rect.width) * 510;
        const svgY = (y / rect.height) * 133;
        
        // Calculate position percentage for color interpolation (0-1)
        // More orange on left, more blue on right
        const xPercent = Math.max(0, Math.min(1, x / rect.width));
        targetColorMix = xPercent;
        
        // Start animation if not already running
        startColorAnimation();
        
        // Update glow circle position
        glowCircle.setAttribute('cx', svgX);
        glowCircle.setAttribute('cy', svgY);
        glowCircle.setAttribute('opacity', '1');
    });
    
    logoWrapper.addEventListener('mouseleave', () => {
        glowCircle.setAttribute('opacity', '0');
        // Reset to orange when mouse leaves
        targetColorMix = 0;
        startColorAnimation();
    });
}

