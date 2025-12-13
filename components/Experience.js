import { motion } from 'framer-motion'
import { PROFILE } from '../data/profile'


export default function Experience(){
return (
<section id="experience" className="py-10">
<div className="container">
<h3 className="text-2xl font-semibold">Professional Experience</h3>
<div className="mt-6 space-y-6">
{PROFILE.experience.map((exp, idx)=> (
<motion.div key={idx} initial={{ y: 10, opacity: 0 }} animate={{ y:0, opacity:1 }}>
<div className="flex justify-between">
<div>
<h4 className="font-medium text-slate-900 dark:text-white">{exp.role} — <span className="font-normal">{exp.employer}</span></h4>
<p className="text-sm text-slate-600 dark:text-slate-400">{exp.start} — {exp.end}</p>
</div>
</div>
<ul className="mt-2 list-disc ml-5 text-slate-700 dark:text-slate-300">
{exp.bullets.map((b,i)=> <li key={i}>{b}</li>)}
</ul>
</motion.div>
))}
</div>
</div>
</section>
)
}