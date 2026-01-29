import { profile } from '../data/profile';
import { Cpu } from 'lucide-react';

export default function Skills() {
    return (
        <section className="space-y-6">
            <div className="flex items-center gap-2 mb-6 border-b pb-2 border-slate-200">
                <Cpu className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-slate-900">Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(profile.skills).map(([category, items]) => (
                    <div key={category} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h3 className="capitalize font-bold text-slate-800 mb-4 text-lg border-b border-slate-100 pb-2">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
