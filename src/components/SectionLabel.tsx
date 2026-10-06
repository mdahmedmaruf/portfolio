import type { ReactNode } from 'react'

export default function SectionLabel({
    number,
    children,
}: {
    number: string
    children: ReactNode
}) {
    return (
        <div className='section-label uppercase font-mono'>
            <span>{number}</span>
            <p>{children}</p>
        </div>
    )
}
