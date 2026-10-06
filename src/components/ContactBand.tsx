import { ArrowUpRight01FreeIcons } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from 'react-router'
import portrait from '../assets/portrait.jpg'

export default function ContactBand() {
    return (
        <section className='contact-section' id='contact'>
            <div className='contact-image'>
                <img src={portrait} alt='Ahmed at his workstation' />
            </div>
            <div className='contact-copy'>
                <span className='section-number light'>04</span>
                <p>Have an idea worth building?</p>
                <h2>
                    Let&apos;s make it
                    <br />
                    <em>work beautifully.</em>
                </h2>
                <Link to='mailto:mdahmedmaruf@gmail.com'>
                    Start a conversation{' '}
                    <HugeiconsIcon icon={ArrowUpRight01FreeIcons} />
                </Link>
            </div>
        </section>
    )
}
