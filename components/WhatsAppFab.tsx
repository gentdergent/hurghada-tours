import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { whatsappLink } from "@/lib/config";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hallo, ich interessiere mich für eure Touren.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Chat öffnen"
      className="group fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 rounded-full bg-[var(--color-ink)] hover:bg-[var(--color-ember)] text-[var(--color-paper)] pl-5 pr-6 py-4 shadow-[0_20px_50px_-12px_rgba(32,25,19,0.4)] transition-all duration-500 hover:-translate-y-[2px] cursor-pointer"
    >
      <WhatsappLogo size={20} weight="fill" />
      <span className="text-sm font-medium">Chat starten</span>
      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[var(--color-ember)] group-hover:bg-[var(--color-paper)]">
        <span className="absolute inset-0 rounded-full bg-[var(--color-ember)] group-hover:bg-[var(--color-paper)] animate-ping opacity-75"></span>
      </span>
    </a>
  );
}
