import ContactBand from '../components/ContactBand'
import ProjectCard from '../components/ProjectCard'
import SectionLabel from '../components/SectionLabel'
import { projects } from '../data'

export default function WorkPage() {
    return (
        <main className='inner-page'>
            <section className='page-hero mt-24'>
                <SectionLabel number='01'>Selected work</SectionLabel>
                <h1>
                    Useful products.
                    <br />
                    <em>Considered systems.</em>
                </h1>
                <p>
                    A selection of platform, API, and problem-solving work
                    shaped around real needs and maintainable technology.
                </p>
            </section>
            <section className='all-projects'>
                {projects.map((project) => (
                    <ProjectCard key={project.number} project={project} />
                ))}
            </section>
            <ContactBand />
        </main>
    )
}
