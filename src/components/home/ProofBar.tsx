"use client";

import { useContent } from "@/lib/language";

export default function ProofBar() {
  const { proof } = useContent();
  const items = [...proof.items, ...proof.items];

  return (
    <div className="proof-bar" aria-hidden="true">
      <div className="proof-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="proof-item">
            {item}
          </span>
        ))}
      </div>
      <ul className="sr-only">
        {proof.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
