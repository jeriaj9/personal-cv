import { profile } from '../data/profile';
import { Briefcase } from 'lucide-react';

export default function Experience() {
    return (
        <section className="space-y-6">
            <div className="flex items-center gap-2 mb-6 border-b pb-2 border-slate-200">
                <Briefcase className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-slate-900">Experience</h2>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {profile.experience.map((job, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                        {/* Icon on timeline */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm text-slate-500">
                            {/* {job.period.split(' ')[0]} */}
                        </div>

                        {/* Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                                <h3 className="font-bold text-slate-800 text-lg">{job.role}</h3>
                                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                                    {job.period}
                                </span>
                            </div>
                            <div className="text-slate-600 font-medium mb-3">{job.company} — {job.location}</div>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">{job.description}</p>

                            <ul className="list-disc list-inside space-y-1 mb-4 text-sm text-slate-600 marker:text-blue-500">
                                {job.responsibilities.map((resp, i) => (
                                    <li key={i}>{resp}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {job.technologies.map((tech, i) => (
                                    <span key={i} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded border border-slate-200">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
