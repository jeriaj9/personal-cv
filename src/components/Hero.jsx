import { profile } from '../data/profile';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row gap-8 items-start justify-between animate-fade-in-down">
            <div className="flex-1 space-y-6">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                        {profile.name}
                    </h1>
                    <h2 className="text-xl md:text-2xl text-slate-600 mt-2 font-medium">
                        {profile.role}
                    </h2>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
                    {profile.summary}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                    {profile.email && (
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 transition-colors text-slate-700"
                        >
                            <Mail size={18} />
                            <span>Email</span>
                        </a>
                    )}
                    {profile.linkedin && (
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                            <Linkedin size={18} />
                            <span>LinkedIn</span>
                        </a>
                    )}
                    {profile.github && (
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                        >
                            <Github size={18} />
                            <span>GitHub</span>
                        </a>
                    )}
                    {/* Resume Download */}
                    <a
                        href="/Curriculum_Jerickson_English.pdf"
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                        <FileText size={18} />
                        <span>Download CV</span>
                    </a>
                </div>
            </div>

            {/* Optional: Add a placeholder avatar or just keep it text-centric if no image */}
            <div className="hidden md:block w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-10 blur-xl absolute right-0 top-0 -z-10"></div>
        </section>
    );
}
