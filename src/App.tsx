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

type Page = 'home' | 'metrics' | 'documentation' | 'blog' | 'about' | 'privacy' | 'terms' | 'article';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentArticle, setCurrentArticle] = useState<string>('');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderHomePage = () => (
    <main>
      <section id="home">
        <Hero />
      </section>
      <ProblemSection />
      <section id="progress">
        <ProgressSection />
      </section>
      <HowItWorksSection />
      <VisionSection />
      <CredibilitySection />
      <CTASection />
      <section id="about">
        <Footer onNavigate={setCurrentPage} />
      </section>
    </main>
  );

  const renderMetricsPage = () => (
    <main>
      <MetricsPage />
      <Footer onNavigate={setCurrentPage} />
    </main>
  );

  const renderDocumentationPage = () => (
    <main>
      <DocumentationPage />
      <Footer onNavigate={setCurrentPage} />
    </main>
  );

  const renderAboutPage = () => (
    <main>
      <AboutPage />
      <Footer onNavigate={setCurrentPage} />
    </main>
  );

  const renderBlogPage = () => (
    <main>
      <BlogPage onNavigateToArticle={(articleId: string) => {
        setCurrentArticle(articleId);
        setCurrentPage('article');
      }} />
      <Footer onNavigate={setCurrentPage} />
    </main>
  );

  const renderArticlePage = () => (
    <main>
      <ArticlePage 
        articleId={currentArticle} 
        onNavigate={(page: string) => setCurrentPage(page as Page)} 
      />
      <Footer onNavigate={setCurrentPage} />
    </main>
  );

  const renderPrivacyPage = () => (
    <main>
      <PrivacyPolicyPage />
      <Footer onNavigate={setCurrentPage} />
    </main>
  );

  const renderTermsPage = () => (
    <main>
      <TermsOfServicePage />
      <Footer onNavigate={setCurrentPage} />
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
    </div>
  );
}