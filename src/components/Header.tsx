import { ArrowUpRight01FreeIcons } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from 'react-router'
import logo from '../assets/logo.svg'

export default function Header() {
    return (
        <main>
            <header className='site-header'>
                <Link className='brand' to={`/`} aria-label='Home'>
                    <img src={logo} alt='Ahmed' />
                </Link>

                <nav aria-label='Main navigation'>
                    <Link to={`work`}>Work</Link>
                    <Link to={`about`}>About</Link>
                    <Link to={`resume`}>Résumé</Link>
                    <Link to={`contact`} className='nav-cta'>
                        Let&apos;s talk{' '}
                        <HugeiconsIcon icon={ArrowUpRight01FreeIcons} />
                    </Link>
                </nav>
            </header>
        </main>
    )
}
