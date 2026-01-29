import { profile } from '../data/profile';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
    return (
        <section className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-emerald-600 rounded-xl shadow-lg shadow-emerald-600/20">
                    <Briefcase className="text-white" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Experience</span>
                </h2>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-teal-500 before:to-transparent">
                {profile.experience.map((job, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        key={index}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >

                        {/* Timeline Dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-8 border-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm text-slate-500">
                        </div>

                        {/* Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
                            {/* Arrow */}
                            <div className="absolute top-6 -left-2 md:group-even:-left-2 md:group-odd:-right-2 w-4 h-4 bg-white rotate-45 border-l border-b border-slate-100 md:group-odd:border-l-0 md:group-odd:border-b-0 md:group-odd:border-r md:group-odd:border-t shadow-sm hidden md:block"></div>

                            <div className="flex flex-col mb-4">
                                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                    <h3 className="font-bold text-slate-900 text-xl">{job.role}</h3>
                                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                                        <Calendar size={12} />
                                        {job.period}
                                    </span>
                                </div>
                                <div className="text-slate-600 font-medium">{job.company} — {job.location}</div>
                            </div>

                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">{job.description}</p>

                            <ul className="space-y-2 mb-5">
                                {job.responsibilities.map((resp, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-slate-600">
                                        <span className="text-emerald-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                                {job.technologies.map((tech, i) => (
                                    <span key={i} className="text-[10px] font-bold px-2 py-1 bg-slate-50 text-slate-500 rounded uppercase tracking-wider">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
