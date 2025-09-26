"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  TrendingUp,
  Timer,
  FileText,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

// ⚙️ Configuração rápida — troque pelos seus dados
const COMPANY = {
  name: "Diamank Finance ",
  cnpj: "61.390.573/0001-63",
  email: "diamank@diamank.com",
  phone: "+55 14 99776-9095",
  whatsapp: "+55 14 99776-9095", // usado no botão principal
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
            <div className="h-9 w-9 rounded-lg overflow-hidden">
              <Image
                src="/logo.png"
                alt="Diamank Finance"
                width={36}
                height={36}
                className="object-contain"
              />
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
            <a href="#segunda-via" className="hover:text-white">
              2ª via de boleto
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
              Área do Cedente
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,224,164,0.2),transparent_60%)]" />
        <Container className="py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              Antecipação de Recebíveis com{" "}
              <span className="text-emerald-400">Segurança</span> e{" "}
              <span className="text-emerald-400">Agilidade</span>
            </motion.h1>
            <p className="mt-5 text-slate-300 text-lg max-w-xl">
              Operamos com contratos digitais, análise de risco eficiente e
              atendimento consultivo para manter seu caixa saudável.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WHATS_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition"
              >
                Falar com especialista <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-xl transition"
              >
                Solicitar simulação
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-lg text-sm">
              <Badge icon={<Timer className="h-4 w-4" />} label="Análise rápida" />
              <Badge
                icon={<TrendingUp className="h-4 w-4" />}
                label="Taxas competitivas"
              />
              <Badge
                icon={<FileText className="h-4 w-4" />}
                label="Compliance e contratos"
              />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src="/user.png"
                alt="Profissionais de finanças analisando recebíveis"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-black/60 backdrop-blur px-5 py-4 rounded-2xl border border-white/10 shadow-lg">
              <p className="text-sm text-slate-200">Portal do Cedente</p>
              <p className="text-xs text-slate-400">
                Acompanhe operações, borderôs e liquidações em tempo real.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 md:py-24">
        <SectionTitle
          eyebrow="Serviços"
          title="O que fazemos"
          subtitle="Fomento mercantil com foco em PME: operação transparente, documentação clara e acompanhamento próximo."
        />
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<TrendingUp className="h-6 w-6" />}
              title="Antecipação de Recebíveis"
              desc="Converta suas vendas a prazo em capital imediato para crescer com previsibilidade."
            />
            <ServiceCard
              icon={<FileText className="h-6 w-6" />}
              title="Desconto de Duplicatas"
              desc="Liquidez rápida com análise de sacados e gestão de títulos end-to-end."
            />
            <ServiceCard
              icon={<Timer className="h-6 w-6" />}
              title="Gestão de Risco"
              desc="Políticas e contratos digitais, checagens e monitoramento de carteira."
            />
          </div>
        </Container>
      </section>

      {/* Como funciona */}
      <section
        id="como-funciona"
        className="py-16 md:py-24 bg-slate-950/40 border-y border-white/10"
      >
        <SectionTitle
          eyebrow="Passo a passo"
          title="Como funciona"
          subtitle="Processo simples e 100% digital."
        />
        <Container>
          <ol className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: 1,
                t: "Envie suas notas",
                d: "Compartilhe NF-e/XML/PDF e dados do sacado.",
              },
              {
                n: 2,
                t: "Receba proposta",
                d: "Analisamos risco e apresentamos taxa e prazo.",
              },
              { n: 3, t: "Antecipe o valor", d: "Assine e receba os recursos." },
            ].map((s) => (
              <li
                key={s.n}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-emerald-500 text-black grid place-content-center font-bold">
                  {s.n}
                </div>
                <h3 className="text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-slate-300 text-sm">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <a
              href={WHATS_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition"
            >
              Quero começar agora <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>

      {/* 2ª via de boletos */}
      <section id="segunda-via" className="py-16 md:py-24 bg-slate-950/40 border-y border-white/10">
        <SectionTitle
          eyebrow="Boletos"
          title="2ª via de boleto"
          subtitle="Informe o CNPJ do sacado e o número da nota para localizar o boleto."
        />
        <Container>
          <BoletoForm />
        </Container>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="py-16 md:py-24 bg-slate-950/40 border-y border-white/10"
      >
        <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            <Faq
              q="É empréstimo?"
              a="Não. É fomento mercantil: você vende o recebível e recebe à vista, sem contrair dívida."
            />
            <Faq
              q="Quais documentos preciso?"
              a="NF-e/XML/PDF, dados do sacado e cadastro do cedente. Pode haver pedidos adicionais."
            />
            <Faq
              q="Em quanto tempo recebo?"
              a="Após aprovação e assinatura digital, normalmente em até 24h úteis."
            />
            <Faq
              q="Atendem todo o Brasil?"
              a="Sim, o processo é 100% digital. Atendimento consultivo por WhatsApp e e-mail."
            />
          </div>
        </Container>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 md:py-24">
        <SectionTitle
          eyebrow="Contato"
          title="Solicite uma simulação"
          subtitle="Retornamos rapidamente com uma avaliação inicial."
        />
        <Container>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget as HTMLFormElement);
              const nome = String(f.get("nome") || "");
              const tel = String(f.get("telefone") || "");
              const cnpj = String(f.get("cnpj") || "");
              const email = String(f.get("email") || "");
              const texto = `Olá, sou ${nome}. Meu CNPJ é ${cnpj}. Telefone: ${tel}. E-mail: ${email}. Gostaria de antecipar meu recebimentos.`;
              const url = `https://wa.me/${COMPANY.whatsapp.replace(
                /\D/g,
                ""
              )}?text=${encodeURIComponent(texto)}`;
              window.open(url, "_blank");
            }}
            className="mx-auto max-w-2xl grid md:grid-cols-2 gap-4"
          >
            <input
              name="nome"
              required
              placeholder="Nome"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              name="cnpj"
              required
              placeholder="CNPJ"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              name="telefone"
              required
              placeholder="Telefone"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <textarea
              name="mensagem"
              placeholder="Mensagem (opcional)"
              className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 min-h-[120px]"
            />
            <button
              type="submit"
              className="md:col-span-2 inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition"
            >
              Enviar pelo WhatsApp <MessageCircle className="h-4 w-4" />
            </button>
          </form>
        </Container>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-white/10 py-10">
        <Container className="grid md:grid-cols-3 gap-6 items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Diamank Finance"
                  width={36}
                  height={36}
                  className="object-contain"
                />
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
                <a className="hover:underline" href="#segunda-via">
                  2ª via de boleto
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

