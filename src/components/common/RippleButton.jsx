import { useState } from "react";

export default function RippleButton({ as: Tag = "button", className = "", children, onClick, ...rest }) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const id = `${Date.now()}-${Math.random()}`;
    setRipples((current) => [
      ...current,
      { id, x: event.clientX - rect.left - size / 2, y: event.clientY - rect.top - size / 2, size },
    ]);
    window.setTimeout(() => setRipples((current) => current.filter((r) => r.id !== id)), 700);
    onClick?.(event);
  };

  return (
    <Tag className={className} onClick={handleClick} {...rest}>
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple-dot"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
          aria-hidden="true"
        />
      ))}
    </Tag>
  );
}