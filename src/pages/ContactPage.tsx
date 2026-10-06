import { ArrowUpRight01FreeIcons } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from 'react-router'
import SectionLabel from '../components/SectionLabel'

export default function ContactPage() {
    return (
        <main className='inner-page contact-page'>
            <section className='contact-hero mt-18'>
                <SectionLabel number='01'>Start a conversation</SectionLabel>
                <h1>
                    Have an idea?
                    <br />
                    <em>Let&apos;s make it real.</em>
                </h1>
                <p>
                    Tell me what you&apos;re building, where you&apos;re stuck,
                    or what you want to explore. I&apos;ll get back to you with
                    a thoughtful next step.
                </p>
                <Link
                    className='email-link flex items-center'
                    to='mailto:mdahmedmaruf@gmail.com'
                >
                    mdahmedmaruf@gmail.com{' '}
                    <HugeiconsIcon icon={ArrowUpRight01FreeIcons} size={30} />
                </Link>
            </section>
            <aside className='contact-aside'>
                <span>Elsewhere</span>
                <Link
                    to='https://github.com/mdahmedmaruf'
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2'
                >
                    GitHub{' '}
                    <HugeiconsIcon icon={ArrowUpRight01FreeIcons} size={20} />
                </Link>
                <Link
                    to='https://www.linkedin.com/in/ahmedmarufmd/'
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2'
                >
                    LinkedIn{' '}
                    <HugeiconsIcon icon={ArrowUpRight01FreeIcons} size={20} />
                </Link>
                <div>
                    <span>Availability</span>
                    <p>
                        Open to select freelance work and full-time
                        opportunities.
                    </p>
                </div>
            </aside>
        </main>
    )
}
