import { motion } from 'framer-motion'
import { PROFILE } from '../data/profile'


export default function Certifications(){
return (
<section id="certifications" className="py-10">
<div className="container">
<h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Certifications & Badges</h3>
<div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
{PROFILE.certifications.map((c, i)=> (
<motion.a 
key={i} 
whileHover={{ scale:1.05 }} 
href={c.link} 
target="_blank" 
rel="noreferrer" 
className="group relative flex flex-col items-center justify-center p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300"
>
{c.badgeUrl ? (
<img src={c.badgeUrl} alt={c.title} className="w-24 h-24 object-contain mb-3" />
) : (
<div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-3 text-white font-bold text-2xl">
{c.issuer.charAt(0)}
</div>
)}
<div className="text-center">
<div className="font-semibold text-slate-900 dark:text-white text-sm">{c.title}</div>
<div className="text-xs text-slate-600 dark:text-slate-400 mt-1">{c.issuer}</div>
{c.date && <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">{c.date}</div>}
</div>
<div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-blue-500/10 transition-opacity duration-300"></div>
</motion.a>
))}
</div>
</div>
</section>
)
}