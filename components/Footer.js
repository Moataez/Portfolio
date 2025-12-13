import { PROFILE } from '../data/profile'


export default function Footer(){
return (
<footer className="py-8 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
<div className="container text-sm text-slate-600 dark:text-slate-400">
<div>© {new Date().getFullYear()} {PROFILE.name} — {PROFILE.title}</div>
<div className="mt-2">Contact: <a href={`mailto:${PROFILE.email}`} className="underline hover:no-underline dark:text-slate-300">{PROFILE.email}</a> • <a href={PROFILE.github} target="_blank" rel="noreferrer" className="underline hover:no-underline dark:text-slate-300">GitHub</a></div>
</div>
</footer>
)
}