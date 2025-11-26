import React from 'react';
import { Separator } from './ui/separator';
import logoSvg from '../assets/Logo.svg';

type Page = 'home' | 'metrics' | 'documentation' | 'about' | 'privacy' | 'terms';

interface FooterProps {
  onNavigate?: (page: Page) => void;
  onContact?: () => void;
}

export function Footer({ onNavigate, onContact }: FooterProps = {}) {
  const footerLinks = [
    { title: 'About', href: '#', page: 'about' as Page },
    { title: 'Contact', href: '#' },
    { title: 'Blog', href: '#' },
    { title: 'Privacy', href: '#', page: 'privacy' as Page },
    { title: 'Terms', href: '#', page: 'terms' as Page },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-8" style={{ paddingBottom: '50px' }} role="contentinfo">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-2">
              <img 
                src={logoSvg} 
                alt="" 
                style={{ width: '50px', height: '50px', filter: 'drop-shadow(0 0 0.8px white)' }}
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Trickbase AI</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              The first AI computer vision model for action sports trick recognition, starting with skateboarding.
            </p>
            <p className="text-sm text-gray-500">
              Building the foundation for intelligent action sports analysis.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <p className="text-2xl mb-4" style={{ marginTop: '58px' }}>Quick Links</p>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => {
                if (link.title === 'Contact' && onContact) {
                  return (
                    <button
                      key={link.title}
                      onClick={onContact}
                      className="text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1 text-left"
                    >
                      {link.title}
                    </button>
                  );
                }
                return link.page && onNavigate ? (
                  <button
                    key={link.title}
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1 text-left"
                  >
                    {link.title}
                  </button>
                ) : (
                  <a
                    key={link.title}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1 py-1"
                  >
                    {link.title}
                  </a>
                );
              })}
            </div>
          </nav>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-4">
          <p className="text-sm text-gray-500">
            © 2025 Trickbase AI. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>Built for the action sports community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}