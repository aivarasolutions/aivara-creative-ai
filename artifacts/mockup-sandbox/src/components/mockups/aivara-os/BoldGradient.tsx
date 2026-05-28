import React from "react";
import { 
  ArrowRight, Check, ChevronRight, Play, Server, Shield, 
  Users, BarChart3, Database, Workflow, Settings, Globe, 
  MessageSquare, Layers, Search, Bell, Box, MonitorSmartphone,
  PieChart, Activity
} from "lucide-react";
import "./_group.css";

export function BoldGradient() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans overflow-x-hidden relative">
      {/* Background Orbs */}
      <div className="bold-gradient-blob bg-pink-600 w-96 h-96 rounded-full top-[-100px] left-[-100px]" />
      <div className="bold-gradient-blob bg-teal-500 w-[500px] h-[500px] rounded-full top-[20%] right-[-200px]" />
      <div className="bold-gradient-blob bg-yellow-500 w-80 h-80 rounded-full bottom-[10%] left-[10%]" />

      {/* 1. Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/__mockup/images/aivara-logo.png" alt="Aivara Solutions" className="h-8" />
            <span className="font-bold text-xl tracking-tight hidden sm:block">AIVARA OS</span>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#platform" className="hover:text-white transition-colors">Platform</a>
            <a href="#modules" className="hover:text-white transition-colors">Modules</a>
            <a href="#industries" className="hover:text-white transition-colors">Industries</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#resources" className="hover:text-white transition-colors">Resources</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium hover:text-white transition-colors hidden sm:block">Sign In</button>
            <button className="bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-500 hover:opacity-90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)]">
              Book Demo
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20">
        {/* 2. Hero */}
        <section className="container mx-auto px-6 pt-12 pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
            Now in private beta
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
            The AI-Powered Operating System for <span className="bold-gradient-text">Modern Businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            Replace your fragmented software stack with one intelligent, unified platform. 
            Automate workflows, analyze data, and run your entire enterprise from a single dashboard.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(219,39,119,0.4)]">
              Book a Demo <ArrowRight size={18} />
            </button>
            <button className="w-full sm:w-auto glass-panel hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
              Explore Platform
            </button>
          </div>
          
          <div className="text-sm text-slate-500 font-medium mb-8 uppercase tracking-widest">Trusted by Enterprise Leaders</div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold font-serif">AURA LOGISTICS</span>
            <span className="text-xl font-bold tracking-tighter">NexusCorp</span>
            <span className="text-xl font-bold italic">Vanguard Ecom</span>
            <span className="text-xl font-bold">SYNERGY</span>
            <span className="text-xl font-bold tracking-widest">VERTEX</span>
          </div>

          {/* Inline Dashboard Preview */}
          <div className="mt-24 relative max-w-6xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-2xl glass-panel border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[600px] text-left">
              {/* Browser Header */}
              <div className="h-12 border-b border-white/5 bg-black/40 flex items-center px-4 gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 bg-white/5 rounded-md h-7 flex items-center px-3 text-xs text-slate-400 gap-2 mx-4">
                  <Globe size={12} /> aivara.os/dashboard
                </div>
              </div>
              
              {/* App Body */}
              <div className="flex flex-1 overflow-hidden bg-slate-900/50">
                {/* Sidebar */}
                <div className="w-64 border-r border-white/5 p-4 hidden md:flex flex-col gap-1">
                  <div className="flex items-center gap-2 px-2 py-3 mb-4">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-pink-500 to-teal-500 flex items-center justify-center font-bold">V</div>
                    <div>
                      <div className="text-sm font-semibold">Vanguard Ecom</div>
                      <div className="text-xs text-slate-400">Enterprise Plan</div>
                    </div>
                  </div>
                  {['Dashboard', 'Analytics', 'Customers', 'Operations', 'Finance'].map((item, i) => (
                    <div key={i} className={`px-3 py-2 rounded-lg text-sm flex items-center gap-3 ${i === 0 ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5'}`}>
                      {i === 0 ? <Activity size={16} className="text-teal-400" /> : <Box size={16} />}
                      {item}
                    </div>
                  ))}
                </div>
                
                {/* Main Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">Good morning, Sarah</h3>
                      <p className="text-slate-400 text-sm">Here's what's happening today.</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10"><Search size={16} /></div>
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10"><Bell size={16} /></div>
                    </div>
                  </div>
                  
                  {/* KPI Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-slate-400 text-sm mb-1">Total Revenue</div>
                      <div className="text-3xl font-bold">$124,500<span className="text-teal-400 text-sm ml-2 font-normal">+12.5%</span></div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 relative overflow-hidden">
                      <div className="absolute right-0 top-0 w-24 h-24 bg-pink-500/20 blur-2xl rounded-full"></div>
                      <div className="text-slate-400 text-sm mb-1">Active Workflows</div>
                      <div className="text-3xl font-bold">1,204</div>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-teal-500/20 to-pink-500/20 border border-teal-500/30">
                      <div className="text-teal-100 text-sm mb-1">AI Copilot Insights</div>
                      <div className="text-sm font-medium mt-2">Anomaly detected in supply chain routing. Recommend re-routing 3 shipments.</div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="h-64 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col">
                    <div className="text-sm font-medium mb-4 flex justify-between">
                      <span>Performance Overview</span>
                      <span className="text-slate-400 text-xs">Last 30 days</span>
                    </div>
                    <div className="flex-1 flex items-end gap-2 px-2">
                      {[40, 60, 45, 80, 55, 90, 70, 100, 85, 95].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-teal-500/80 to-pink-500/80 relative group" style={{ height: `${h}%` }}>
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-xs py-1 px-2 rounded hidden group-hover:block">{h}k</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Replace Your Stack */}
        <section className="container mx-auto px-6 py-24 border-t border-white/10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Replace 12 tools. <span className="bold-gradient-text">One platform.</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Stop paying for fragmented software and wasting time integrating them. Aivara OS unifies your entire business operations natively.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
            <div className="flex flex-wrap justify-center max-w-md gap-3">
              {['HubSpot', 'Slack', 'Monday', 'Notion', 'ClickUp', 'Zapier', 'QuickBooks'].map((tool, i) => (
                <div key={i} className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 line-through decoration-red-500/50 decoration-2 text-sm font-medium">
                  {tool}
                </div>
              ))}
            </div>
            <div className="text-slate-600 rotate-90 md:rotate-0"><ArrowRight size={32} /></div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-600 to-teal-500 p-[1px] mb-4 shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-teal-500/20"></div>
                  <img src="/__mockup/images/aivara-logo.png" alt="Aivara" className="h-10 relative z-10" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-teal-400 font-medium bg-teal-400/10 px-3 py-1 rounded-full text-sm">
                <Check size={16} /> Unified System
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto glass-panel rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-4 font-semibold text-slate-300">Feature</th>
                  <th className="p-4 font-semibold text-slate-500">Legacy Stack</th>
                  <th className="p-4 font-semibold text-white bg-gradient-to-b from-white/10 to-transparent">Aivara OS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Total Cost', old: '$2,400/mo', new: 'From $499/mo', hl: true },
                  { label: 'Setup Time', old: '3-6 months', new: 'Days', hl: false },
                  { label: 'AI-Native', old: 'Bolted-on', new: 'Core Architecture', hl: true },
                  { label: 'Data Silos', old: 'Scattered', new: 'Unified Graph', hl: false },
                  { label: 'Support', old: 'Multiple vendors', new: 'One dedicated team', hl: false }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="p-4 text-sm font-medium text-slate-300">{row.label}</td>
                    <td className="p-4 text-sm text-slate-500">{row.old}</td>
                    <td className={`p-4 text-sm font-semibold bg-white/[0.02] ${row.hl ? 'text-teal-400' : 'text-white'}`}>{row.new}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. 12 Modules Grid */}
        <section id="modules" className="container mx-auto px-6 py-24">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to scale</h2>
            <p className="text-slate-400">Activate the modules you need, when you need them.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, name: "AI CRM", desc: "Intelligent relationship management" },
              { icon: Workflow, name: "Operations Hub", desc: "Automate complex business logic" },
              { icon: Layers, name: "Project Management", desc: "Task tracking and resource allocation" },
              { icon: BarChart3, name: "Finance & Billing", desc: "Invoicing, expenses, and forecasting" },
              { icon: Globe, name: "Marketing Automation", desc: "Campaigns and lead generation" },
              { icon: MessageSquare, name: "Customer Support", desc: "Omnichannel ticketing and AI triage" },
              { icon: Users, name: "HR & People", desc: "Onboarding and employee lifecycle" },
              { icon: Box, name: "Inventory & Logistics", desc: "Supply chain visibility" },
              { icon: PieChart, name: "Analytics & BI", desc: "Custom dashboards and reports" },
              { icon: Database, name: "Document Intelligence", desc: "Extract data from unstructured files" },
              { icon: Settings, name: "Workflow Builder", desc: "No-code automation builder" },
              { icon: MonitorSmartphone, name: "Aivara Copilot", desc: "Your proactive AI business assistant" }
            ].map((mod, i) => (
              <div key={i} className="bold-gradient-border p-6 glass-panel rounded-xl group hover:-translate-y-1 transition-transform cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br from-pink-500/20 to-teal-500/20 transition-colors">
                  <mod.icon size={24} className="text-slate-400 group-hover:text-teal-400 transition-colors" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{mod.name}</h3>
                <p className="text-sm text-slate-400">{mod.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Live Dashboard Showcase */}
        <section className="py-24 bg-black/50 border-y border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-950 to-slate-950"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powered by Aivara OS</h2>
              <p className="text-slate-400">See how modern enterprises configure their platforms.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { img: "/__mockup/images/portfolio/site-aivara-portal.png", industry: "Corporate Operations" },
                { img: "/__mockup/images/portfolio/log-freightsync-lastmile.png", industry: "Logistics & Supply Chain" },
                { img: "/__mockup/images/portfolio/ai-ipm-apollo.png", industry: "Professional Services" },
                { img: "/__mockup/images/portfolio/site-richaf.png", industry: "E-Commerce" }
              ].map((item, i) => (
                <div key={i} className="group relative rounded-xl overflow-hidden border border-white/10 bg-slate-900">
                  <div className="h-8 bg-black/60 flex items-center px-4 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                    </div>
                  </div>
                  <div className="aspect-video relative overflow-hidden">
                    <img src={item.img} alt={item.industry} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <span className="text-white font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-sm border border-white/20">
                        {item.industry}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. White-Label */}
        <section className="container mx-auto px-6 py-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Your brand. <br/>Our platform.</h2>
              <p className="text-lg text-slate-400 mb-8">
                Aivara OS is fully white-labelable. Offer a premium, enterprise-grade portal to your clients under your own domain and brand identity.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom domain routing (app.yourcompany.com)",
                  "Upload your own logos and favicons",
                  "Match your brand color palette exactly",
                  "Configure custom pricing and billing modules"
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                      <Check size={14} />
                    </div>
                    <span className="text-slate-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-10 bg-gradient-to-tr from-pink-600/20 to-yellow-500/20 blur-3xl rounded-full"></div>
              
              <div className="relative">
                {/* Frame 1 */}
                <div className="rounded-xl border border-white/10 bg-slate-900 shadow-2xl relative z-10 w-[80%] ml-auto">
                  <div className="h-8 bg-black/40 border-b border-white/5 px-3 flex items-center"><Globe size={10} className="text-slate-500 mr-2"/> <span className="text-[10px] text-slate-500">app.aivara.os</span></div>
                  <div className="p-4 bg-slate-950">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-teal-500 rounded flex items-center justify-center"><img src="/__mockup/images/aivara-logo.png" className="w-4" alt="" /></div>
                      <div className="h-2 w-16 bg-white/20 rounded"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-white/5 rounded border border-white/5 border-l-2 border-l-pink-500"></div>
                      <div className="h-16 bg-white/5 rounded border border-white/5"></div>
                    </div>
                  </div>
                </div>
                
                {/* Frame 2 - offset */}
                <div className="rounded-xl border border-white/10 bg-slate-900 shadow-2xl absolute -bottom-10 -left-4 w-[80%] z-20">
                  <div className="h-8 bg-black/40 border-b border-white/5 px-3 flex items-center"><Globe size={10} className="text-slate-500 mr-2"/> <span className="text-[10px] text-slate-500">portal.acmelogistics.com</span></div>
                  <div className="p-4 bg-slate-50">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-blue-600 rounded"></div>
                      <div className="h-2 w-16 bg-slate-300 rounded"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-white rounded border border-slate-200 border-l-4 border-l-blue-600 shadow-sm"></div>
                      <div className="h-16 bg-white rounded border border-slate-200 shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Industries */}
        <section id="industries" className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Built for complex industries</h2>
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x hide-scrollbar">
              {[
                { name: "Logistics", desc: "Fleet management, routing, and supply chain automation." },
                { name: "E-Commerce", desc: "Multi-channel inventory, support, and fulfillment tracking." },
                { name: "Education", desc: "Student portals, course management, and billing." },
                { name: "Music & Media", desc: "Royalty splitting, asset management, and release scheduling." },
                { name: "Real Estate", desc: "Property portfolios, tenant portals, and maintenance." },
                { name: "Professional Services", desc: "Client billing, project tracking, and document intelligence." }
              ].map((ind, i) => (
                <div key={i} className="min-w-[280px] p-6 rounded-2xl bg-slate-900 border border-white/10 snap-center hover:border-teal-500/50 transition-colors cursor-pointer">
                  <h3 className="text-xl font-bold mb-2">{ind.name}</h3>
                  <p className="text-sm text-slate-400">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Social Proof */}
        <section className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
            {[
              { val: "$2.4B", label: "GMV Processed" },
              { val: "12k+", label: "Workflows Automated" },
              { val: "98%", label: "Enterprise Retention" },
              { val: "50+", label: "Enterprise Customers" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 border-r border-white/10 last:border-0">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-500 mb-2">{stat.val}</div>
                <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Aivara OS allowed us to deprecate 7 different SaaS tools within our first month. The integrated data model is game-changing.", author: "Marcus T.", role: "CEO, FreightSync Logistics" },
              { quote: "We configured a complete custom portal for our 500+ B2B clients in under two weeks. The white-label capabilities are unmatched.", author: "Elena R.", role: "COO, Vanguard Ecom" },
              { quote: "Managing royalty splits and release schedules used to take days. Now it's an automated workflow. Incredibly powerful platform.", author: "David K.", role: "Founder, SoundWave Label" }
            ].map((test, i) => (
              <div key={i} className="p-8 rounded-2xl glass-panel relative">
                <div className="text-4xl text-teal-500/20 absolute top-4 right-6 font-serif">"</div>
                <p className="text-slate-300 mb-6 relative z-10 leading-relaxed">"{test.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400">{test.author.charAt(0)}</div>
                  <div>
                    <div className="font-semibold text-sm">{test.author}</div>
                    <div className="text-xs text-slate-500">{test.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Enterprise CTA */}
        <section className="container mx-auto px-6 py-12">
          <div className="relative rounded-3xl overflow-hidden px-8 py-20 text-center border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-pink-900/30"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Run your entire business on Aivara OS</h2>
              <p className="text-lg text-slate-300 mb-10">Join the forward-thinking enterprises consolidating their operations into one intelligent platform.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                  Book Enterprise Demo
                </button>
                <button className="glass-panel px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
                  Talk to Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 10. Footer */}
      <footer className="border-t border-white/10 bg-slate-950 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
            <div className="col-span-2">
              <img src="/__mockup/images/aivara-logo.png" alt="Aivara Solutions" className="h-8 mb-4 opacity-80" />
              <p className="text-slate-400 text-sm mb-6 max-w-xs">
                The AI-Powered Operating System for Modern Businesses. Unify, automate, and scale.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Platform</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Architecture</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">White-Label</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Modules</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-teal-400 transition-colors">CRM</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Operations</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Finance</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Copilot</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Industries</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Logistics</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">E-Commerce</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Real Estate</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Agencies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-teal-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Aivara Solutions. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
