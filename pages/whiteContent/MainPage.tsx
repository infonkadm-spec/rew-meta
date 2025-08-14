"use client";

import { motion } from "framer-motion";

export default function MainPage() {
  return (
    <div className="min-h-screen w-full">
      {/* HERO - Branco */}
      <section className="w-full bg-section-white">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Content Flow Mastery™
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
              Starter Pass
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl text-slate-600 max-w-3xl mx-auto font-light"
          >
            Start with clarity. Create consistently. Publish without stress.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Starter Pass is your entry ticket to installing a simple and sustainable content creation system. 
            No tricks, no overblown promises — just organization, focus, and a plan you can actually keep.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex flex-col items-center justify-center mb-6">
              <span className="text-sm text-slate-600 mb-2">Investment</span>
              <div className="text-5xl font-extrabold text-slate-900 bg-gradient-to-r from-blue-100 to-purple-100 px-8 py-3 rounded-full shadow-sm">
                $27
              </div>
            </div>
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg transform hover:scale-105"
              onClick={() => window.open("https://pay.hotmart.com/V101200307F?off=aphu9vik&checkoutMode=10", "_blank")}
            >
              Get Starter Pass Now
            </button>
            <p className="text-sm text-slate-500">Instant access | 100% digital | Lifetime access</p>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM - Cinza claro */}
      <section className="w-full bg-section-slate-100">
        <div className="max-w-4xl mx-auto px-4 py-20 space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">
            Does this sound like you?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "You have ideas, but when you sit down to create, you go blank.",
              "You post \"when you can\" and it frustrates you.",
              "You waste time hunting for files, versions, and references.",
              "You watch others move forward and think: \"I could do that… if I had a system.\""
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-sm border border-slate-200"
              >
                <p className="text-lg text-slate-800">{item}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200"
          >
            <p className="text-lg text-slate-800">
              If any of this resonates, <strong>Starter Pass was designed for you</strong>. 
              This is not a magic results promise; it&apos;s a clear structure to move forward without chaos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SOLUTION - Azul escuro */}
      <section className="w-full bg-section-slate-900">
        <div className="max-w-4xl mx-auto px-4 py-20 space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
            When you remove improvisation, creation becomes lighter.
          </h2>
          <p className="text-lg text-slate-200 text-center max-w-3xl mx-auto">
            Starter Pass guides you step-by-step to:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Define your focus: what to create and why.",
              "Plan by week/month with a realistic calendar.",
              "Structure pieces (idea → outline → publication) without wasted time.",
              "Organize assets (files, versions, creatives) with a simple system.",
              "Install 15–30 minute rituals to maintain consistency."
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-800 rounded-lg border border-slate-700"
              >
                <p className="text-lg text-slate-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDES - Branco */}
      <section className="w-full bg-section-white">
        <div className="max-w-4xl mx-auto px-4 py-20 space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">Includes:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Foundation & clarity: framework for selecting topics and formats.",
              "Plan & calendar: sustainable frequency + editable template.",
              "Outlines & prep: piece structure, pre-publish checklist, and version control.",
              "File organization: master folders, naming, and backups.",
              "Consistency & review: short routines and light evaluations.",
              "Extras: editorial calendar, publishing checklist, mini time-blocking guide."
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

      {/* BENEFITS - Cinza escuro */}
      <section className="w-full bg-section-slate-800">
        <div className="max-w-4xl mx-auto px-4 py-20 space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">Benefits:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Immediate clarity: know what to create and when.",
              "Less friction: less doubt, more action.",
              "Perceived quality: coherent, organized output.",
              "Transferable to any format/platform."
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-700 rounded-lg border border-slate-600"
              >
                <p className="text-lg text-slate-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY - Branco */}
      <section className="w-full bg-section-white">
        <div className="max-w-4xl mx-auto px-4 py-20 space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">Delivery:</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Member's area with video lessons and downloadable materials.",
              "Practical, straight-to-the-point methodology.",
              "Access to progress at your own pace."
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-100 rounded-lg shadow-sm border border-slate-200 text-center"
              >
                <p className="text-lg text-slate-800">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Cinza claro */}
      <section className="w-full bg-section-slate-100">
        <div className="max-w-4xl mx-auto px-4 py-20 space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">FAQ:</h2>
          <div className="grid gap-6">
            {[
              {
                q: "Works if I'm starting from zero?",
                a: "Yes."
              },
              {
                q: "Paid tools required?",
                a: "No, optional only."
              },
              {
                q: "Works without showing my face?",
                a: "Yes."
              },
              {
                q: "Guarantees income?",
                a: "No, this is educational training."
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

      {/* CTA - Azul escuro */}
      <section className="w-full bg-section-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4 py-20 space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Ready to install your content creation system?
          </h2>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto">
            This program is educational. It does not offer income promises or guaranteed results. 
            Always follow the policies of the platform(s) where you publish.
          </p>
          <button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg transform hover:scale-105"
            onClick={() => window.open("https://pay.hotmart.com/V101200307F?off=aphu9vik&checkoutMode=10", "_blank")}
          >
            Get Starter Pass Now
          </button>
        </div>
      </section>
    </div>
  );
}
  