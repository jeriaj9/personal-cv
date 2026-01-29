import { profile } from '../data/profile';
import { Rocket, ArrowUpRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <section className="space-y-8 relative">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20">
                    <Rocket className="text-white" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {profile.projects.map((project, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        key={index}
                        className="group relative h-full"
                    >
                        {/* Gradient Border Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                        {/* Card Content */}
                        <div className="relative h-full flex flex-col bg-white rounded-xl p-8 border border-slate-100 shadow-xl overflow-hidden group-hover:translate-y-[-4px] transition-transform duration-300">
                            {/* Decorative Circle */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 blur-2xl opacity-50"></div>

                            <div className="relative z-10 flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {project.name}
                                    </h3>
                                </div>

                                <p className="text-sm font-semibold text-purple-600 mb-3 tracking-wide uppercase">
                                    {project.role}
                                </p>

                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {project.objective}
                                </p>
                            </div>

                            <div className="relative z-10 pt-6 border-t border-slate-100 mt-auto">
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map((tool, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-semibold bg-slate-50 text-slate-600 rounded-lg border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
