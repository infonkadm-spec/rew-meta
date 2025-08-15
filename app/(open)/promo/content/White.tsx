import ConfettiEffect from "@/components/Confetti";

export default function White() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-section-white">
        <section className="w-full bg-section-white border-b border-slate-100">
          <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-8">
            <div className="text-2xl md:text-3xl font-bold text-yellow-600 flex flex-col items-center gap-2">
              <span>⚠️ Before you close this page...</span>
            </div>
            <p className="text-lg text-slate-800">
              We know that sometimes you need a moment to make a decision.<br/>
              But we also know that opportunities don&apos;t always come back.
            </p>
            <p className="text-lg text-slate-800">
              That&apos;s why we&apos;ve activated a special limited-time access for you:
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-6 space-y-3">
              <div className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <span>🎓 Content Flow Mastery™: Starter Pass</span>
              </div>
              <div className="text-base text-slate-700">
                Start with clarity. Create consistently. Publish without stress.
              </div>
            </div>
            <div className="text-base text-slate-700">
              Install a simple and sustainable content creation system. No tricks, no overblown promises — just organization, focus, and a plan you can actually keep.<br/>
              You can do this too — and now, with preferential access:
            </div>
            <div className="text-2xl font-bold text-green-700">
              🔓 From $27 → $21
            </div>
            <div className="text-base text-slate-700">
              No tricks. No overblown promises.<br/>
              Just organization, focus, and a plan you can actually keep.
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-left">
              <div className="text-lg font-semibold text-slate-900 mb-2">🧩 What&apos;s included?</div>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Foundation & clarity: framework for selecting topics and formats</li>
                <li>Plan & calendar: sustainable frequency + editable template</li>
                <li>Outlines & prep: piece structure and version control</li>
                <li>File organization: master folders, naming, and backups</li>
                <li>Consistency & review: short routines and light evaluations</li>
              </ul>
            </div>
            <div className="text-base text-slate-700">
              ⏰ This offer is only active during this visit<br/>
              After that, access returns to the original price.<br/>
              If this is your moment, we&apos;re ready to welcome you on the other side.
            </div>
            <a
              href="https://pay.hotmart.com/K101259508B?off=knovnz2g&checkoutMode=10"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg transform hover:scale-105 text-lg mt-4"
              target="_blank" rel="noopener noreferrer"
            >
              👉 Get Starter Pass with Special Discount
            </a>
          </div>
        </section>
        <ConfettiEffect />
      </div>
    </>
  );
} 