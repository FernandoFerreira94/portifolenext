"use client";
import React, { useState, useEffect } from "react";

export default function TypingEffect() {
  const fullText = "React.js Node.js";
  const reactLength = "React.js".length;

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const typingSpeed = 80;
  const deletingSpeed = 80;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && index < fullText.length) {
      // Digitando
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      // Apagando
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && index === fullText.length) {
      // Espera antes de apagar
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && index === 0) {
      // Recomeçar
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText]);

  // Separar o texto digitado até agora em duas partes coloridas
  const reactPart = displayText.slice(0, reactLength);
  const nodePart = displayText.slice(reactLength);

  return (
    <span className="font-bold">
      <span className="text-blue-400">{reactPart} </span>
      <span className="text-green-400">{nodePart}</span>
    </span>
  );
}
