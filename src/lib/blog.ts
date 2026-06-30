// ---------------------------------------------------------------------------
// Blog articles — original content written for Sri Amutha Dental Care.
// (Not copied from other sites; safe to publish.)
// ---------------------------------------------------------------------------

export interface BlogPost {
    slug: string
    title: string
    excerpt: string
    cover: string
    date: string
    readTime: string
    category: string
    content: Array<
        | { type: 'p'; text: string }
        | { type: 'h2'; text: string }
        | { type: 'ul'; items: string[] }
    >
}

export const posts: BlogPost[] = [
    {
        slug: 'what-to-expect-during-a-painless-root-canal',
        title: 'What to Expect During a Painless Root Canal',
        excerpt:
            'Nervous about a root canal? Here is exactly what happens, step by step, and why modern micro-surgical treatment is far gentler than its reputation.',
        cover:
            'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80',
        date: 'June 2026',
        readTime: '5 min read',
        category: 'Treatments',
        content: [
            {
                type: 'p',
                text: 'Few dental procedures carry as much unnecessary fear as the root canal. Yet with modern micro-surgical techniques, the treatment is comfortable, predictable, and often completed in a single visit. Understanding what happens can take most of the worry away.',
            },
            { type: 'h2', text: 'Why a root canal is needed' },
            {
                type: 'p',
                text: 'Inside every tooth is a soft core called the pulp, which holds nerves and blood vessels. When deep decay, a crack, or injury lets bacteria reach the pulp, it becomes inflamed or infected. A root canal removes that damaged tissue, cleans the space, and seals it — saving a tooth that would otherwise need to be removed.',
            },
            { type: 'h2', text: 'The visit, step by step' },
            {
                type: 'ul',
                items: [
                    'Gentle numbing so the area is fully comfortable before we begin.',
                    'A small opening is made to reach the inner canals of the tooth.',
                    'Under magnification, the canals are cleaned and gently shaped.',
                    'The space is disinfected and filled to seal out future infection.',
                    'A crown or filling restores the tooth so it looks and works naturally.',
                ],
            },
            { type: 'h2', text: 'Does it hurt?' },
            {
                type: 'p',
                text: 'For most patients, a modern root canal feels similar to having a routine filling. Magnification lets us work precisely, and effective anaesthesia means little to no discomfort during treatment. Mild tenderness afterwards usually settles within a day or two.',
            },
            { type: 'h2', text: 'Caring for your tooth afterwards' },
            {
                type: 'p',
                text: 'Eat soft foods for the first day, keep up gentle brushing and flossing, and attend any follow-up to place your permanent crown. A treated tooth, looked after well, can last for many years.',
            },
        ],
    },
    {
        slug: 'five-myths-about-root-canal-treatment',
        title: '5 Common Myths About Root Canal Treatment',
        excerpt:
            'From "it is painful" to "extraction is better" — we clear up the most common misconceptions that keep people from saving their teeth.',
        cover:
            'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
        date: 'June 2026',
        readTime: '4 min read',
        category: 'Myths',
        content: [
            {
                type: 'p',
                text: 'Misinformation about root canals causes many people to delay care or choose extraction unnecessarily. Let us look at five myths and the reality behind them.',
            },
            { type: 'h2', text: 'Myth 1: Root canals are painful' },
            {
                type: 'p',
                text: 'The pain people associate with root canals usually comes from the infection itself, not the treatment. The procedure relieves that pain. With modern techniques, the treatment is comfortable.',
            },
            { type: 'h2', text: 'Myth 2: It is better to just pull the tooth' },
            {
                type: 'p',
                text: 'Nothing functions quite like your natural tooth. Saving it preserves your bite, keeps neighbouring teeth in place, and is often more economical over time than an extraction followed by an implant or bridge.',
            },
            { type: 'h2', text: 'Myth 3: Root canals require many visits' },
            {
                type: 'p',
                text: 'With advanced equipment, most root canals are now completed in a single visit, saving you time without compromising quality.',
            },
            { type: 'h2', text: 'Myth 4: A treated tooth will not last' },
            {
                type: 'p',
                text: 'A properly treated and restored tooth can last a lifetime with good oral hygiene and regular check-ups.',
            },
            { type: 'h2', text: 'Myth 5: If it does not hurt, I do not need treatment' },
            {
                type: 'p',
                text: 'Some infected teeth cause little pain at first. Skipping treatment can let the problem spread. Regular check-ups catch issues early, when they are easiest to treat.',
            },
        ],
    },
    {
        slug: 'daily-habits-for-healthy-teeth-and-gums',
        title: 'Daily Habits for Healthy Teeth and Gums',
        excerpt:
            'Great dental health is built on simple daily habits. Here are the ones that make the biggest difference between check-ups.',
        cover:
            'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
        date: 'June 2026',
        readTime: '4 min read',
        category: 'Prevention',
        content: [
            {
                type: 'p',
                text: 'Healthy teeth are mostly the result of small, consistent habits. A few minutes of care each day prevents the majority of dental problems we treat.',
            },
            { type: 'h2', text: 'Brush well, twice a day' },
            {
                type: 'p',
                text: 'Use a soft-bristled brush and fluoride toothpaste for two full minutes, morning and night. Angle the brush towards the gum line and use gentle, short strokes rather than hard scrubbing.',
            },
            { type: 'h2', text: 'Do not skip flossing' },
            {
                type: 'p',
                text: 'Brushing misses the surfaces between teeth, where decay and gum disease often start. Cleaning between your teeth once a day makes a real difference.',
            },
            { type: 'h2', text: 'Watch the sugar and sip water' },
            {
                type: 'ul',
                items: [
                    'Limit sugary drinks and frequent snacking, which feed cavity-causing bacteria.',
                    'Drink water through the day to rinse away food and keep your mouth healthy.',
                    'If you do have something sweet, have it with meals rather than grazing.',
                ],
            },
            { type: 'h2', text: 'See your dentist regularly' },
            {
                type: 'p',
                text: 'A check-up and professional cleaning every six months catches small problems before they become big ones — and keeps your smile bright. Book whenever you are due; it only takes a moment on WhatsApp.',
            },
        ],
    },
]

export const getPost = (slug?: string) => posts.find((p) => p.slug === slug)
