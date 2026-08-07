import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Mail, MessageCircle, Phone, Send, X } from "lucide-react";

export function FloatingWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="w-64 origin-bottom-right rounded-3xl border border-border bg-surface/95 p-3 shadow-card backdrop-blur-xl"
          >
            <a
              href="mailto:semir.semir6@icloud.com"
              className="flex items-center gap-3 rounded-2xl px-3 py-3 transition-all duration-300 ease-out hover:bg-surface-2"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm">semir.semir6@icloud.com</span>
            </a>
            <a
              href="tel:09301309333"
              className="flex items-center gap-3 rounded-2xl px-3 py-3 transition-all duration-300 ease-out hover:bg-surface-2"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm">09301309333</span>
            </a>
            <a
              href="https://t.me/semir001"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl px-3 py-3 transition-all duration-300 ease-out hover:bg-surface-2"
            >
              <Send className="h-4 w-4 text-primary" />
              <span className="text-sm">@semir001</span>
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-2xl px-3 py-3 transition-all duration-300 ease-out hover:bg-surface-2"
            >
              <CalendarDays className="h-4 w-4 text-primary" />
              <span className="text-sm">Book a discovery call</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-3 rounded-full border border-border bg-surface/90 py-2 pl-2 pr-4 shadow-card backdrop-blur-xl transition-all duration-300 ease-out"
      >
        <motion.span
          aria-hidden
          className="absolute left-2 h-9 w-9 rounded-full bg-primary"
          animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <span className="relative grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
          {open ? <X className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
        </span>
        <span className="text-left leading-tight">
          <span className="block text-sm font-semibold">Speak to me</span>
          <span className="block text-xs text-muted-foreground">Email or book a call</span>
        </span>
      </motion.button>
    </div>
  );
}
