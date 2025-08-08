import ConfettiEffect from "@/components/Confetti";

export default function White() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-section-white">
        <section className="w-full bg-section-white border-b border-slate-100">
          <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-8">
            <div className="text-2xl md:text-3xl font-bold text-yellow-600 flex flex-col items-center gap-2">
              <span>⚠️ Antes de que cierres esta página…</span>
            </div>
            <p className="text-lg text-slate-800">
              Sabemos que el momento de decisión a veces necesita un respiro.<br/>
              Pero también sabemos que las oportunidades no siempre se repiten.
            </p>
            <p className="text-lg text-slate-800">
              Por eso activamos un acceso especial por tiempo limitado para ti:
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-6 space-y-3">
              <div className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <span>🎓 Tarifa de Inscripción</span>
              </div>
              <div className="text-base text-slate-700">
                Curso digital sobre plataformas de contenido y creación estructurada sin exposición personal
              </div>
            </div>
            <div className="text-base text-slate-700">
              Miles de personas ya han descubierto cómo organizar y construir presencia digital de forma anónima, segura y sin complicaciones técnicas.<br/>
              Tú puedes hacerlo también — y ahora, con acceso preferencial:
            </div>
            <div className="text-2xl font-bold text-green-700">
              🔓 De US$ 21,90 → US$ 17,90
            </div>
            <div className="text-base text-slate-700">
              Sin apps. Sin exposición. Sin presión.<br/>
              Solo contenido práctico, directo y diseñado para que aprendas a operar con tranquilidad en el entorno digital actual.
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-left">
              <div className="text-lg font-semibold text-slate-900 mb-2">🧩 ¿Qué vas a encontrar dentro?</div>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Lecciones 100% online, disponibles en cualquier dispositivo</li>
                <li>Métodos de estructura y entrega de contenido oculto</li>
                <li>Herramientas recomendadas para organizar tu flujo digital</li>
                <li>Acceso inmediato, soporte por correo y actualizaciones incluidas</li>
              </ul>
            </div>
            <div className="text-base text-slate-700">
              ⏰ Esta oferta estará activa solo durante esta visita<br/>
              Después, el acceso vuelve al valor original.<br/>
              Si este es tu momento, estamos listos para recibirte del otro lado.
            </div>
            <a
              href="https://pay.hotmart.com/V101200307F?off=t6b7icez&checkoutMode=10"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors shadow-lg text-lg mt-4"
              target="_blank" rel="noopener noreferrer"
            >
              👉 Quiero acceder con el descuento especial
            </a>
          </div>
        </section>
        <ConfettiEffect />
      </div>
    </>
  );
} 