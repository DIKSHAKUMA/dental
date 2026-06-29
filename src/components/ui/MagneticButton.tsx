import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
    children: ReactNode
    href?: string
    onClick?: () => void
    className?: string
    target?: string
    rel?: string
    'aria-label'?: string
}

/**
 * Interactive button/link with a subtle, tasteful hover (gentle lift only).
 * No cursor-tracking movement — the element stays anchored in place.
 */
export function MagneticButton({
    children,
    href,
    onClick,
    className,
    target,
    rel,
    ...rest
}: MagneticButtonProps) {
    const motionProps = {
        whileHover: { y: -2 },
        whileTap: { scale: 0.98 },
        transition: { type: 'spring' as const, stiffness: 400, damping: 25 },
        className: cn('inline-flex', className),
    }

    if (href) {
        return (
            <motion.a href={href} target={target} rel={rel} {...motionProps} {...rest}>
                {children}
            </motion.a>
        )
    }
    return (
        <motion.button type="button" onClick={onClick} {...motionProps} {...rest}>
            {children}
        </motion.button>
    )
}
