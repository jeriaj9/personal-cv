import { profile } from '../data/profile';
import { Mail, Linkedin, Github, FileText, Bell, Brain, Palette, Layout, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-[600px] flex flex-col justify-center items-center py-12 lg:py-20 overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full bg-slate-50 opacity-50 -z-20"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl relative z-10 items-center">

                {/* Left Column: About Card */}
                <div className="lg:col-span-3 flex flex-col justify-center items-center lg:items-end space-y-6 order-3 lg:order-1 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl w-full max-w-sm relative border border-white"
                    >
                        <div className="absolute -top-4 -left-4 bg-amber-400 p-2 rounded-2xl shadow-lg rotate-12">
                            <Bell className="text-white w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">About Me</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            {profile.summary}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                        {/* Skill Chips */}
                        <div className="bg-rose-100 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-2 hover:scale-105 transition-transform">
                            <Brain className="text-rose-500 w-5 h-5" />
                            <span className="text-[10px] font-bold text-rose-800 uppercase tracking-wide">Problem Solver</span>
                        </div>
                        <div className="bg-violet-100 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-2 hover:scale-105 transition-transform">
                            <Palette className="text-violet-500 w-5 h-5" />
                            <span className="text-[10px] font-bold text-violet-800 uppercase tracking-wide">Creative</span>
                        </div>
                        <div className="bg-slate-800 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-2 hover:scale-105 transition-transform text-white">
                            <Layout className="w-5 h-5" />
                            <span className="text-[10px] font-bold uppercase tracking-wide">Structured</span>
                        </div>
                        <div className="bg-emerald-100 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-2 hover:scale-105 transition-transform">
                            <Search className="text-emerald-500 w-5 h-5" />
                            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide">Detail Oriented</span>
                        </div>
                    </div>
                </div>

                {/* Center Column: Image */}
                <div className="lg:col-span-6 relative flex justify-center items-end order-2 lg:order-2 h-[300px] sm:h-[400px] lg:h-[500px] w-full">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 w-full h-full flex items-end justify-center"
                    >
                        <div className="relative w-[280px] sm:w-[350px] lg:w-[400px]">
                            <img
                                src="/profile.jpg"
                                alt={profile.name}
                                className="w-full h-auto object-cover drop-shadow-2xl mask-image-b rounded-b-none"
                                style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Name & Details */}
                <div className="lg:col-span-3 flex flex-col justify-center items-center lg:items-start space-y-6 order-1 lg:order-3 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center lg:text-left"
                    >
                        <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                                <span className="text-slate-600">👤</span>
                            </div>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tighter">
                            {profile.name.split(' ')[0]} <br />
                            <span className="text-slate-700">{profile.name.split(' ')[1]}</span>
                        </h1>
                        <p className="text-lg text-slate-500 font-medium mt-4 tracking-widest uppercase">
                            {profile.role}
                        </p>
                        <p className="text-sm text-slate-400 mt-1">Santo Domingo, DR</p>
                    </motion.div>

                    <div className="flex gap-4">
                        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href={`mailto:${profile.email}`} className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition-colors">
                            <Mail size={20} />
                        </a>
                        <a href={profile.github} target="_blank" rel="noreferrer" className="p-3 bg-slate-100 text-slate-900 rounded-xl hover:bg-slate-200 transition-colors">
                            <Github size={20} />
                        </a>
                    </div>

                    <a
                        href="/Curriculum_Jerickson_English.pdf"
                        download
                        className="flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-xl shadow-lg hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
                    >
                        <FileText size={18} />
                        <span className="font-semibold">Download CV</span>
                    </a>

                </div>
            </div>
        </section>
    );
}
