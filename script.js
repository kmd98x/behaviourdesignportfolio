// Hamburger Menu functionality - Initialize when DOM is ready
function initHamburgerMenu() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuClose = document.getElementById('menuClose');
    const menuItems = document.querySelectorAll('.menu-item');
    const submenuToggle = document.getElementById('inhoudsopgaveMenu');
    const submenu = document.getElementById('inhoudsopgaveSubmenu');

    // Function to close menu
    function closeMenu() {
        if (hamburgerMenu && menuOverlay) {
            hamburgerMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
        }
    }

    // Toggle hamburger menu
    if (hamburgerMenu && menuOverlay) {
        hamburgerMenu.addEventListener('click', () => {
            const isOpening = !menuOverlay.classList.contains('active');
            hamburgerMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            
            // Set animation delays for menu items when opening
            if (isOpening) {
                menuItems.forEach((item, index) => {
                    item.style.setProperty('--item-index', index);
                });
            }
        });

        // Close menu with close button
        if (menuClose) {
            menuClose.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                closeMenu();
            });
        }

        // Close menu when clicking outside
        menuOverlay.addEventListener('click', (e) => {
            if (e.target === menuOverlay) {
                closeMenu();
            }
        });
    }

    // Toggle submenu on hover
    if (submenuToggle && submenu) {
        const submenuItems = submenu.querySelectorAll('.submenu-item');
        const menuItemWrapper = submenuToggle.closest('.menu-item-wrapper');
        
        // Show submenu on hover
        if (menuItemWrapper) {
            menuItemWrapper.addEventListener('mouseenter', () => {
                const isOpening = !submenu.classList.contains('active');
                submenuToggle.classList.add('active');
                submenu.classList.add('active');
                
                // Set animation delays for submenu items when opening
                if (isOpening) {
                    submenuItems.forEach((item, index) => {
                        item.style.setProperty('--submenu-item-index', index);
                    });
                }
            });
            
            // Hide submenu when mouse leaves
            menuItemWrapper.addEventListener('mouseleave', () => {
                submenuToggle.classList.remove('active');
                submenu.classList.remove('active');
            });
        }
    }

    // Close menu when clicking on menu items (except submenu toggle)
    menuItems.forEach(item => {
        if (!item.classList.contains('has-submenu')) {
            item.addEventListener('click', () => {
                if (hamburgerMenu && menuOverlay) {
                    hamburgerMenu.classList.remove('active');
                    menuOverlay.classList.remove('active');
                }
            });
        }
    });

    // Close menu when clicking on submenu items
    const submenuItems = document.querySelectorAll('.submenu-item');
    submenuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (hamburgerMenu && menuOverlay) {
                hamburgerMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
            }
        });
    });
}

// Initialize hamburger menu when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHamburgerMenu);
} else {
    // DOM is already loaded
    initHamburgerMenu();
}

// Competentie navigatie functionality
function initCompetentieNav() {
    const navLinks = document.querySelectorAll('.competentie-nav-link');
    const contentSections = document.querySelectorAll('.competentie-content');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('data-sectie');
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Show corresponding content
            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });
}

// Initialize competentie nav when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCompetentieNav);
} else {
    initCompetentieNav();
}

const pages = document.querySelectorAll('.page');

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

