import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Certifications from '../components/Certifications'
import Footer from '../components/Footer'


export default function Home(){
return (
<>
<Head>
<title>Moatez Ouaz — Data Science Portfolio</title>
<meta name="description" content="Portfolio — Moatez Ouaz | Data Science, ML, Voice Systems, Full-Stack" />
</Head>


<Header />


<main className="py-8">
<Hero />
<Skills />
<Experience />
<Projects />
<Certifications />
<Education />
</main>


<Footer />
</>
)
}