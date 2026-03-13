'use client';

import { useEffect, useRef, useState } from 'react';

type FadeInSectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export default function FadeInSection({ id, className = '', children }: FadeInSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`fade-in ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </section>
  );
}
