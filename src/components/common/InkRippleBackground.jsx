import React, { useEffect, useRef, useState } from "react";

const InkRippleBackground = () => {
  const [ripples, setRipples] = useState([]);
  const counterRef = useRef(0);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const handleMove = (event) => {
      const now = Date.now();

      if (now - lastSpawnRef.current < 90) {
        return;
      }

      lastSpawnRef.current = now;

      const ripple = {
        id: counterRef.current,
        x: event.clientX,
        y: event.clientY,
        size: 220 + ((counterRef.current % 4) * 36),
      };

      counterRef.current += 1;
      setRipples((current) => [...current.slice(-5), ripple]);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  useEffect(() => {
    if (!ripples.length) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setRipples((current) => current.slice(1));
    }, 720);

    return () => window.clearTimeout(timeoutId);
  }, [ripples]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ink-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </div>
  );
};

export default InkRippleBackground;
