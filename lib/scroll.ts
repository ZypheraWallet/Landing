'use client'

export const smoothScrollTo = (targetId: string, offset = 0) => {
  const element = document.getElementById(targetId);
  if (element) {
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};