
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, GraduationCap, Sparkles, Users, Globe, Laptop,
  CheckCircle2, ChevronRight, Star, Calendar, Award, Clock,
  Menu, X, LayoutDashboard, Brain, BarChart3, Lightbulb,
  TreePine, Zap, ArrowRight, PlayCircle, ShieldCheck, Target,
  TrendingUp, Search, Layers, PieChart, MousePointer2, User, Bell, BookMarked, Plus
} from "lucide-react";
export default function LandingPage() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDemoTab, setActiveDemoTab] = useState("analytics");
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };
  const pricing = [
    {
      name: "Freemium",
      price: "0",
      desc: "Essentials for every student",
      features: ["Daily Study Roadmap", "Community Access", "Limited AI Summaries", "Public Study Groups"],
      button: "Start for Free",
      highlight: false
    },
    {
      name: "Premium",
      price: "1,499",
      desc: "The complete AI powerhouse",
      features: ["Unlimited AI Flashcards", "Predictive Board Mockups", "1-on-1 AI Mentorship", "Detailed Parent Reports"],
      button: "Upgrade to Premium",
      highlight: true
    },
    {
      name: "Institute",
      price: "Custom",
      desc: "For schools and academies",
      features: ["White-label Dashboard", "Bulk Student Analytics", "Teacher Assignment Portal", "LMS Integration"],
      button: "Contact Sales",
      highlight: false
    }
  ];
  const features = [
    { icon: Brain, title: "Smart Adaptive Learning", desc: "Our neural engine maps your knowledge gaps and adjusts lessons in real-time." },
    { icon: BarChart3, title: "Visual Progress Tracking", desc: "Data-driven insights into your performance across various subjects." },
    { icon: Target, title: "Curriculum Sync", desc: "Content aligned with FBISE, Sindh, and Punjab Board standards for 2026." },
    { icon: Users, title: "Peer Learning Community", desc: "Connect with high-achievers from Karachi to Islamabad in safe study clusters." },
    { icon: ShieldCheck, title: "Parental Transparency", desc: "Automated progress summaries sent directly to parents to ensure peace of mind." },
    { icon: Sparkles, title: "AI Study Tools", desc: "Convert 2-hour lectures into 5-minute actionable summaries and quiz sets." },
  ];
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-blue-100 selection:text-blue-900">
     
      {/* ── Navigation ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-100 py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
              <TreePine className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">EdTeck<span className="text-blue-600">.ai</span></span>
          </motion.div>
          <nav className="hidden lg:flex items-center gap-8">
            {["Home", "About Us", "Our Features", "How It Works", "Testimonials", "Pricing"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                className="text-[13px] font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-[13px] font-bold text-slate-700 hover:text-blue-600 transition-colors" onClick={() => router.push("/login")}>Log in</button>
            <button onClick={() => scrollToSection('get-demo')} className="text-[13px] font-bold px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md shadow-blue-100">Get Demo</button>
          </div>
          <button className="lg:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      {/* ── IMPROVED HERO SECTION ── */}
      <section id="home" className="pt-24 pb-12 lg:pt-40 lg:pb-24 overflow-hidden relative">
        {/* Advanced Background Decorations */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.4, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[120px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        </div>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
           
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[12px] font-bold uppercase tracking-wider mb-8 shadow-sm">
                <Sparkles size={14} className="text-blue-500" />
                <span>Welcome to Edteck.ai</span>
              </div>
             
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1] tracking-tight mb-8">
                Learn Smarter. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  Grow Stronger.
                </span>
              </h1>
             
              <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
                Pakistan's first adaptive learning ecosystem. An intelligent system that understands students, content and teaching methods to support real learning.
              </p>
             
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="group w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-blue-200 text-sm">
                  Start Learning Free
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2 text-sm">
                  <PlayCircle size={18} /> Watch Success Stories
                </button>
              </div>
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 grayscale opacity-60">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Trusted By</span>
                <div className="flex gap-4 font-black text-slate-500 text-sm">
                   <span>FBISE</span>
                   <span>PUNJAB BOARD</span>
                   <span>SINDH BOARD</span>
                </div>
              </div>
            </motion.div>
            {/* Right Visual (Bento Style Hero) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative z-10 grid grid-cols-12 gap-4">
                {/* Main Dashboard Card */}
                <div className="col-span-12 rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-2xl p-2 overflow-hidden transform hover:-rotate-1 transition-transform duration-500">
                  <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-white">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                      </div>
                      <div className="h-4 w-32 bg-slate-100 rounded-full" />
                      <div className="w-6 h-6 rounded-full bg-blue-100" />
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=1000"
                      alt="Student Dashboard"
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                </div>
                {/* Floating AI Insight */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-4 md:right-0 bg-white p-4 rounded-2xl shadow-xl border border-blue-50 flex items-center gap-4 z-20"
                >
                  <div className="bg-blue-600 p-2.5 rounded-xl text-white shadow-lg shadow-blue-200">
                    <Zap size={20} fill="currentColor"/>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">AI Prediction</p>
                    <p className="text-sm font-black text-slate-800">Exam Ready: 94%</p>
                  </div>
                </motion.div>
                {/* Floating Achievement Card */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-8 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-20"
                >
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-white" />
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Join 67k+ Students</p>
                    <div className="flex text-amber-400">
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Decorative Circle behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-50 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>
      {/* ── About Us ── */}
      <section id="about-us" className="py-12 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-8">
                 <div className="h-48 rounded-3xl overflow-hidden relative shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/8423404/pexels-photo-8423404.jpeg?auto=compress&cs=tinysrgb&w=400"
                    className="object-cover h-full w-full opacity-60"
                    alt="Students learning in classroom"
                  />
                </div>

                  <div className="h-32 rounded-3xl bg-slate-200 overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400" className="object-cover h-full w-full" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-32 rounded-3xl bg-slate-200 overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400" className="object-cover h-full w-full" />
                  </div>
                  <div className="h-48 rounded-3xl bg-indigo-100 overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" className="object-cover h-full w-full" />
                  </div>
                </div>
             </div>
             <div>
                <p className="text-blue-600 font-bold text-[12px] uppercase tracking-[3px] mb-4">Our Mission</p>
                <h2 className="text-3xl font-black text-slate-900 mb-6 leading-tight">Masters of Consistency <br/>and Academic Quality.</h2>
                <p className="text-[15px] text-slate-500 leading-relaxed mb-8">
                  We started EdTeck.ai with a single goal: to stop students from feeling overwhelmed by 20th-century learning methods. Our tree-inspired philosophy ensures that every student develops deep roots in fundamentals while branching out into complex problem-solving.
                </p>
                <div className="grid grid-cols-2 gap-6">
                   <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <p className="text-3xl font-black text-blue-600">67,320+</p>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">Happy Students</p>
                   </div>
                   <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <p className="text-3xl font-black text-blue-600">4.9/5</p>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">Rating Score</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
      {/* ── Interactive Dashboard Demo ── */}
<section id="get-demo" className="py-16 bg-slate-50/50">
  <div className="container mx-auto px-6">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Experience the Future of Learning</h2>
      <p className="text-slate-500 text-lg">Take a peek inside the most intuitive student ecosystem designed for Pakistani boards.</p>
    </div>

    {/* Main Dashboard Container */}
    <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden max-w-6xl mx-auto flex flex-col md:flex-row h-[700px]">
      
      {/* ── Sidebar (Refined) ── */}
      <div className="w-full md:w-64 bg-white border-r border-slate-100 p-8 flex flex-col gap-10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <TreePine size={20} />
          </div>
          <span className="font-black text-xl tracking-tighter text-slate-800">Edteck.ai</span>
        </div>

        <nav className="space-y-2">
          {[
            { name: 'Dashboard', icon: <LayoutDashboard size={18} />, id: 'dashboard' },
            { name: 'My Courses', icon: <BookOpen size={18} />, id: 'courses' },
            { name: 'Schedule', icon: <Calendar size={18} />, id: 'schedule' },
            { name: 'Grades', icon: <Award size={18} />, id: 'grades' },
            { name: 'Profile', icon: <User size={18} />, id: 'profile' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveDemoTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all ${
                activeDemoTab === item.id 
      
