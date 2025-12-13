import Image from 'next/image'
import { motion } from 'framer-motion'
import { PROFILE } from '../data/profile'


export default function Hero() {
return (
<section className="py-12">
<div className="container grid md:grid-cols-3 gap-8 items-center">
<div className="md:col-span-2">
<motion.h2 initial={{ y: 10, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ delay:0.1 }} className="text-3xl font-bold text-slate-900 dark:text-white">{PROFILE.name}</motion.h2>
<motion.p initial={{ y: 10, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ delay:0.2 }} className="mt-4 text-slate-700 dark:text-slate-300">{PROFILE.summary}</motion.p>


<div className="mt-6 flex flex-wrap gap-4">
<a href={`mailto:${PROFILE.email}`} className="px-4 py-2 border rounded border-gray-300 dark:border-gray-600 text-slate-700 dark:text-slate-300">{PROFILE.email}</a>
<a href={`tel:${PROFILE.phone}`} className="px-4 py-2 border rounded border-gray-300 dark:border-gray-600 text-slate-700 dark:text-slate-300">{PROFILE.phone}</a>
<a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded border-gray-300 dark:border-gray-600 text-slate-700 dark:text-slate-300">LinkedIn</a>
</div>
</div>
<div className="flex justify-center md:justify-end">
<motion.div whileHover={{ scale: 1.03 }} className="w-40 h-40 rounded-xl overflow-hidden shadow-lg">
<Image src="/assets/headshot.jpg" width={160} height={160} alt="Moatez headshot" />
</motion.div>
</div>
</div>
</section>
)
}
