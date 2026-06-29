// ---------------------------------------------------------------------------
// Central site config. Swap placeholders for real client data once confirmed.
// ---------------------------------------------------------------------------

export const site = {
    name: 'Sri Amutha Dental Care',
    shortName: 'Sri Amutha',
    tagline: 'Micro-Surgical Root Canal Centre',

    // Placeholder — replace with the clinic's real WhatsApp number (intl format, no +).
    whatsappNumber: '919999999999',
    // Placeholder — replace with the real phone number.
    phoneDisplay: '+91 99999 99999',
    phoneHref: 'tel:+919999999999',

    // Placeholder address + exact map coords from the Google Maps listing.
    address: 'Main Road, Tamil Nadu, India',
    mapsLat: 11.1505757,
    mapsLng: 78.5957457,

    hours: [
        { day: 'Mon – Sat', time: '9:00 AM – 9:00 PM' },
        { day: 'Sunday', time: '9:00 AM – 1:00 PM' },
    ],
}

export const whatsappLink = (message?: string) => {
    const base = `https://wa.me/${site.whatsappNumber}`
    const text =
        message ??
        `Hello ${site.name}, I'd like to book a dental appointment. Please share the available slots.`
    return `${base}?text=${encodeURIComponent(text)}`
}

export const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
]

// ---------------------------------------------------------------------------
// Services (micro-surgical root canal is the flagship / large bento tile).
// ---------------------------------------------------------------------------
export interface Service {
    icon: string // lucide-react icon name
    title: string
    description: string
    featured?: boolean
}

export const services: Service[] = [
    {
        icon: 'Microscope',
        title: 'Micro-Surgical Root Canal',
        description:
            'Our flagship. High-precision, single-visit root canals performed under magnification — virtually painless, with a success rate above 98%.',
        featured: true,
    },
    {
        icon: 'Bone',
        title: 'Dental Implants',
        description: 'Permanent, natural-looking replacements for missing teeth.',
    },
    {
        icon: 'Smile',
        title: 'Braces & Aligners',
        description: 'Straighten your smile with clear aligners or modern braces.',
    },
    {
        icon: 'Crown',
        title: 'Crowns & Bridges',
        description: 'Durable, tooth-coloured restorations that blend right in.',
    },
    {
        icon: 'Sparkles',
        title: 'Teeth Whitening',
        description: 'Safe, professional brightening for a confident smile.',
    },
    {
        icon: 'Baby',
        title: 'Kids Dentistry',
        description: 'Gentle, friendly care that makes little ones feel at ease.',
    },
    {
        icon: 'HeartPulse',
        title: 'Gum Care',
        description: 'Treatment for gum disease to keep your smile healthy.',
    },
    {
        icon: 'ShieldCheck',
        title: 'General Dentistry',
        description: 'Cleanings, fillings, extractions and routine check-ups.',
    },
]

export const stats = [
    { to: 15, suffix: '+', label: 'Years of experience' },
    { to: 10000, suffix: '+', label: 'Happy patients' },
    { to: 4.9, suffix: '★', label: 'Google rating', decimals: 1 },
    { to: 98, suffix: '%', label: 'Root canal success' },
]

// ---------------------------------------------------------------------------
// Doctor (placeholder — replace with the clinic's real details once confirmed).
// ---------------------------------------------------------------------------
export const doctor = {
    name: 'Dr. A. Murugan',
    credentials: 'BDS, MDS — Conservative Dentistry & Endodontics',
    image:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80',
    bio: 'With over 15 years dedicated to micro-surgical endodontics, Dr. Murugan has helped thousands of patients keep their natural teeth with comfortable, single-visit root canal care. His approach blends modern technology with a calm, unhurried chairside manner.',
    highlights: [
        'Specialist in micro-surgical root canal treatment',
        'Magnification-assisted, single-visit procedures',
        '10,000+ patients treated across 15+ years',
        'Gentle, anxiety-friendly approach',
    ],
}

export const testimonials = [
    {
        quote:
            'I was terrified of getting a root canal, but it was completely painless and done in one visit. The whole team made me feel so at ease.',
        name: 'Priya R.',
        location: 'Google Review',
    },
    {
        quote:
            'Spotlessly clean clinic and the most caring dentist I have been to. Explained everything clearly and never rushed me.',
        name: 'Karthik S.',
        location: 'Google Review',
    },
    {
        quote:
            'Brought my two kids here and they actually enjoyed the visit. Gentle, friendly, and very professional. Highly recommend.',
        name: 'Lakshmi V.',
        location: 'Google Review',
    },
    {
        quote:
            'My implant looks and feels completely natural. Fair pricing and honest advice — exactly what you want from a dentist.',
        name: 'Mohan K.',
        location: 'Google Review',
    },
]

export const faqs = [
    {
        q: 'Is a root canal painful?',
        a: 'No. With micro-surgical magnification and modern anaesthesia, most patients feel little to nothing during treatment and very little afterwards.',
    },
    {
        q: 'Can a root canal be done in a single visit?',
        a: 'In most cases, yes. Our advanced equipment lets us complete the majority of root canals comfortably in one sitting.',
    },
    {
        q: 'How do I book an appointment?',
        a: 'Simply tap any "Book on WhatsApp" button on this page. Send us your preferred day and time and we will confirm your slot.',
    },
    {
        q: 'Do you treat children?',
        a: 'Absolutely. We offer gentle, friendly kids dentistry designed to make little ones feel comfortable and safe.',
    },
    {
        q: 'What about hygiene and safety?',
        a: 'Every instrument is sterilised and every treatment room sanitised to strict hospital-grade protocols before each patient.',
    },
]
