"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  ShieldCheck,
  TrendingUp,
  Timer,
  FileText,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

// ⚙️ Configuração rápida — troque pelos seus dados
const COMPANY = {
  name: "Diamank Finance ",
  cnpj: "61.390.573/0001-63",
  email: "diamanl@diamank.com.br",
  phone: "+55 14 99842-3236",
  whatsapp: "+55 14 99842-3236", // usado no botão principal
  address: "Ourinhos/SP",
};

const WHATS_LINK = `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Olá! Quero antecipar minhas notas fiscais com a Diamank."
)}`;

function Container({ children, className = "" }: any) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p className="text-sm uppercase tracking-widest text-slate-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-300">{subtitle}</p>}
    </div>
  );
}

export default function Page() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-emerald-400/10 grid place-content-center">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
            </div>
            <span className="font-semibold">{COMPANY.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#servicos" className="hover:text-white">
              Serviços
            </a>
            <a href="#como-funciona" className="hover:text-white">
              Como funciona
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a href="#contato" className="hover:text-white">
              Contato
            </a>
            <a
              href="https://diamank.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 font-semibold"
            >
              Área do Cliente
            </a>
          </nav>
          <a
            href={WHATS_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-4 py-2 rounded-xl transition"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </Container>
      </header>

      {/* Hero */}
      {/* ... (mantém igual ao seu código anterior) ... */}

      {/* Rodapé */}
      <footer className="border-t border-white/10 py-10">
        <Container className="grid md:grid-cols-3 gap-6 items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-emerald-400/10 grid place-content-center">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
              </div>
              <span className="font-semibold">{COMPANY.name}</span>
            </div>
            <p className="mt-3 text-slate-400 text-sm">{COMPANY.address}</p>
            <p className="text-slate-400 text-sm">CNPJ {COMPANY.cnpj}</p>
            <p className="mt-3 flex items-center gap-2 text-slate-300 text-sm">
              <Phone className="h-4 w-4" /> {COMPANY.phone}
            </p>
            <p className="flex items-center gap-2 text-slate-300 text-sm">
              <Mail className="h-4 w-4" /> {COMPANY.email}
            </p>
          </div>
          <div className="text-sm text-slate-300">
            <h4 className="font-semibold mb-3">Links</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline" href="#servicos">
                  Serviços
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#como-funciona">
                  Como funciona
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#contato">
                  Contato
                </a>
              </li>
              <li>
                <a
                  className="hover:underline text-emerald-400 font-semibold"
                  href="https://diamank.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Área do Cliente
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm text-slate-300">
            <h4 className="font-semibold mb-3">Horário de atendimento</h4>
            <p className="text-slate-400">
              De segunda a sexta-feira, das 07:00 às 17:00.
            </p>
          </div>
        </Container>
        <Container className="mt-6">
          <p className="text-center text-xs text-slate-500">
            © {year} {COMPANY.name}. Todos os direitos reservados.
          </p>
        </Container>
      </footer>
    </main>
  );
}

/* 🔹 Componentes auxiliares mantidos do seu código anterior */
function Badge({ icon, label }: any) {
  return (
    <div className="flex items-center gap-2 text-slate-300">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10">
        {icon}
      </span>
      <span className="text-sm">{label}</span>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: any) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{desc}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border border-white/10 bg-white/5 p-6 group">
      <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
        {q}
        <ChevronRight className="transition group-open:rotate-90" />
      </summary>
      <p className="mt-3 text-slate-300 text-sm">{a}</p>
    </details>
  );
}
