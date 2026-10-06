import {
    ArrowDown02Icon,
    ArrowUpRight01FreeIcons,
    ArrowUpRight01Icon,
    QuoteUpIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from 'react-router'
import process from '../assets/process.jpg'
import workspace from '../assets/workspace.jpg'
import ContactBand from '../components/ContactBand'
import SectionLabel from '../components/SectionLabel'
import { processSteps } from '../data'

const CodeMark = ({ children }: { children: string }) => (
    <span className='code-mark'>{children}</span>
)

export default function HomePage() {
    return (
        <main>
            <section
                className='hero relative grid min-h-207.5 grid-cols-[1.05fr_0.95fr] items-center gap-15 overflow-hidden py-36.25 px-[max(32px,min(calc((100vw-1360px)/2),70px))] bg-[radial-gradient(circle_at_88%_27%,rgba(22,165,173,0.11),transparent_23%),linear-gradient(110deg,#f8faf8_0%,#f2f7f4_100%)] before:absolute before:top-0 before:left-[6%] before:w-px before:h-full before:bg-[rgba(23,51,53,0.06)] before:content-[""]'
                id='top'
            >
                <div className='hero-copy'>
                    <div className='eyebrow'>
                        <span className='status-dot' />
                        Available for new opportunities
                    </div>
                    <h1>
                        I build the <em>logic</em>
                        <br />
                        behind great ideas.
                    </h1>

                    <p className='hero-intro'>
                        Full-stack developer turning complex requirements into
                        fast, thoughtful digital products with{' '}
                        <strong>FastAPI, React, and Python.</strong> From the
                        first architecture sketch to the final interaction, I
                        build for people and for scale.
                    </p>
                    <div className='hero-actions flex items-center gap-4'>
                        <Link to='#work' className='text-link text-sm gap-2'>
                            Explore my work{' '}
                            <HugeiconsIcon icon={ArrowDown02Icon} />
                        </Link>
                        <Link to={`resume`} className='text-link'>
                            View résumé{' '}
                            <HugeiconsIcon icon={ArrowUpRight01Icon} />
                        </Link>
                    </div>
                </div>

                <div className='hero-visual'>
                    <div className='orbit orbit-one' />
                    <div className='orbit orbit-two' />
                    <div className='image-frame'>
                        <img src={workspace} alt='Ahmed working at his desk' />
                    </div>
                    <div className='floating-code code-left'>{'{ api }'}</div>
                    <div className='floating-code code-right'>react.tsx</div>
                </div>

                <div className='hero-index' aria-hidden='true'>
                    01 / 08
                </div>
            </section>
            <section className='ticker' aria-label='Core technologies'>
                <div>
                    <span>FastAPI</span>
                    <i />
                    <span>React.js</span>
                    <i />
                    <span>Python</span>
                    <i />
                    <span>C++</span>
                    <i />
                    <span>REST APIs</span>
                </div>
            </section>
            <section className='work-section' id='work'>
                <div className='section-heading'>
                    <SectionLabel number='02'>Selected work</SectionLabel>
                    <h2>
                        Built for <em>clarity.</em>
                        <br />
                        Engineered for <em>scale.</em>
                    </h2>
                </div>

                <div className='project-grid'>
                    <article className='project project-featured'>
                        <div className='project-topline'>
                            <span>01</span>
                            <span>Full-stack platform</span>
                        </div>
                        <div className='terminal-card' aria-hidden='true'>
                            <div className='terminal-bar'>
                                <span />
                                <span />
                                <span />
                                <small>main.py</small>
                            </div>
                            <pre>
                                <code>
                                    <b>@app.get</b>(&quot;/ideas/
                                    <em>{'{id}'}</em>&quot;){`\n`}
                                    <span>async def</span>{' '}
                                    build_something_great():{`\n`}
                                    {'    '}return{' '}
                                    <strong>{'{ “status”: “ready” }'}</strong>
                                </code>
                            </pre>
                            <div className='api-response'>
                                <span>200</span>
                                Response in 42ms
                            </div>
                        </div>
                        <div className='project-copy'>
                            <h3>API-first experiences</h3>
                            <p>
                                Clean interfaces powered by reliable Python
                                backends—designed around real people and
                                real-world performance.
                            </p>
                            <div className='tags'>
                                <span>FastAPI</span>
                                <span>React</span>
                                <span>PostgreSQL</span>
                            </div>
                        </div>
                    </article>

                    <article className='project project-accent'>
                        <div className='project-topline'>
                            <span>02</span>
                            <span>Problem solving</span>
                        </div>
                        <div className='leetcode-stat'>
                            <strong>72</strong>
                            <span>
                                problems
                                <br />
                                solved
                            </span>
                        </div>
                        <div className='progress'>
                            <span />
                        </div>
                        <div className='project-copy'>
                            <h3>Algorithms, applied.</h3>
                            <p>
                                Consistent C++ practice that sharpens how I
                                think about complexity, edge cases, and elegant
                                solutions.
                            </p>
                            <div className='tags'>
                                <span>C++</span>
                                <span>DSA</span>
                                <span>LeetCode</span>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section className='about-section' id='about'>
                <div className='about-photo'>
                    <img src={process} alt='Ahmed behind the scenes at work' />
                    <span>Behind the build</span>
                </div>

                <div className='about-copy'>
                    <SectionLabel number='03'>Approach</SectionLabel>
                    <p className='large-copy'>
                        I enjoy the space where <CodeMark>clean code</CodeMark>{' '}
                        meets <CodeMark>clear thinking</CodeMark>.
                    </p>
                    <p>
                        My approach is simple: understand the problem deeply,
                        remove what doesn&apos;t need to be there, and build a
                        solution that feels effortless to use. From backend
                        architecture to the final interaction, every detail
                        should earn its place.
                    </p>
                    <div className='principles'>
                        <div>
                            <strong>01</strong>
                            <span>Think in systems</span>
                        </div>
                        <div>
                            <strong>02</strong>
                            <span>Make it useful</span>
                        </div>
                        <div>
                            <strong>03</strong>
                            <span>Keep it human</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='stack-section'>
                <div className='section-heading'>
                    <SectionLabel number='04'>The stack</SectionLabel>
                    <h2>
                        Tools chosen for the <em>problem,</em>
                        <br />
                        not the trend.
                    </h2>
                </div>
                <div className='stack-grid'>
                    {[
                        [
                            'Frontend',
                            'React · TypeScript · Tailwind',
                            'Fast interfaces, resilient component systems, and thoughtful interactions.',
                        ],
                        [
                            'Backend',
                            'Python · FastAPI · REST',
                            'Clear service boundaries and APIs designed to remain dependable as products grow.',
                        ],
                        [
                            'Data',
                            'PostgreSQL · SQL · Redis',
                            'Pragmatic data models, careful queries, and performance where it matters.',
                        ],
                        [
                            'Practice',
                            'Git · Docker · Testing',
                            'Repeatable delivery, meaningful checks, and a clean handoff to the next contributor.',
                        ],
                    ].map(([title, tools, copy], index) => (
                        <article key={title}>
                            <span>0{index + 1}</span>
                            <h3>{title}</h3>
                            <strong>{tools}</strong>
                            <p>{copy}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className='process-section'>
                <div className='process-intro'>
                    <SectionLabel number='05'>Working process</SectionLabel>
                    <h2>
                        From ambiguity to a <em>clear path forward.</em>
                    </h2>
                    <p>
                        A simple, collaborative process keeps decisions visible
                        and momentum steady.
                    </p>
                </div>
                <div className='process-list'>
                    {processSteps.map((step) => (
                        <article key={step.number}>
                            <span>{step.number}</span>
                            <h3>{step.title}</h3>
                            <p>{step.copy}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className='testimonials'>
                <SectionLabel number='06'>Kind words</SectionLabel>
                <div className='quote-mark'>
                    <HugeiconsIcon
                        icon={QuoteUpIcon}
                        className='size-12 md:size-18'
                    />
                </div>
                <blockquote>
                    Ahmed has a rare ability to move between product thinking
                    and technical detail. He simplified a complicated build,
                    communicated clearly, and delivered something our team could
                    confidently grow.
                </blockquote>
                <div className='quote-author'>
                    <strong>Product collaborator</strong>
                    <span>Full-stack platform project</span>
                </div>
            </section>

            <section className='resume-strip'>
                <SectionLabel number='07'>Experience, at a glance</SectionLabel>
                <h2>Want the full story?</h2>
                <p>
                    Explore my capabilities, technical experience, and education
                    in one focused place.
                </p>
                <Link to={`resume`} className='flex items-center gap-2'>
                    Open résumé <HugeiconsIcon icon={ArrowUpRight01FreeIcons} />
                </Link>
            </section>

            <ContactBand />
        </main>
    )
}
