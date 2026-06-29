import { Phone, MessageCircle } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'

/**
 * Sticky bottom action bar — mobile only. Always-visible conversion driver.
 */
export function MobileBar() {
    return (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-white/90 px-4 py-3 backdrop-blur-md md:hidden">
            <div className="flex items-center gap-3">
                <a
                    href={site.phoneHref}
                    aria-label="Call the clinic"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 px-4 py-3 text-sm font-semibold text-ink"
                >
                    <Phone className="h-4 w-4" />
                    Call
                </a>
                <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book on WhatsApp"
                    className="flex flex-[1.6] items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(37,211,102,0.35)]"
                >
                    <MessageCircle className="h-4 w-4" />
                    Book on WhatsApp
                </a>
            </div>
        </div>
    )
}
