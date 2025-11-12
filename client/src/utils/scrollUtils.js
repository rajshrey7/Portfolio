/**
 * Scrolls to a section smoothly with enhanced animation
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Offset from top (default: 80)
 */
export const scrollToSection = (sectionId, offset = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    // Enhanced smooth scroll with easing
    window.scrollTo({ 
      top: offsetPosition, 
      behavior: 'smooth' 
    });
  }
};

/**
 * Gets the active section based on scroll position
 * @param {string[]} sections - Array of section IDs
 * @returns {string} - Active section ID
 */
export const getActiveSection = (sections) => {
  const scrollPosition = window.scrollY + 200;
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section && section.offsetTop <= scrollPosition) {
      return sections[i];
    }
  }
  return sections[0];
};

/**
 * Smooth scroll with custom easing function
 */
export const smoothScrollTo = (targetY, duration = 1000) => {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  let startTime = null;

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    
    window.scrollTo(0, startY + distance * ease);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

