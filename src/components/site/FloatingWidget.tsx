import { useState } from "react";
import { CalendarDays, Mail, MessageCircle, X } from "lucide-react";

export function FloatingWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div className="animate-scale-in w-64 rounded-3xl border border-border bg-surface/95 p-3 backdrop-blur-xl shadow-card">
          <a
            href="mailto:hello@ruchitdesigns.com"
            className="flex items-center gap-3 rounded-2xl px-3 py-3 transition-colors hover:bg-surface-2"
          >
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-sm">hello@ruchitdesigns.com</span>
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-2xl px-3 py-3 transition-colors hover:bg-surface-2"
          >
            <CalendarDays className="h-4 w-4 text-primary" />
            <span className="text-sm">Book a discovery call</span>
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-3 rounded-full border border-border bg-surface/90 py-2 pl-2 pr-4 backdrop-blur-xl shadow-card transition-transform hover:scale-[1.03]"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
          {open ? <X className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
        </span>
        <span className="text-left leading-tight">
          <span className="block text-sm font-semibold">Speak to me</span>
          <span className="block text-xs text-muted-foreground">Email or book a call</span>
        </span>
      </button>
    </div>
  );
}
