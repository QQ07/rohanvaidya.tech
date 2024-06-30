import React from 'react'
import { Github, Mail, Twitter, Linkedin } from "lucide-react";
import Link from 'next/link';
import X from './Icons';

const socials = [
  {
    icon: <X size={20} />,
    href: "https://x.com/vaidya_jiii",
    handle: "@vrohan",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:hello@rohanvaidya.tech",
    handle: "hello@rohanvaidya.tech",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/qq07",
    handle: "qq07",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://linkedin.com/in/vrohann",
    handle: "qq07",
  },
];

function Socials() {
  return (
    <div className="absolute bottom-10 text-white flex gap-2">
      {socials.map((s) => (
        
          <Link
            href={s.href}
            target="_blank"
                >
            
            <span className="relative z-10 flex items-center justify-center w-8 h-8 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
              {s.icon}
            </span>{" "}
            <div className="z-10 flex flex-col items-center">
              
              
            </div>
          </Link>
      ))}
    </div>
  );
}

export default Socials