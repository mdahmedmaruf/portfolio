import { Link } from 'react-router'
import SectionLabel from '../components/SectionLabel'

export default function ResumePage() {
    return (
        <main className='inner-page resume-page'>
            <section className='resume-heading mt-18'>
                <div>
                    <SectionLabel number='01'>Résumé</SectionLabel>
                    <h1>
                        Ahmed
                        <br />
                        <em>Full-stack developer</em>
                    </h1>
                </div>
                <button type='button' onClick={() => window.print()}>
                    Save as PDF ↓
                </button>
            </section>
            <div className='resume-layout'>
                <section>
                    <h2>Profile</h2>
                    <p>
                        Full-stack developer focused on clear, dependable
                        digital products. Experienced across API architecture,
                        frontend systems, relational data, and practical product
                        delivery.
                    </p>
                </section>
                <section>
                    <h2>Capabilities</h2>
                    <div className='resume-columns'>
                        <div>
                            <strong>Backend</strong>
                            <p>Python, FastAPI, REST APIs, PostgreSQL, Redis</p>
                        </div>
                        <div>
                            <strong>Frontend</strong>
                            <p>
                                React, TypeScript, Tailwind CSS, responsive UI
                            </p>
                        </div>
                        <div>
                            <strong>Engineering</strong>
                            <p>Git, Docker, testing, system design, DSA</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Selected experience</h2>
                    <div className='experience-row'>
                        <span>2023 — Now</span>
                        <div>
                            <h3>Independent full-stack developer</h3>
                            <p>
                                Building web platforms and API-led products from
                                discovery through launch.
                            </p>
                        </div>
                    </div>
                    <div className='experience-row'>
                        <span>Ongoing</span>
                        <div>
                            <h3>Problem solving practice</h3>
                            <p>
                                72+ data structure and algorithm challenges
                                completed in C++.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Contact</h2>
                    <Link to='mailto:mdahmedmaruf@gmail.com'>
                        mdahmedmaruf@gmail.com
                    </Link>
                </section>
            </div>
        </main>
    )
}
