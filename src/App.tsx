import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ProgressSection } from './components/ProgressSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { VisionSection } from './components/VisionSection';
import { CredibilitySection } from './components/CredibilitySection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { MetricsPage } from './components/MetricsPage';
import { DocumentationPage } from './components/DocumentationPage';
import { AboutPage } from './components/AboutPage';
import { BlogPage } from './components/BlogPage';
import { ArticlePage } from './components/ArticlePage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import { ContactModal } from './components/ContactModal';
import { MobileAppWrapper } from './MobileAppWrapper';

type Page = 'home' | 'metrics' | 'documentation' | 'blog' | 'about' | 'privacy' | 'terms' | 'article' | 'app';
type AppMode = 'marketing' | 'mobile';

// URL to page mapping
const urlToPage: Record<string, Page> = {
  '/': 'home',
  '/blog': 'blog',
  '/about': 'about',
  '/privacy': 'privacy',
  '/documentation': 'documentation',
  '/terms': 'terms',
};

// Page to URL mapping
const pageToUrl: Record<Page, string> = {
  'home': '/',
  'blog': '/blog',
  'about': '/about',
  'privacy': '/privacy',
  'documentation': '/documentation',
  'terms': '/terms',
  'metrics': '/metrics',
  'article': '/article',
  'app': '/app',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentArticle, setCurrentArticle] = useState<string>('');
  const [appMode, setAppMode] = useState<AppMode>('marketing');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Initialize page from URL on mount
  useEffect(() => {
    const path = window.location.pathname;
    const page = urlToPage[path] || 'home';
    setCurrentPage(page);
    
    // Handle article slugs in URL
    if (path.startsWith('/blog/') && path !== '/blog') {
      const slug = path.replace('/blog/', '');
      setCurrentArticle(slug);
      setCurrentPage('article');
    }
  }, []);

  // Update URL when page changes
  useEffect(() => {
    const url = pageToUrl[currentPage] || '/';
    if (currentPage === 'article' && currentArticle) {
      window.history.pushState({ page: currentPage, article: currentArticle }, '', `/blog/${currentArticle}`);
    } else if (window.location.pathname !== url) {
      window.history.pushState({ page: currentPage }, '', url);
    }
  }, [currentPage, currentArticle]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const path = window.location.pathname;
      const page = urlToPage[path] || 'home';
      setCurrentPage(page);
      
      if (path.startsWith('/blog/') && path !== '/blog') {
        const slug = path.replace('/blog/', '');
        setCurrentArticle(slug);
        setCurrentPage('article');
      } else {
        setCurrentArticle('');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleLaunchApp = () => {
    setAppMode('mobile');
  };

  // Render mobile app if in mobile mode
  if (appMode === 'mobile') {
    return <MobileAppWrapper />;
  }

  const renderHomePage = () => (
    <main>
      <section id="home">
        <Hero onLaunchApp={handleLaunchApp} />
      </section>
      <ProblemSection />
      <section id="progress">
        <ProgressSection />
      </section>
      <HowItWorksSection />
      <VisionSection />
      <CredibilitySection />
      <CTASection onLaunchApp={handleLaunchApp} />
      <section id="about">
        <Footer onNavigate={setCurrentPage} onContact={() => setIsContactModalOpen(true)} />
      </section>
    </main>
  );

  const renderMetricsPage = () => (
    <main>
      <MetricsPage />
      <Footer onNavigate={setCurrentPage} onContact={() => setIsContactModalOpen(true)} />
    </main>
  );

  const renderDocumentationPage = () => (
    <main>
      <DocumentationPage onContact={() => setIsContactModalOpen(true)} />
      <Footer onNavigate={setCurrentPage} onContact={() => setIsContactModalOpen(true)} />
    </main>
  );

  const renderAboutPage = () => (
    <main>
      <AboutPage />
      <Footer onNavigate={setCurrentPage} onContact={() => setIsContactModalOpen(true)} />
    </main>
  );

  const renderBlogPage = () => (
    <main>
      <BlogPage onNavigateToArticle={(articleId: string) => {
        setCurrentArticle(articleId);
        setCurrentPage('article');
        window.history.pushState({ page: 'article', article: articleId }, '', `/blog/${articleId}`);
      }} />
      <Footer onNavigate={setCurrentPage} onContact={() => setIsContactModalOpen(true)} />
    </main>
  );

  const renderArticlePage = () => (
    <main>
      <ArticlePage 
        articleId={currentArticle} 
        onNavigate={(page: string) => setCurrentPage(page as Page)} 
      />
      <Footer onNavigate={setCurrentPage} onContact={() => setIsContactModalOpen(true)} />
    </main>
  );

  const renderPrivacyPage = () => (
    <main>
      <PrivacyPolicyPage onContact={() => setIsContactModalOpen(true)} />
      <Footer onNavigate={setCurrentPage} onContact={() => setIsContactModalOpen(true)} />
    </main>
  );

  const renderTermsPage = () => (
    <main>
      <TermsOfServicePage onContact={() => setIsContactModalOpen(true)} />
      <Footer onNavigate={setCurrentPage} onContact={() => setIsContactModalOpen(true)} />
    </main>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return renderHomePage();
      case 'metrics':
        return renderMetricsPage();
      case 'documentation':
        return renderDocumentationPage();
      case 'about':
        return renderAboutPage();
      case 'blog':
        return renderBlogPage();
      case 'article':
        return renderArticlePage();
      case 'privacy':
        return renderPrivacyPage();
      case 'terms':
        return renderTermsPage();
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* SEO Meta Tags would go here in a real app */}
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderCurrentPage()}
      <ContactModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />
    </div>
  );
}