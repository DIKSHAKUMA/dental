import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Clock, MessageCircle } from 'lucide-react'
import { getPost, posts } from '@/lib/blog'
import { whatsappLink } from '@/lib/site'

export function Article() {
    const { slug } = useParams()
    const post = getPost(slug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    if (!post) {
        return (
            <main className="grid min-h-[60vh] place-items-center bg-cream pt-32 text-center">
                <div>
                    <h1 className="font-display text-3xl font-semibold text-ink">
                        Article not found
                    </h1>
                    <Link
                        to="/blog"
                        className="mt-4 inline-flex items-center gap-1.5 font-semibold text-primary"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to blog
                    </Link>
                </div>
            </main>
        )
    }

    const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2)

    return (
        <main className="bg-cream pt-28 pb-24 sm:pt-32">
            <article className="mx-auto max-w-3xl px-5">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-600"
                >
                    <ArrowLeft className="h-4 w-4" />
                    All articles
                </Link>

                <div className="mt-6 flex items-center gap-3 text-xs text-muted">
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
                        {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                    </span>
                    <span>{post.date}</span>
                </div>

                <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                    {post.title}
                </h1>

                <div className="mt-8 overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-soft)]">
                    <img
                        src={post.cover}
                        alt={post.title}
                        className="h-64 w-full object-cover sm:h-80"
                    />
                </div>

                <div className="mt-10 space-y-5">
                    {post.content.map((block, i) => {
                        if (block.type === 'h2')
                            return (
                                <h2
                                    key={i}
                                    className="pt-2 font-display text-2xl font-semibold text-ink"
                                >
                                    {block.text}
                                </h2>
                            )
                        if (block.type === 'ul')
                            return (
                                <ul key={i} className="space-y-2 pl-1">
                                    {block.items.map((item, j) => (
                                        <li key={j} className="flex gap-3 text-ink-soft">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )
                        return (
                            <p key={i} className="text-lg leading-relaxed text-ink-soft">
                                {block.text}
                            </p>
                        )
                    })}
                </div>

                {/* CTA */}
                <div className="mt-12 rounded-[var(--radius-card)] border border-primary/15 bg-primary/5 p-6 text-center sm:p-8">
                    <h3 className="font-display text-2xl font-semibold text-ink">
                        Have a question about your teeth?
                    </h3>
                    <p className="mt-2 text-muted">
                        Book a consultation with our team — it only takes a moment.
                    </p>
                    <a
                        href={whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-colors hover:bg-whatsapp-600"
                    >
                        <MessageCircle className="h-5 w-5" />
                        Book on WhatsApp
                    </a>
                </div>

                {/* Related */}
                {related.length > 0 && (
                    <div className="mt-16">
                        <h3 className="font-display text-xl font-semibold text-ink">
                            Keep reading
                        </h3>
                        <div className="mt-5 grid gap-5 sm:grid-cols-2">
                            {related.map((r) => (
                                <Link
                                    key={r.slug}
                                    to={`/blog/${r.slug}`}
                                    className="group flex gap-4 rounded-2xl border border-ink/8 bg-white p-3 transition-colors hover:border-primary/30"
                                >
                                    <img
                                        src={r.cover}
                                        alt={r.title}
                                        className="h-20 w-24 shrink-0 rounded-xl object-cover"
                                    />
                                    <div>
                                        <p className="font-display font-semibold leading-snug text-ink group-hover:text-primary">
                                            {r.title}
                                        </p>
                                        <p className="mt-1 text-xs text-muted">{r.readTime}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </article>
        </main>
    )
}
