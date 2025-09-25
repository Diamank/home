import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diamank Finance LTDA",
  description: "Antecipação de Recebíveis com Segurança e Agilidade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
