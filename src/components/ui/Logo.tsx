import { cn } from '@/lib/utils'

/** Tooth mark — our own simple, friendly tooth icon. */
export function ToothMark({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M12 2.4c-2.1 0-3.2 1-4.6 1-1.2 0-2-.6-3-.6C2.6 2.8 2 4.6 2 6.6c0 2.2.7 3.8 1.3 6 .4 1.5.5 3 .8 4.6.3 1.6.6 3.4 1.6 4.2.9.7 1.9.2 2.3-1 .4-1.2.6-3 .9-4.3.2-.9.5-1.5 1.1-1.5s.9.6 1.1 1.5c.3 1.3.5 3.1.9 4.3.4 1.2 1.4 1.7 2.3 1 1-.8 1.3-2.6 1.6-4.2.3-1.6.4-3.1.8-4.6.6-2.2 1.3-3.8 1.3-6 0-2-.6-3.8-2.4-3.8-1 0-1.8.6-3 .6-1.4 0-2.5-1-4.6-1Z"
                fill="currentColor"
            />
        </svg>
    )
}

interface LogoProps {
    className?: string
    variant?: 'light' | 'dark'
    withText?: boolean
}

/** Full logo lockup — tooth mark + wordmark. */
export function Logo({
    className,
    variant = 'dark',
    withText = true,
}: LogoProps) {
    const textColor = variant === 'light' ? 'text-white' : 'text-ink'
    const subColor = variant === 'light' ? 'text-white/55' : 'text-muted'

    return (
        <span className={cn('flex items-center gap-2.5', className)}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white">
                <ToothMark className="h-5 w-5" />
            </span>
            {withText && (
                <span className="flex flex-col leading-none">
                    <span className={cn('font-display text-[1.05rem] font-semibold', textColor)}>
                        Sri Amutha
                    </span>
                    <span
                        className={cn(
                            'text-[0.6rem] font-medium uppercase tracking-[0.18em]',
                            subColor,
                        )}
                    >
                        Dental Care
                    </span>
                </span>
            )}
        </span>
    )
}
