import { profile } from '../data/profile';
import { Cpu, Code2, Database, Wrench, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
    languages: Code2,
    frameworks: Layout,
    databases: Database,
    tools: Wrench
};

export default function Skills() {
    return (
        <section className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-purple-600 rounded-xl shadow-lg shadow-purple-600/20">
                    <Cpu className="text-white" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Skills</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(profile.skills).map(([category, items], index) => {
                    const Icon = iconMap[category.toLowerCase()] || Cpu;
                    return (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            key={category}
                            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-3">
                                <Icon className="text-purple-600" size={20} />
                                <h3 className="capitalize font-bold text-slate-800 text-lg">
                                    {category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {items.map((skill, idx) => (
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        key={idx}
                                        className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl text-sm font-semibold hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700 transition-colors cursor-default shadow-sm"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
