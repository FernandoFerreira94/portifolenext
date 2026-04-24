import { db } from "@/service/fireBaseConective";
import { collection, addDoc, serverTimestamp } from "firebase/firestore/lite";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, project, budget, timeline, email } = body;

    // 1. Persistência no Firestore
    const docRef = await addDoc(collection(db, "leads"), {
      name,
      project,
      budget: budget || "Não informado",
      timeline: timeline || "Não informado",
      email: email || "Não informado",
      createdAt: serverTimestamp(),
      source: "chatbot",
    });

    // 2. Notificação por E-mail via Resend
    if (resend) {
      await resend.emails.send({
        from: "Chatbot <onboarding@resend.dev>", // Ou seu domínio verificado
        to: "fernandoferreiraphp@gmail.com", // E-mail do Fernando
        subject: `Novo Lead: ${name}`,
        html: `
          <h1>Novo Lead Capturado pelo Chatbot</h1>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Projeto:</strong> ${project}</p>
          <p><strong>Orçamento:</strong> ${budget}</p>
          <p><strong>Timeline:</strong> ${timeline}</p>
          <p><strong>Email:</strong> ${email}</p>
          <br/>
          <p>ID do Documento: ${docRef.id}</p>
        `,
      });
    }

    return new Response(JSON.stringify({ success: true, id: docRef.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Erro ao processar lead:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
