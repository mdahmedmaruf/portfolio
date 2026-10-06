import { ArrowUpRight01FreeIcons } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from 'react-router'
import logo from '../assets/logo.svg'

export default function Footer() {
    return (
        <footer>
            <Link to={`/`} className='footer-logo'>
                <img src={logo} alt='Ahmed' />
            </Link>
            <div className='social-links' aria-label='Social links'>
                <Link
                    to='https://github.com/mdahmedmaruf'
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-1'
                >
                    GitHub{' '}
                    <HugeiconsIcon icon={ArrowUpRight01FreeIcons} size={16} />
                </Link>
                <Link
                    to='https://www.linkedin.com/in/ahmedmarufmd/'
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-1'
                >
                    LinkedIn{' '}
                    <HugeiconsIcon icon={ArrowUpRight01FreeIcons} size={16} />
                </Link>
                <Link
                    to='mailto:mdahmedmaruf@gmail.com'
                    className='flex items-center gap-1'
                >
                    Email{' '}
                    <HugeiconsIcon icon={ArrowUpRight01FreeIcons} size={16} />
                </Link>
            </div>
            <button
                type='button'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                Back to top ↑
            </button>
            <small>© 2026</small>
        </footer>
    )
}
