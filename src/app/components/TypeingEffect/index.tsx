"use client";
import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
}

export default function TypingEffect({ text }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const typingSpeed = 150; // Velocidade de digitação em ms
  const deletingSpeed = 100; // Velocidade de apagar em ms

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && index < text.length) {
      // Adiciona letra por letra
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      // Remove letra por letra
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && index === text.length) {
      // Aguarda antes de começar a apagar
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && index === 0) {
      // Após apagar, recomeça o ciclo
      setIsDeleting(false);
      setIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [text, index, isDeleting]);

  return (
    <span
      className="text-blue-400 font-bold
 
  "
    >
      {displayText}
    </span>
  );
}
