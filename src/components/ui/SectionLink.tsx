import type { ReactNode, MouseEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface SectionLinkProps {
    href: string // e.g. "#services"
    className?: string
    onClick?: () => void
    children: ReactNode
}

/**
 * Anchor that smooth-scrolls on the home page, and routes home (then scrolls)
 * when clicked from another page like the blog.
 */
export function SectionLink({
    href,
    className,
    onClick,
    children,
}: SectionLinkProps) {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const handle = (e: MouseEvent<HTMLAnchorElement>) => {
        onClick?.()
        if (pathname !== '/') {
            e.preventDefault()
            navigate('/' + href) // -> "/#services", Home scrolls to it on load
        }
        // On home: native anchor + Lenis handler does the smooth scroll.
    }

    return (
        <a href={href} onClick={handle} className={className}>
            {children}
        </a>
    )
}
