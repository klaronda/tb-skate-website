import { Separator } from './ui/separator';

type Page = 'home' | 'metrics' | 'documentation' | 'about' | 'privacy' | 'terms';

interface FooterProps {
  onNavigate?: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps = {}) {
  const footerLinks = [
    { title: 'About', href: '#', page: 'about' as Page },
    { title: 'Contact', href: '#' },
    { title: 'Blog', href: '#' },
    { title: 'Documentation', href: '#', page: 'documentation' as Page },
    { title: 'Privacy', href: '#', page: 'privacy' as Page },
    { title: 'Terms', href: '#', page: 'terms' as Page },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4">Trickbase.ai</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              The first AI computer vision model for action sports trick recognition, starting with skateboarding.
            </p>
            <p className="text-sm text-gray-500">
              Building the foundation for intelligent action sports analysis.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <h4 className="mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                link.page && onNavigate ? (
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
                )
              ))}
            </div>
          </nav>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Trickbase.ai. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>Built for the action sports community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}