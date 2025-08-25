import React, { useEffect, useMemo, useState } from "react";
import { useCountdown } from "@/hooks/useCountdown";
import { motion, AnimatePresence } from "framer-motion";

export type SpotsCardProps = {
  total?: number;
  taken?: number;
  deadline?: Date;
  title?: string;
  note?: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
  // Caja comparativa
  includeTitle?: string;
  features?: string[];
  price?: number;
  priceCurrency?: string;
  priceBadge?: string;
  includeNote?: string;
  benefitsLeft?: string;
  benefitsRight?: string;
  bottomImageSrc?: string;
};

export default function SpotsCard({
  total = 50,
  taken = 27,
  deadline,
  title = "50 personas por semana",
  note = "No es táctica de ventas. Es logística real.",
  ctaLabel = "Reservar mi lugar",
  onCta,
  className = "",
  includeTitle = "INCLUYE:",
  features = [
    "Curso completo",
    "Tienda online configurada",
    "Productos + anuncios validados",
    "Soporte personal",
    "Acceso inmediato",
  ],
  price = 17,
  priceCurrency = "USD",
  priceBadge = "ÚNICO PAGO",
  includeNote = "Esto no es un gasto. Es la inversión más accesible que vas a hacer para cambiar tu situación financiera.",
  benefitsLeft = "Garantía de $1,000 o te pagamos $40",
  benefitsRight = "30 días de reembolso total",
  bottomImageSrc = "./images/pascu.png",
}: SpotsCardProps) {
  const available = Math.max(total - taken, 0);
  const pct = Math.min(100, Math.max(0, (taken / total) * 100));
  const isLow = available <= 10;

  // Countdown sincronizado
  const remaining = useCountdown();

  return (
    <section
      className={[
        "relative overflow-hidden rounded-3xl p-6 sm:p-10",
        "text-white font-sans border border-white/10 shadow-2xl",
        className,
      ].join(" ")}
      aria-label="Disponibilidad de cupos"
    >
      {/* Fondo negro moderno con degradés y halos */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(600px_300px_at_10%_0%,rgba(255,255,255,.08),transparent_60%)]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Encabezado */}
      <div className="mx-auto mb-8 max-w-4xl text-center">
        <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-white/5 px-4 py-1.5 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amber-300" />
          <span className="text-xs font-semibold tracking-widest text-amber-300 uppercase">
            {title}
          </span>
          <span className="text-[11px] text-white/70">Alta demanda</span>
        </div>
        <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-white/85">
          {note}
        </p>
      </div>

      {/* Número principal + urgencia */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 140, damping: 16 }}
          className="rounded-2xl border border-amber-400/30 bg-black/40 px-10 py-6 backdrop-blur"
          title={`${available} lugares disponibles`}
          aria-live="polite"
        >
          <div className="text-7xl sm:text-8xl font-extrabold leading-none tracking-tight">
            <span className="bg-gradient-to-b from-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_8px_28px_rgba(251,191,36,0.45)]">
              {available}
            </span>
          </div>
        </motion.div>

        <p className="mt-3 text-[11px] tracking-[0.22em] text-white/80 font-medium uppercase">
          LUGARES DISPONIBLES
        </p>

        <AnimatePresence>
          {isLow && (
            <motion.div
              initial={{ y: -6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -6, opacity: 0 }}
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-300 animate-pulse" />
              Quedan pocos lugares
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Barra de progreso */}
      <div className="mx-auto mt-8 w-full max-w-3xl">
        <div
          className="relative h-3 w-full overflow-hidden rounded-full border border-white/10 bg-white/10"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pct)}
          aria-label="Cupos ocupados"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-300"
          />
        </div>

        <div className="mt-5 flex flex-col items-center gap-2 text-sm">
          <div className="font-semibold">
            {taken} de {total} lugares ocupados
          </div>
          {remaining ? (
            <div className="inline-flex items-center gap-2 rounded-lg border border-amber-400/30 bg-white/5 px-3 py-1 text-xs backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300" />
              Cierra en{" "}
              <span className="ml-1 font-bold text-amber-300">
                {remaining.days}d {remaining.hours}h {remaining.minutes}m {remaining.seconds}s
              </span>
            </div>
          ) : (
            <div className="text-white/80">Próxima apertura muy pronto</div>
          )}
        </div>
      </div>

      {/* CTA (hover renovado) */}
      <div className="mt-8 flex items-center justify-center">
        <motion.button
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onCta}
          className={[
            "group relative inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-lg font-extrabold text-black",
            "bg-gradient-to-r from-amber-400 to-amber-300",
            "shadow-[0_12px_28px_-10px_rgba(251,191,36,.45)]",
            "transition-all duration-300 ease-out",
            "hover:from-amber-300 hover:to-amber-500",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60",
          ].join(" ")}
        >
          {/* brillo diagonal al hover */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full  transition-transform duration-700 group-hover:translate-x-full" />
          {ctaLabel}
          <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10l-3.293-3.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </div>

      {/* ============ Caja comparativa ============ */}
      <div className="mx-auto mt-12 w-full max-w-3xl">
        <div className="rounded-3xl bg-gradient-to-br from-amber-400 to-amber-300 p-[1.5px]">
          <div className="rounded-3xl border border-white/10 bg-neutral-900/90 p-6 sm:p-8 backdrop-blur">
            {/* Marca */}
            <div className="mb-4 flex justify-center">
              <span className="rounded-full border border-amber-400/30 bg-white/5 px-4 py-2 text-xs font-semibold tracking-widest text-amber-300 uppercase">
                COINNECTA PREMIUM
              </span>
            </div>

            <h3 className="mb-6 text-center text-3xl font-extrabold">{includeTitle}</h3>

            {/* Features */}
            <ul className="mb-8 grid gap-3 text-white/90">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-amber-300">
                    <svg className="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-base font-medium leading-tight">{f}</span>
                </li>
              ))}
            </ul>

            {/* Precio */}
            <div className="mb-6 rounded-2xl border border-amber-400/30 bg-white/5 p-6 text-center">
              <p className="mb-2 text-xs font-semibold tracking-[0.22em] text-amber-300 uppercase">
                ACCESO COMPLETO POR
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl text-white/60 line-through">$197</span>
                <div className="bg-gradient-to-b from-amber-300 to-amber-500 bg-clip-text text-5xl sm:text-6xl font-black text-transparent drop-shadow-lg">
                  ${price}
                </div>
                <span className="text-lg text-white/80">{priceCurrency}</span>
              </div>
              <div className="mt-2 inline-block rounded-full border border-amber-400/30 bg-white/5 px-3 py-1">
                <p className="text-xs font-bold tracking-wide text-amber-300 uppercase">{priceBadge}</p>
              </div>
            </div>

            {/* Nota */}
            <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/85">
              {includeNote}
            </div>

            {/* CTA en caja (hover renovado igual que el principal) */}
            <div className="mb-5 flex justify-center">
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onCta}
                className={[
                  "group relative inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-extrabold text-black",
                  "bg-gradient-to-r from-amber-400 to-amber-300",
                  "shadow-[0_12px_28px_-10px_rgba(251,191,36,.45)]",
                  "transition-all duration-300 ease-out",
                  "hover:from-amber-300 hover:to-amber-500",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/60",
                ].join(" ")}
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
                Quiero acceder por ${price}
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10l-3.293-3.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Urgencia línea */}
            <div className="mb-5 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-white/5 px-4 py-2">
                <svg className="h-5 w-5 text-amber-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.72-1.36 3.485 0l6.518 11.596c.75 1.335-.213 2.995-1.742 2.995H3.48c-1.53 0-2.492-1.66-1.742-2.995L8.257 3.1zM10 7a1 1 0 00-1 1v3.5a1 1 0 002 0V8a1 1 0 00-1-1zm0 7a1.25 1.25 0 100 2.5A1.25 1.25 0 0010 14z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">
                  Solo quedan <span className="font-bold text-white">{available}</span> lugares disponibles
                </span>
              </div>
            </div>

            {/* Beneficios */}
            <div className="mb-6 flex flex-col items-center justify-center gap-3 text-sm sm:flex-row">
              <div className="flex items-center gap-2 rounded-lg bg-green-500/10 px-4 py-2 text-green-300">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-white/90">{benefitsLeft}</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-green-500/10 px-4 py-2 text-green-300">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-white/90">{benefitsRight}</span>
              </div>
            </div>

            {/* Imagen inferior */}
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src={bottomImageSrc}
                alt="Equipo / caso de éxito Coinnecta"
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
