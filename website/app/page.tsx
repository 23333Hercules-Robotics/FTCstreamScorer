'use client';

import { Download, Webcam, Timer, Layout, Github, ChevronRight, CheckCircle2, Monitor, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [downloads, setDownloads] = useState<number | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    // Fetch current download count
    fetch('/api/downloads')
      .then(res => res.json())
      .then(data => setDownloads(data.count))
      .catch(() => setDownloads(0));
  }, []);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Track the download
    try {
      await fetch('/api/downloads', { method: 'POST' });
      setDownloads(prev => (prev || 0) + 1);
    } catch (error) {
      console.error('Failed to track download:', error);
    }

    // Trigger the actual download
    window.location.href = 'https://github.com/23333Hercules-Robotics/FTCstreamScorer/releases/latest/download/stream-scorer-1.0.0.jar';
    
    setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Timer className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">FTC Stream Scorer</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#download" className="text-gray-300 hover:text-white transition-colors">Download</a>
            <a 
              href="https://github.com/23333Hercules-Robotics/FTCstreamScorer" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold">
            ⚡ FTC DECODE 2025-2026 Season
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Professional Scoring
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Made Simple
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Local-only FTC match scoring system with dual-window output, webcam integration, 
            and authentic match timing. Perfect for streaming and live events.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold text-lg shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>{isDownloading ? 'Downloading...' : 'Download Now'}</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://github.com/23333Hercules-Robotics/FTCstreamScorer/blob/main/QUICK_START.md"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Quick Start Guide
            </a>
          </div>

          {downloads !== null && (
            <p className="text-gray-400 text-sm">
              🎉 Downloaded {downloads.toLocaleString()} times
            </p>
          )}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Platform</p>
              <p className="text-white font-semibold">Windows, macOS, Linux</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Requirements</p>
              <p className="text-white font-semibold">Java 11+</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-1">Size</p>
              <p className="text-white font-semibold">~53 MB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Packed with Features</h2>
          <p className="text-gray-400 text-lg">Everything you need for professional FTC scoring</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FeatureCard
            icon={<Layout className="w-8 h-8 text-blue-400" />}
            title="Dual-Window System"
            description="Separate control panel and stream output window for easy OBS integration"
          />
          <FeatureCard
            icon={<Webcam className="w-8 h-8 text-purple-400" />}
            title="Webcam Integration"
            description="Live webcam capture with scoring overlay perfect for streaming"
          />
          <FeatureCard
            icon={<Timer className="w-8 h-8 text-green-400" />}
            title="Authentic Timing"
            description="Official FTC match timing with original sound effects and countdown"
          />
          <FeatureCard
            icon={<CheckCircle2 className="w-8 h-8 text-yellow-400" />}
            title="DECODE Scoring"
            description="Full support for FTC DECODE 2025-2026 season scoring rules"
          />
          <FeatureCard
            icon={<Monitor className="w-8 h-8 text-red-400" />}
            title="Local Only"
            description="No login, no cloud sync, no internet required. Your data stays yours."
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-indigo-400" />}
            title="Single Person"
            description="Designed for one-person operation with intuitive controls"
          />
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/10 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">See It In Action</h3>
              <p className="text-gray-400">Professional scoring interface designed for live events</p>
            </div>
            <div className="aspect-video bg-slate-950 rounded-lg border border-white/20 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <Timer className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <p className="text-gray-400 text-sm">Control Panel & Stream Output Preview</p>
                <p className="text-gray-500 text-xs mt-2">Screenshot coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Download FTC Stream Scorer and start scoring matches in minutes
          </p>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/10 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 text-left">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Download the JAR file</h4>
                  <p className="text-gray-400 text-sm">Single file, works on all platforms</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 text-left">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Install Java 11+</h4>
                  <p className="text-gray-400 text-sm">
                    Get it from{' '}
                    <a 
                      href="https://adoptium.net/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      adoptium.net
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 text-left">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Run and enjoy!</h4>
                  <p className="text-gray-400 text-sm">Double-click or use the launcher script</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold text-lg shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
                >
                  <Download className="w-5 h-5" />
                  <span>{isDownloading ? 'Downloading...' : 'Download v1.0.0'}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-gray-400 text-sm">
            <p>Free and open source • No registration required • Works offline</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">FTC Stream Scorer</h3>
              <p className="text-gray-400 text-sm">
                Professional scoring system for FIRST Tech Challenge events.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://github.com/23333Hercules-Robotics/FTCstreamScorer/blob/main/QUICK_START.md" className="text-gray-400 hover:text-white transition-colors">
                    Quick Start Guide
                  </a>
                </li>
                <li>
                  <a href="https://github.com/23333Hercules-Robotics/FTCstreamScorer/blob/main/README.md" className="text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="https://github.com/23333Hercules-Robotics/FTCstreamScorer/blob/main/DEPLOYMENT_GUIDE.md" className="text-gray-400 hover:text-white transition-colors">
                    Deployment Guide
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://github.com/23333Hercules-Robotics/FTCstreamScorer" className="text-gray-400 hover:text-white transition-colors">
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a href="https://github.com/23333Hercules-Robotics/FTCstreamScorer/issues" className="text-gray-400 hover:text-white transition-colors">
                    Report Issues
                  </a>
                </li>
                <li>
                  <a href="https://github.com/23333Hercules-Robotics/FTCstreamScorer/releases" className="text-gray-400 hover:text-white transition-colors">
                    Release Notes
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Hercules Robotics. Open source project for the FTC community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all hover:scale-105 transform">
      <div className="mb-4">{icon}</div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