/* ------- Componentes auxiliares ------- */

function BoletoForm() {
  const [cnpj, setCnpj] = useState("");
  const [numero, setNumero] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState<string | null>(null);

  function maskCNPJ(v: string) {
    const s = v.replace(/\D/g, "").slice(0, 14);
    return s
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3/$4")
      .replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, "$1.$2.$3/$4-$5");
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMensagem(null);
    setLoading(true);

    // 🔜 Integração com backend virá depois.
    setTimeout(() => {
      setLoading(false);
      setMensagem(`(Prévia) Pronto para integrar: CNPJ=${cnpj} | Nota=${numero}`);
    }, 600);
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-2xl grid md:grid-cols-2 gap-4">
      <input
        value={cnpj}
        onChange={(e) => setCnpj(maskCNPJ(e.target.value))}
        placeholder="CNPJ do sacado"
        inputMode="numeric"
        required
        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <input
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Número da nota"
        required
        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <button
        type="submit"
        disabled={loading}
        className="md:col-span-2 inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-black font-semibold px-6 py-3 rounded-xl transition"
      >
        {loading ? "Buscando..." : "Consultar boleto"}
      </button>

      {mensagem && (
        <p className="md:col-span-2 text-sm text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-xl px-4 py-3">
          {mensagem}
        </p>
      )}
    </form>
  );
}

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
