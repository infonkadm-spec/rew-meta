"use client";

import { motion } from "framer-motion";

export default function MainPage() {
  return (
    <div className="min-h-screen w-full">
      {/* HERO - Branco */}
      <section className="w-full bg-section-white">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            🚨 Una nueva habilidad digital que nadie te enseñó en la escuela…
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Descubre cómo personas comunes están generando valor real en plataformas plataformas digitales, sin vender, sin aparecer y sin necesidad de seguidores.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex flex-col items-center justify-center mb-6">
              <span className="text-sm text-slate-600 mb-2">Inversión única de</span>
              <div className="text-5xl font-extrabold text-slate-900 bg-yellow-100 px-8 py-3 rounded-full shadow-sm">
                $21.90
              </div>
            </div>
            <button
              className="bg-slate-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-lg"
              onClick={() => window.open("https://pay.hotmart.com/V101200307F?off=aphu9vik&checkoutMode=10", "_blank")}
            >
              Acceder al curso ahora
            </button>
            <p className="text-sm text-slate-500">Acceso inmediato | Material 100% online | Cupos limitados</p>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM - Cinza claro */}
      <section className="w-full bg-section-slate-100">
        <div className="max-w-3xl mx-auto px-4 py-20 space-y-8">
          <h2 className="text-3xl font-semibold text-slate-900 text-center">¿Estás cansado de cursos que prometen dinero fácil y no cumplen?</h2>
          <div className="space-y-6 text-slate-700">
            <p className="text-lg">
              La mayoría de los cursos digitales hoy repiten la misma fórmula:
              &quot;Gana dinero desde casa con tu celular&quot;, &quot;Haz clics y gana cientos al día&quot;, &quot;No necesitas saber nada...&quot;
            </p>
            <p className="text-lg">¿El problema? Muchos de estos métodos:</p>
            <ul className="space-y-4 pl-4 text-left">
              {[
                "No funcionan.",
                "Exigen inversión en anuncios.",
                "Y terminan siendo más complicados de lo que prometen."
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-lg"
                >
                  <span className="text-slate-900 font-bold">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DIFFERENT - Azul escuro */}
      <section className="w-full bg-section-slate-900">
        <div className="max-w-3xl mx-auto px-4 py-20 space-y-8">
          <h2 className="text-3xl font-semibold text-white text-center">Este curso es diferente. Aquí no hay promesas vacías.</h2>
          <div className="space-y-6 text-slate-200">
            <p className="text-lg">
              <strong className="text-white">Tarifa de Inscripción</strong> es un programa educativo que te enseña, paso a paso, cómo usar plataformas digitales para
              <strong className="text-white"> generar valor de forma oculta</strong>, sin exponerte, sin vender y sin crear contenido propio desde cero.
            </p>
            <p className="text-lg">No prometemos ganancias. Enseñamos una habilidad digital moderna, real, validada y en crecimiento.</p>
          </div>
        </div>
      </section>

      {/* LEARN - Branco */}
      <section className="w-full bg-section-white">
        <div className="max-w-3xl mx-auto px-4 py-20 space-y-8">
          <h2 className="text-3xl font-semibold text-slate-900 text-center">¿Qué vas a aprender en este curso?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Cómo funcionan los modelos ocultos de generación de contenido anônimo",
              "Cómo estructurar canales digitales sin aparecer",
              "Cómo monetizar de forma indirecta sin vender nada",
              "Qué herramientas usar para automatizar procesos simples",
              "Cómo evitar errores que podrían bloquear tu cuenta"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-100 rounded-lg shadow-sm border border-slate-200"
              >
                <p className="text-lg text-slate-800">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENTS - Cinza escuro */}
      <section className="w-full bg-section-slate-800">
        <div className="max-w-3xl mx-auto px-4 py-20 space-y-8">
          <h2 className="text-3xl font-semibold text-white text-center">Más de 1.400 estudiantes ya aplicaron este conocimiento.</h2>
          <p className="text-lg text-slate-200 text-center">
            Personas de México, Colombia, Estados Unidos, Chile y España ya están aprovechando esta nueva forma de operar en plataformas digitales.<br/>
            No es magia. Es una metodología. Y tú puedes aplicarla también, desde hoy.
          </p>
        </div>
      </section>

      {/* INCLUDES - Branco */}
      <section className="w-full bg-section-white">
        <div className="max-w-3xl mx-auto px-4 py-20 space-y-8">
          <h2 className="text-3xl font-semibold text-slate-900 text-center">¿Qué incluye tu acceso?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Acceso completo e inmediato a todos los módulos",
              "Actualizaciones gratuitas",
              "Plataforma privada con soporte directo",
              "Garantía de satisfacción de 60 días"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-100 rounded-lg shadow-sm border border-slate-200"
              >
                <p className="text-lg text-slate-800">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Azul escuro */}
      <section className="w-full bg-section-slate-900 text-center">
        <div className="max-w-3xl mx-auto px-4 py-20 space-y-8">
          <h2 className="text-3xl font-semibold text-white">Esta es tu oportunidad de aprender algo que casi nadie está enseñando.</h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            No necesitas experiencia. No necesitas cámara. No necesitas aparecer.<br />
            Solo necesitas una conexión a internet y la voluntad de aprender algo que puede abrir nuevas puertas en tu vida digital.
          </p>
          <button
            className="bg-white text-slate-900 px-8 py-4 rounded-lg font-medium hover:bg-slate-100 transition-colors shadow-lg"
            onClick={() => window.open("https://pay.hotmart.com/V101200307F?off=aphu9vik&checkoutMode=10", "_blank")}
          >
            Quiero acceder ahora
          </button>
        </div>
      </section>

      {/* FAQ - Cinza claro */}
      <section className="w-full bg-section-slate-100">
        <div className="max-w-3xl mx-auto px-4 py-20 space-y-8">
          <h2 className="text-3xl font-semibold text-slate-900 text-center">Preguntas frecuentes</h2>
          <div className="grid gap-6">
            {[
              {
                q: "¿Necesito experiencia previa?",
                a: "No. El curso fue creado para principiantes."
              },
              {
                q: "¿El curso promete dinero rápido?",
                a: "No. Enseñamos habilidades digitales modernas, no promesas financieras."
              },
              {
                q: "¿Cuánto tiempo necesito dedicar?",
                a: "Recomendamos al menos 30 minutos al día."
              },
              {
                q: "¿Puedo acceder desde mi país?",
                a: "Sí, el curso está disponible para toda América Latina y España."
              },
              {
                q: "¿Tienen soporte?",
                a: <a href="mailto:soporte@tarifadeinscripcion.online" className="font-medium text-slate-900 underline hover:text-slate-700">soporte@tarifadeinscripcion.online</a>
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-sm border border-slate-200"
              >
                <h3 className="text-lg font-semibold mb-3 text-slate-900">{faq.q}</h3>
                <p className="text-slate-700">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
  