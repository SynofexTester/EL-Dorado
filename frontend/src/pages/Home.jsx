import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  Download, 
  CheckCircle2,
  Mail,
  User,
  MessageSquare,
  Star,
  Crown,
  LineChart,
  DollarSign,
  Clock,
  Target,
  Award
} from 'lucide-react';
import { toast } from 'sonner';

const Home = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Mock form submission - saves to browser storage
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({ ...contactForm, timestamp: new Date().toISOString() });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleDemoDownload = () => {
    toast.success('Demo version download will start shortly!');
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-amber-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Crown className="w-8 h-8 text-amber-400" />
            <h1 className="text-2xl font-bold text-amber-400">EL DORADO</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-slate-300 hover:text-amber-400 transition-colors">Features</button>
            <button onClick={() => scrollToSection('performance')} className="text-slate-300 hover:text-amber-400 transition-colors">Performance</button>
            <button onClick={() => scrollToSection('pricing')} className="text-slate-300 hover:text-amber-400 transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-amber-400 transition-colors">Contact</button>
          </nav>
          <Button onClick={() => scrollToSection('pricing')} className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c" 
            alt="Trading Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-500/20 text-amber-400 border-amber-500/30 px-4 py-2 text-sm">
              <Star className="w-4 h-4 mr-2 inline" />
              MetaTrader 4 Expert Advisor
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent leading-tight">
              EL DORADO MT4 EA
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional Grid Trading System with RSI & MA Filters. 
              Automated Forex Trading for XAUUSD, EURUSD, GBPUSD & Major Pairs.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-amber-400" />
                <span>Smart Risk Control</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-amber-400" />
                <span>24/7 Automated Trading</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-amber-400" />
                <span>Lifetime Updates</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('pricing')}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-lg px-8 py-6 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all"
              >
                <Crown className="w-5 h-5 mr-2" />
                Get Lifetime Access - $200
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleDemoDownload}
                className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 font-semibold text-lg px-8 py-6"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-amber-500/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-amber-400">H1</div>
                <div className="text-sm text-slate-400">Optimized Timeframe</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-amber-500/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-amber-400">$200+</div>
                <div className="text-sm text-slate-400">Min. Balance</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-amber-500/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-amber-400">Grid</div>
                <div className="text-sm text-slate-400">Strategy Type</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-amber-500/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-amber-400">v1.5</div>
                <div className="text-sm text-slate-400">Latest Version</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30">
              <Zap className="w-4 h-4 mr-2 inline" />
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-amber-400">EL DORADO?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Advanced trading technology combined with intelligent risk management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-amber-500/20 backdrop-blur-sm hover:border-amber-500/40 transition-all hover:shadow-lg hover:shadow-amber-500/10">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-amber-400" />
                </div>
                <CardTitle className="text-white">Grid Trading System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">Advanced grid strategy with RSI and Moving Average filters for optimal entry and exit points.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-amber-500/20 backdrop-blur-sm hover:border-amber-500/40 transition-all hover:shadow-lg hover:shadow-amber-500/10">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-amber-400" />
                </div>
                <CardTitle className="text-white">Smart Risk Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">Built-in risk management with customizable stop loss, take profit, and position sizing.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-amber-500/20 backdrop-blur-sm hover:border-amber-500/40 transition-all hover:shadow-lg hover:shadow-amber-500/10">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-amber-400" />
                </div>
                <CardTitle className="text-white">Multi-Pair Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">Optimized for XAUUSD (Gold), EURUSD, GBPUSD, and all major forex pairs.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-amber-500/20 backdrop-blur-sm hover:border-amber-500/40 transition-all hover:shadow-lg hover:shadow-amber-500/10">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-amber-400" />
                </div>
                <CardTitle className="text-white">24/7 Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">Fully automated trading system that works around the clock without manual intervention.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-amber-500/20 backdrop-blur-sm hover:border-amber-500/40 transition-all hover:shadow-lg hover:shadow-amber-500/10">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-amber-400" />
                </div>
                <CardTitle className="text-white">H1 Optimized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">Specially optimized for H1 timeframe, but works effectively on all timeframes.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-amber-500/20 backdrop-blur-sm hover:border-amber-500/40 transition-all hover:shadow-lg hover:shadow-amber-500/10">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <CardTitle className="text-white">Preset Configurations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">Includes optimized .set files for XAUUSD, EURUSD, and GBPUSD for instant setup.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="py-24 bg-slate-900/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1651341050677-24dba59ce0fd" 
            alt="Performance"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30">
              <LineChart className="w-4 h-4 mr-2 inline" />
              Trading Performance
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for <span className="text-amber-400">Consistent Results</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Trusted by traders worldwide for reliable automated trading
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-slate-950/80 border-amber-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-amber-400" />
                    Recommended Setup
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Minimum Balance:</span>
                    <span className="text-white font-semibold">$200+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Recommended Balance:</span>
                    <span className="text-amber-400 font-semibold">$1,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Best Timeframe:</span>
                    <span className="text-white font-semibold">H1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Platform:</span>
                    <span className="text-white font-semibold">MetaTrader 4</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-950/80 border-amber-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-amber-400" />
                    Trading Pairs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-amber-500/20 text-amber-400">Primary</Badge>
                    <span className="text-white">XAUUSD (Gold)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-amber-500/20 text-amber-400">Primary</Badge>
                    <span className="text-white">EURUSD</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-amber-500/20 text-amber-400">Primary</Badge>
                    <span className="text-white">GBPUSD</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="border-slate-600 text-slate-400">Supported</Badge>
                    <span className="text-slate-300">All Major Pairs</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-950/80 border-amber-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Strategy Overview</CardTitle>
                <CardDescription className="text-slate-400">
                  How EL Dorado EA trades the markets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-400 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Grid System</h4>
                      <p className="text-slate-400">Places strategic buy and sell orders at predetermined price levels</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-400 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">RSI & MA Filters</h4>
                      <p className="text-slate-400">Uses technical indicators to confirm trend direction and entry timing</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-400 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Risk Management</h4>
                      <p className="text-slate-400">Automatically manages position sizes, stop losses, and take profits</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30">
              <Crown className="w-4 h-4 mr-2 inline" />
              Pricing Plans
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your <span className="text-amber-400">Plan</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Start with a free demo or unlock lifetime access
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Demo Version */}
            <Card className="bg-slate-900/50 border-amber-500/20 backdrop-blur-sm hover:border-amber-500/40 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl text-white">Demo Version</CardTitle>
                  <Badge variant="outline" className="border-slate-600 text-slate-400">Trial</Badge>
                </div>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">FREE</span>
                </div>
                <CardDescription className="text-slate-400">
                  Try before you buy - limited features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Basic EA functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Limited trading pairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Strategy testing access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-500">No preset .set files</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-500">No user guide</span>
                  </li>
                </ul>
                <Button 
                  className="w-full border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
                  variant="outline"
                  onClick={handleDemoDownload}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Demo
                </Button>
              </CardContent>
            </Card>

            {/* Lifetime Version */}
            <Card className="bg-gradient-to-br from-amber-500/10 via-slate-900/50 to-slate-900/50 border-amber-500/50 backdrop-blur-sm relative overflow-hidden shadow-xl shadow-amber-500/20">
              <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 px-4 py-1 text-sm font-bold">
                BEST VALUE
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl text-white">Lifetime Version</CardTitle>
                  <Badge className="bg-amber-500 text-slate-950 font-bold">Premium</Badge>
                </div>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-amber-400">$200</span>
                  <span className="text-slate-400 ml-2">one-time</span>
                </div>
                <CardDescription className="text-slate-300">
                  Full access with lifetime updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">EL Dorado v1.5 EA (.ex4) - Full Version</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Optimized .set files (XAUUSD, EURUSD, GBPUSD)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Complete user guide (.pdf)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white">All trading pairs supported</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Lifetime updates & support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Priority customer support</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-lg shadow-amber-500/30"
                  onClick={() => scrollToSection('contact')}
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Get Lifetime Access
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30">
                <Mail className="w-4 h-4 mr-2 inline" />
                Get In Touch
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contact <span className="text-amber-400">Us</span>
              </h2>
              <p className="text-slate-400 text-lg">
                Have questions? We're here to help you get started
              </p>
            </div>

            <Card className="bg-slate-950/80 border-amber-500/20 backdrop-blur-sm">
              <CardContent className="pt-6">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label className="text-white mb-2 block font-medium flex items-center gap-2">
                      <User className="w-4 h-4 text-amber-400" />
                      Your Name
                    </label>
                    <Input 
                      type="text"
                      placeholder="John Doe"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      required
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-white mb-2 block font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4 text-amber-400" />
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      placeholder="john@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-white mb-2 block font-medium flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-amber-400" />
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your trading needs..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      required
                      rows={5}
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-amber-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-amber-400" />
              <div>
                <h3 className="text-xl font-bold text-amber-400">EL DORADO</h3>
                <p className="text-sm text-slate-400">MT4 Expert Advisor</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-400">© 2024 EL DORADO. All rights reserved.</p>
              <p className="text-sm text-slate-500 mt-1">
                Trading involves risk. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
