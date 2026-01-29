import { profile } from '../data/profile';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education() {
    return (
        <section className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/20">
                    <GraduationCap className="text-white" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Certifications</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {profile.education.map((edu, index) => (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        key={index}
                        className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Award size={100} className="text-indigo-600 transform rotate-12 translate-x-10 -translate-y-10" />
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h3 className="font-bold text-slate-900 text-2xl mb-1 group-hover:text-indigo-600 transition-colors">{edu.degree}</h3>
                                <p className="text-slate-600 text-lg font-medium">{edu.school}</p>
                                <div className="flex items-center gap-2 mt-2 text-slate-500 text-sm">
                                    <span>📍</span>
                                    <span>{edu.location}</span>
                                </div>
                            </div>

                            <div className="md:text-right">
                                <span className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-bold text-sm border border-indigo-100">
                                    {edu.period}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
