import React from 'react';
import { 
  CheckCircle2, ChevronRight, BarChart3, Users, 
  Briefcase, DollarSign, Mail, MessageSquare, 
  Boxes, LayoutGrid, FileText, Settings, Sparkles, 
  ArrowRight, Globe, Lock, Zap, Shield, Menu,
  Package, GraduationCap, Music, Home, Coffee, Check
} from 'lucide-react';
import './_enterprisecalm.css';

export function EnterpriseCalm() {
  return (
    <div className="enterprise-calm-wrapper min-h-screen relative overflow-hidden selection:bg-[#14b8a6] selection:text-white">
      {/* Background Orbs */}
      <div className="enterprise-calm-glow top-0 left-[-200px]" />
      <div className="enterprise-calm-glow enterprise-calm-glow-pink top-[20%] right-[-100px]" />
      <div className="enterprise-calm-glow enterprise-calm-glow-yellow bottom-[10%] left-[20%]" />

      {/* 1. Sticky Header */}
      <header className="fixed top-0 w-full z-50 enterprise-calm-glass transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2">
              <img src="/__mockup/images/aivara-logo.png" alt="Aivara Solutions" className="h-8 object-contain" onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <span className="hidden font-semibold tracking-wide text-white">AIVARA OS</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
              <a href="#" className="hover:text-white transition-colors">Platform</a>
              <a href="#" className="hover:text-white transition-colors">Modules</a>
              <a href="#" className="hover:text-white transition-colors">Industries</a>
              <a href="#" className="hover:text-white transition-colors">Pricing</a>
              <a href="#" className="hover:text-white transition-colors">Resources</a>
            </nav>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <button className="text-zinc-300 hover:text-white transition-colors px-3 py-2">Sign In</button>
            <button className="bg-white text-black hover:bg-zinc-200 transition-colors px-4 py-2 rounded-md font-medium flex items-center gap-2">
              Book Demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <button className="md:hidden text-zinc-300">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="pt-32 pb-24 relative z-10">
        
        {/* 2. Hero Section */}
        <section className="max-w-7xl mx-auto px-6 text-center mb-32 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse" />
            Now in private beta
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-tight mb-6 enterprise-calm-gradient-text">
            The AI-Powered Operating System for Modern Businesses
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10">
            Unify your entire workflow. One intelligent platform to replace your fragmented SaaS stack, built for speed, scale, and serious enterprise teams.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <button className="bg-white text-black hover:bg-zinc-200 transition-colors px-6 py-3 rounded-md font-medium flex items-center gap-2 w-full sm:w-auto justify-center">
              Book a Demo
            </button>
            <button className="enterprise-calm-card text-white hover:bg-white/5 transition-colors px-6 py-3 rounded-md font-medium flex items-center gap-2 w-full sm:w-auto justify-center">
              Explore Platform
            </button>
          </div>

          <div className="w-full max-w-6xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#14b8a6]/20 via-[#db2777]/20 to-[#facc15]/20 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative rounded-xl border border-zinc-800 bg-[#0a0a0c] overflow-hidden shadow-2xl">
              {/* Fake Window Header */}
              <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                </div>
                <div className="mx-auto flex items-center gap-2 px-3 py-1 bg-zinc-950 rounded text-xs text-zinc-500 font-mono">
                  <Lock className="w-3 h-3" />
                  os.aivara.com/dashboard
                </div>
              </div>
              {/* Dashboard Layout */}
              <div className="flex h-[400px] md:h-[600px] text-left">
                {/* Sidebar */}
                <div className="w-16 md:w-64 border-r border-zinc-800 bg-zinc-950 p-4 hidden sm:flex flex-col gap-6">
                  <div className="flex items-center gap-3 px-2">
                    <div className="w-6 h-6 rounded bg-[#14b8a6] flex items-center justify-center text-black font-bold text-xs">A</div>
                    <span className="font-medium hidden md:block">Acme Corp</span>
                  </div>
                  <div className="space-y-1">
                    {[ 
                      { i: <LayoutGrid size={16}/>, l: 'Overview', active: true },
                      { i: <Users size={16}/>, l: 'Customers' },
                      { i: <DollarSign size={16}/>, l: 'Finance' },
                      { i: <BarChart3 size={16}/>, l: 'Analytics' },
                      { i: <Settings size={16}/>, l: 'Settings' }
                    ].map((item, idx) => (
                      <div key={idx} className={`flex items-center gap-3 px-2 py-2 rounded-md text-sm ${item.active ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-900'}`}>
                        {item.i}
                        <span className="hidden md:block">{item.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Main Content */}
                <div className="flex-1 p-6 bg-[#0a0a0c] overflow-hidden flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-medium">Overview</h3>
                      <p className="text-sm text-zinc-500">Welcome back, Sarah. Here's what's happening today.</p>
                    </div>
                    <button className="px-3 py-1.5 bg-[#14b8a6]/10 text-[#14b8a6] border border-[#14b8a6]/20 rounded text-sm flex items-center gap-2">
                      <Sparkles size={14} /> AI Copilot
                    </button>
                  </div>
                  {/* KPI Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { l: 'Total Revenue', v: '$124,563', c: '+14.5%', p: true },
                      { l: 'Active Users', v: '2,845', c: '+5.2%', p: true },
                      { l: 'Churn Rate', v: '1.2%', c: '-0.4%', p: true },
                      { l: 'Avg Resolution', v: '2.4h', c: '+1.1h', p: false }
                    ].map((k, i) => (
                      <div key={i} className="enterprise-calm-card p-4 rounded-lg">
                        <div className="text-xs text-zinc-500 mb-2">{k.l}</div>
                        <div className="text-2xl font-semibold mb-1">{k.v}</div>
                        <div className={`text-xs ${k.p ? 'text-emerald-500' : 'text-red-500'}`}>{k.c} from last month</div>
                      </div>
                    ))}
                  </div>
                  {/* Chart Area Fake */}
                  <div className="enterprise-calm-card flex-1 rounded-lg border border-zinc-800 p-4 flex flex-col relative overflow-hidden">
                    <div className="text-sm font-medium mb-4">Revenue Growth</div>
                    <div className="flex-1 flex items-end gap-2 px-4 pb-2 mt-4 opacity-50">
                       {[40, 60, 45, 80, 55, 90, 75, 100, 85, 110].map((h, i) => (
                         <div key={i} className="flex-1 bg-gradient-to-t from-[#14b8a6]/20 to-[#14b8a6] rounded-t-sm" style={{ height: `${h}%` }}></div>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-zinc-800/50 w-full">
            <p className="text-sm text-zinc-500 mb-6">TRUSTED BY INNOVATIVE ENTERPRISES</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-zinc-400 font-semibold tracking-wider text-sm">
              <span>NEXUS</span>
              <span>SYNTHESIS</span>
              <span>AEROLITH</span>
              <span>LUMINA</span>
              <span>VORTEX</span>
              <span>QUANTUM</span>
            </div>
          </div>
        </section>

        {/* 3. Replace Your Stack */}
        <section className="max-w-5xl mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Replace 12 tools. One platform.</h2>
            <p className="text-zinc-400 text-lg">Stop paying for disconnected subscriptions. Aivara OS unifies your data and workflows.</p>
          </div>

          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
              {['HubSpot', 'Slack', 'Monday', 'Notion', 'ClickUp', 'Zapier', 'QuickBooks', 'Salesforce'].map(tool => (
                <div key={tool} className="px-4 py-2 enterprise-calm-card rounded-md text-zinc-500 font-medium text-sm enterprise-calm-strike">
                  {tool}
                </div>
              ))}
            </div>
            <ArrowRight className="w-8 h-8 text-zinc-600 rotate-90 md:rotate-0" />
            <div className="flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-zinc-700 rounded-lg shadow-[0_0_30px_rgba(20,184,166,0.15)]">
              <img src="/__mockup/images/aivara-logo.png" className="h-6" alt="Aivara" onError={(e) => e.currentTarget.style.display='none'} />
              <span className="font-bold text-lg">Aivara OS</span>
              <CheckCircle2 className="w-5 h-5 text-[#14b8a6] ml-2" />
            </div>
          </div>

          <div className="enterprise-calm-card rounded-xl overflow-hidden border border-zinc-800">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-zinc-900/50">
                  <th className="p-4 font-medium text-zinc-400">Capability</th>
                  <th className="p-4 font-medium text-white">Aivara OS</th>
                  <th className="p-4 font-medium text-zinc-500">Legacy Stack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {[
                  ['Monthly Cost', 'Fixed enterprise tier', 'Varies wildly ($10k+)'],
                  ['Setup Time', 'Days', 'Months'],
                  ['AI-Native', 'Core architecture', 'Bolted-on features'],
                  ['Unified Data', 'Single source of truth', 'Siloed databases'],
                  ['Support', 'Dedicated account manager', 'Ticketing queues']
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-zinc-900/30 transition-colors">
                    <td className="p-4 text-zinc-300">{row[0]}</td>
                    <td className="p-4 text-[#14b8a6] font-medium flex items-center gap-2"><Check size={14}/> {row[1]}</td>
                    <td className="p-4 text-zinc-500">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. 12 Modules Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything you need to operate</h2>
            <p className="text-zinc-400">12 enterprise-grade modules integrated perfectly from day one.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { i: <Users/>, n: 'AI CRM', d: 'Intelligent relationship management.' },
              { i: <Settings/>, n: 'Operations Hub', d: 'Centralize daily execution.' },
              { i: <Briefcase/>, n: 'Project Management', d: 'Track complex deliverables.' },
              { i: <DollarSign/>, n: 'Finance & Billing', d: 'Automated invoicing and ledgers.' },
              { i: <Mail/>, n: 'Marketing Automation', d: 'AI-driven campaign execution.' },
              { i: <MessageSquare/>, n: 'Customer Support', d: 'Omnichannel resolution.' },
              { i: <Users/>, n: 'HR & People', d: 'Onboarding and team management.' },
              { i: <Package/>, n: 'Inventory & Logistics', d: 'Real-time supply tracking.' },
              { i: <BarChart3/>, n: 'Analytics & BI', d: 'Custom dashboards and reporting.' },
              { i: <FileText/>, n: 'Document Intelligence', d: 'Automated extraction and filing.' },
              { i: <Zap/>, n: 'Workflow Builder', d: 'No-code process automation.' },
              { i: <Sparkles/>, n: 'Aivara Copilot', d: 'Your personal AI assistant.' }
            ].map((mod, i) => (
              <div key={i} className="enterprise-calm-card p-6 rounded-xl hover:bg-zinc-900 transition-colors group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-4 group-hover:text-[#14b8a6] transition-colors">
                  {React.cloneElement(mod.i, { size: 20 })}
                </div>
                <h3 className="font-semibold text-zinc-100 mb-2">{mod.n}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{mod.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Live Dashboard Showcase */}
        <section className="w-full bg-zinc-950 py-32 mb-32 border-y border-zinc-900">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-3xl font-bold mb-4">Powered by Aivara OS</h2>
            <p className="text-zinc-400">See how real businesses deploy their custom instances.</p>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-8 px-6 snap-x hide-scrollbar">
            {[
              { img: '/__mockup/images/portfolio/site-aivara-portal.png', title: 'Internal Portal', industry: 'Professional Services' },
              { img: '/__mockup/images/portfolio/log-freightsync-lastmile.png', title: 'Dispatch Dashboard', industry: 'Logistics' },
              { img: '/__mockup/images/portfolio/ai-ipm-apollo.png', title: 'Property Management', industry: 'Real Estate' },
              { img: '/__mockup/images/portfolio/site-richaf.png', title: 'E-commerce Ops', industry: 'Retail' }
            ].map((item, i) => (
              <div key={i} className="min-w-[85vw] md:min-w-[600px] snap-center">
                <div className="enterprise-calm-card rounded-xl p-2 border border-zinc-800 mb-4 bg-zinc-900/50">
                   <div className="h-6 flex items-center px-2 mb-2">
                     <div className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-zinc-700"></div><div className="w-2 h-2 rounded-full bg-zinc-700"></div><div className="w-2 h-2 rounded-full bg-zinc-700"></div></div>
                   </div>
                   <div className="rounded-md overflow-hidden bg-black aspect-video relative">
                     <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                   </div>
                </div>
                <div className="flex justify-between items-center px-2">
                  <h4 className="font-medium text-zinc-200">{item.title}</h4>
                  <span className="text-xs text-zinc-500 bg-zinc-900 px-2 py-1 rounded">{item.industry}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. White-Label */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Your brand. Our platform.</h2>
              <p className="text-zinc-400 text-lg mb-8">
                Aivara OS is fully white-label ready. Deploy a world-class software experience to your team and clients under your own domain and identity.
              </p>
              <ul className="space-y-4">
                {[
                  'Custom domains and email routing',
                  'Your logo and brand colors injected everywhere',
                  'Customized navigation and module visibility',
                  'Bring your own pricing plans'
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-[#facc15] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px]">
              <div className="absolute top-0 right-0 w-[80%] h-[300px] enterprise-calm-card rounded-lg border border-zinc-700 z-10 shadow-2xl p-4 flex flex-col transform translate-x-4 -translate-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded bg-[#db2777]"></div>
                  <span className="font-bold text-sm">Acme Logistics</span>
                </div>
                <div className="flex-1 bg-zinc-900/50 rounded border border-zinc-800"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-[80%] h-[300px] bg-zinc-950 rounded-lg border border-zinc-800 z-0 p-4 flex flex-col">
                <div className="flex items-center gap-2 mb-4 opacity-50">
                  <img src="/__mockup/images/aivara-logo.png" className="h-6" alt="Aivara" onError={(e) => e.currentTarget.style.display='none'} />
                  <span className="font-bold text-sm">Aivara OS</span>
                </div>
                <div className="flex-1 bg-zinc-900 rounded border border-zinc-800 opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Industries */}
        <section className="mb-32">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-3xl font-bold">Built for complex operations</h2>
          </div>
          <div className="flex overflow-hidden relative">
             <div className="enterprise-calm-marquee gap-6 px-6">
                {[
                  { i: <Package/>, n: 'Logistics', d: 'Automate dispatch, routing, and freight billing.' },
                  { i: <Globe/>, n: 'E-commerce', d: 'Unify inventory across multiple storefronts.' },
                  { i: <GraduationCap/>, n: 'Education', d: 'Manage student lifecycles and course delivery.' },
                  { i: <Music/>, n: 'Music & Media', d: 'Track royalties, splits, and catalog metadata.' },
                  { i: <Home/>, n: 'Real Estate', d: 'Property management and lease automation.' },
                  { i: <Briefcase/>, n: 'Professional Services', d: 'Time tracking, invoicing, and client portals.' }
                ].map((ind, i) => (
                  <div key={i} className="min-w-[300px] enterprise-calm-card p-6 rounded-xl border border-zinc-800">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-4 text-[#14b8a6]">
                      {ind.i}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{ind.n}</h3>
                    <p className="text-sm text-zinc-500">{ind.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 8. Social Proof */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { q: "Aivara OS replaced 7 disconnected tools we were paying for. The AI workflows save our dispatch team roughly 20 hours a week.", n: "David Chen", t: "CEO, FreightFlow Logistics" },
              { q: "The unified dashboard means I don't have to check four different platforms to see our daily revenue and customer support metrics.", n: "Sarah Jenkins", t: "COO, Apex Ecom" },
              { q: "Custom client portals built natively into our main operating system completely changed how we interact with our artists.", n: "Marcus Thorne", t: "Founder, SoundWave Label" }
            ].map((quote, i) => (
              <div key={i} className="enterprise-calm-card p-8 rounded-xl border border-zinc-800 flex flex-col justify-between">
                <p className="text-zinc-300 italic mb-8">"{quote.q}"</p>
                <div>
                  <div className="font-medium text-white">{quote.n}</div>
                  <div className="text-xs text-zinc-500">{quote.t}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-zinc-900 bg-zinc-950/50">
            {[
              { v: "$2.4B+", l: "GMV Processed" },
              { v: "12,000+", l: "Automations" },
              { v: "98%", l: "Retention Rate" },
              { v: "50+", l: "Enterprise Clients" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-white mb-2">{stat.v}</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Enterprise CTA */}
        <section className="max-w-5xl mx-auto px-6 mb-32">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#14b8a6]/10 to-transparent opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Run your entire business on Aivara OS</h2>
              <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                Join the private beta. Get white-glove onboarding and a dedicated engineering team to migrate your legacy data.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-black hover:bg-zinc-200 transition-colors px-8 py-4 rounded-md font-medium text-lg">
                  Book Enterprise Demo
                </button>
                <button className="enterprise-calm-card text-white hover:bg-white/5 transition-colors px-8 py-4 rounded-md font-medium text-lg border border-zinc-700">
                  Talk to Sales
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 10. Footer */}
      <footer className="border-t border-zinc-900 bg-black pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
            <div className="col-span-2 md:col-span-2">
              <img src="/__mockup/images/aivara-logo.png" alt="Aivara Solutions" className="h-8 mb-4 object-contain" onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <div className="hidden font-bold tracking-widest text-white mb-4">AIVARA OS</div>
              <p className="text-sm text-zinc-500 max-w-xs mb-6">
                The AI-powered operating system for modern businesses. Replace your stack, unify your data.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-zinc-100 mb-4 text-sm">Platform</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">Architecture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">White-label</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API & Webhooks</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-zinc-100 mb-4 text-sm">Modules</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">AI CRM</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Finance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Operations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Copilot</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-zinc-100 mb-4 text-sm">Industries</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">Logistics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Real Estate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Agencies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-zinc-100 mb-4 text-sm">Company</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-xs text-zinc-600">
            <p>© {new Date().getFullYear()} Aivara Solutions. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
