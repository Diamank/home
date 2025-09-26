import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,        // ok usar a pública
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!    // usar ANON no server aqui
);

export async function POST(req: Request) {
  try {
    const { cnpj, numero } = await req.json();

    if (!cnpj || !numero) {
      return NextResponse.json(
        { error: "Preencha CNPJ e número da nota." },
        { status: 400 }
      );
    }

    const cnpjDigits = String(cnpj).replace(/\D/g, "");
    const numeroStr = String(numero).trim();

    // JOIN: notas ↔ sacados
    const { data, error } = await supabase
      .from("notas")
      .select("id, numero, link_boleto, pago, sacado_id, sacados: sacados!inner(id, cnpj)")
      .eq("numero", numeroStr)
      .eq("sacados.cnpj", cnpjDigits)
      .limit(1)
      .maybeSingle();

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Erro ao consultar boleto." }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json(
        { error: "Nota não encontrada para este CNPJ." },
        { status: 404 }
      );
    }

    if (!data.link_boleto) {
      return NextResponse.json(
        { error: "Esta nota não possui link de boleto cadastrado." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      link_boleto: data.link_boleto,
      numero: data.numero,
      pago: data.pago ?? null,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Falha na requisição." }, { status: 500 });
  }
}
