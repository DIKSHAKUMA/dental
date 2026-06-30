import { motion } from 'framer-motion'
import { ToothMark } from '@/components/ui/Logo'

/**
 * Playful, on-brand tooth animation: the tooth gently bobs and shines while
 * "splash" ripple rings pulse outward and sparkles twinkle around it.
 */
export function ToothAnimation() {
    return (
        <div className="relative grid h-full min-h-[20rem] place-items-center">
            {/* Splash ripple rings */}
            {[0, 1, 2].map((i) => (
                <motion.span
                    key={i}
                    className="absolute rounded-full border border-primary/30"
                    style={{ width: 220, height: 220 }}
                    initial={{ scale: 0.6, opacity: 0.5 }}
                    animate={{ scale: 1.6, opacity: 0 }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: 'easeOut',
                    }}
                />
            ))}

            {/* Glow */}
            <div className="absolute h-56 w-56 rounded-full bg-primary/15 blur-3xl" />

            {/* Floating tooth */}
            <motion.div
                animate={{ y: [0, -14, 0], rotate: [-3, 3, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
            >
                <div className="relative grid h-40 w-40 place-items-center rounded-[2rem] bg-gradient-to-br from-primary to-primary-700 shadow-[0_24px_60px_rgba(29,111,224,0.35)]">
                    <ToothMark className="h-24 w-24 text-white" />
                    {/* Shine sweep */}
                    <motion.span
                        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]"
                        aria-hidden
                    >
                        <motion.span
                            className="absolute -inset-y-4 w-1/3 -skew-x-12 bg-white/25 blur-md"
                            initial={{ x: '-150%' }}
                            animate={{ x: '350%' }}
                            transition={{
                                duration: 2.6,
                                repeat: Infinity,
                                repeatDelay: 1.6,
                                ease: 'easeInOut',
                            }}
                        />
                    </motion.span>
                </div>
            </motion.div>

            {/* Sparkles */}
            {[
                { top: '12%', left: '22%', size: 10, delay: 0 },
                { top: '20%', right: '20%', size: 14, delay: 0.6 },
                { bottom: '18%', left: '26%', size: 12, delay: 1.1 },
                { bottom: '24%', right: '24%', size: 9, delay: 1.6 },
            ].map((s, i) => (
                <motion.span
                    key={i}
                    className="absolute text-primary"
                    style={{
                        top: s.top,
                        left: s.left,
                        right: s.right,
                        bottom: s.bottom,
                    }}
                    initial={{ scale: 0, opacity: 0, rotate: 0 }}
                    animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], rotate: 90 }}
                    transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: s.delay,
                        ease: 'easeInOut',
                    }}
                    aria-hidden
                >
                    <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" />
                    </svg>
                </motion.span>
            ))}
        </div>
    )
}
