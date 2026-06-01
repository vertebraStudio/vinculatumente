'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once it's visible, we don't need to observe it anymore
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const scanAndObserve = () => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => {
        // If it's already in the viewport (or close), trigger it
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('active');
        } else {
          observer.observe(el);
        }
      });
    };

    // Scroll to hash on page transition if present in URL
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 300); // Small timeout to ensure layout is ready
        }
      }
    };

    // Run on mount and after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      scanAndObserve();
      handleHashScroll();
    }, 100);

    // Also listen to hashchange events for in-page navigation
    window.addEventListener('hashchange', handleHashScroll);

    // MutationObserver to catch elements rendered after the initial load
    const mutationObserver = new MutationObserver(() => {
      scanAndObserve();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, [pathname]);

  return null;
}
