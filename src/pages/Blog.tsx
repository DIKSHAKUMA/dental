import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import { posts } from '@/lib/blog'

export function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className="bg-cream pt-32 pb-24 sm:pt-36">
            <div className="mx-auto max-w-6xl px-5">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                        Dental Health Blog
                    </span>
                    <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
                        Tips for a healthier smile
                    </h1>
                    <p className="mt-4 text-muted">
                        Practical, easy-to-read articles on dental care, treatments, and
                        keeping your smile bright.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                        >
                            <Link
                                to={`/blog/${post.slug}`}
                                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-ink/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={post.cover}
                                        alt={post.title}
                                        loading="lazy"
                                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <div className="flex items-center gap-3 text-xs text-muted">
                                        <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
                                            {post.category}
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <Clock className="h-3.5 w-3.5" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h2 className="mt-3 font-display text-xl font-semibold text-ink">
                                        {post.title}
                                    </h2>
                                    <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
                                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                                        Read article
                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    )
}
