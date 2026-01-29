import { profile } from '../data/profile';
import { Rocket } from 'lucide-react';

export default function Projects() {
    return (
        <section className="space-y-6">
            <div className="flex items-center gap-2 mb-6 border-b pb-2 border-slate-200">
                <Rocket className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-slate-900">Most Relevant Projects</h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {profile.projects.map((project, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
                        <p className="text-sm font-medium text-blue-600 mb-4">{project.role}</p>
                        <p className="text-slate-600 mb-4">{project.objective}</p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-2 self-center">Tools:</span>
                            {project.tools.map((tool, i) => (
                                <span key={i} className="text-xs px-2 py-1 bg-slate-50 text-slate-600 rounded">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
