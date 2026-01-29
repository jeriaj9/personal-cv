import { profile } from '../data/profile';
import { GraduationCap } from 'lucide-react';

export default function Education() {
    return (
        <section className="space-y-6">
            <div className="flex items-center gap-2 mb-6 border-b pb-2 border-slate-200">
                <GraduationCap className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-slate-900">Education</h2>
            </div>

            <div className="space-y-4">
                {profile.education.map((edu, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-center justify-between bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">{edu.degree}</h3>
                            <p className="text-slate-600">{edu.school}</p>
                            <p className="text-slate-500 text-sm mt-1">{edu.location}</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <span className="inline-block px-4 py-1 bg-slate-100 text-slate-600 rounded-full font-medium text-sm">
                                {edu.period}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
