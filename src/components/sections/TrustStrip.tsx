import { motion } from 'framer-motion'
import { stats } from '@/lib/site'
import { CountUp } from '@/components/ui/CountUp'

export function TrustStrip() {
    return (
        <section className="relative border-y border-ink/5 bg-white">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-5 py-12 md:grid-cols-4 md:py-14">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="flex items-baseline font-display text-4xl font-semibold text-primary sm:text-5xl">
                            <CountUp to={stat.to} decimals={stat.decimals ?? 0} />
                            <span className="ml-0.5 text-primary/70">{stat.suffix}</span>
                        </div>
                        <p className="mt-2 text-sm text-muted">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
