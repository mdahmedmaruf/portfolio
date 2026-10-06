import portrait from '../assets/portrait-2.jpg'
import portrait4 from '../assets/portrait-4.jpg'
import process from '../assets/process.jpg'
import ContactBand from '../components/ContactBand'
import SectionLabel from '../components/SectionLabel'

export default function AboutPage() {
    return (
        <main className='inner-page'>
            <section className='about-hero'>
                <div>
                    <SectionLabel number='01'>About</SectionLabel>
                    <h1>
                        I care about the details that make software{' '}
                        <em>feel simple.</em>
                    </h1>
                </div>
                <img
                    src={portrait}
                    alt='Ahmed speaking from his workspace'
                    className='mt-24'
                />
            </section>
            <section className='about-story'>
                <p className='large-copy'>
                    I&apos;m Ahmed, a full-stack developer working across
                    product thinking, backend systems, and expressive frontends.
                </p>
                <div>
                    <p>
                        I&apos;m most engaged when a problem needs both
                        structure and empathy: understanding how a person will
                        use a product, then engineering the system that makes
                        that experience reliable.
                    </p>
                    <p>
                        My work is grounded in Python, FastAPI, React, and
                        modern web standards. I value readable code, honest
                        collaboration, and products that earn their complexity.
                    </p>
                </div>
            </section>
            <section className='about-gallery'>
                <img src={portrait4} alt='Ahmed working at his desk' />
                <img
                    src={process}
                    alt='A close view of Ahmed focused on his work'
                />
            </section>
            <section className='values'>
                <SectionLabel number='02'>What I value</SectionLabel>
                {[
                    'Clarity over cleverness',
                    'Curiosity before assumptions',
                    'Quality without ceremony',
                ].map((value, index) => (
                    <article key={value}>
                        <span>0{index + 1}</span>
                        <h2>{value}</h2>
                    </article>
                ))}
            </section>
            <ContactBand />
        </main>
    )
}
