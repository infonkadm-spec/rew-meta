"use client";

import { motion, AnimatePresence } from "framer-motion";
import VSLWhite from "@/components/videos/VSLWhite";
import { useState } from 'react';

export default function MainPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      {/* HERO - Branco */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
              Best Faceless YouTube Course
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-3xl mx-auto font-light">
              Learn exactly how to start and grow a faceless YouTube channel that can earn six-figures.
            </p>
            <div className="max-w-md mx-auto">
              <VSLWhite />
            </div>
            <button
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-4 text-white font-medium shadow-sm hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition"
              onClick={() => window.open("https://global.frendz.com.br/0m3qjtw1bk", "_blank")}
            >
              SIGN UP NOW
            </button>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM - Cinza claro */}
      <section className="w-full bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-8">
        <img src="coursesales-image1.png" alt="Course Sales Image" className="mx-auto rounded-3xl" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">What’s In The Course?</h3>
              <p className="text-slate-700">This is a detailed course that will teach you step by step how to start and grow a faceless YouTube channel or even a personal channel.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Why You Need It?</h3>
              <p className="text-slate-700">If you have struggled getting success on YouTube and want to learn how to build a real business to six-figures and more, this is the course for you.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Why This Over Others?</h3>
              <p className="text-slate-700">There are other YouTube courses on the market and some are quite good. The problem is almost all cost $500 or more. Our course is less than $100!</p>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW COURSE - Azul escuro */}
      <section className="w-full bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-10 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">
            Complete Course Overview
          </h2>
        </div>
      </section>

      {[...Array(12)].map((_, index) => (
        <section key={index} className={`w-full ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <img src={`/course-mod-${index + 1}.jpg`} alt={`Module ${index + 1}`} className="w-full md:w-1/3 rounded-lg shadow-sm border border-slate-200" />
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold text-slate-900">Module {index + 1}</h3>
                <p className="text-lg text-slate-700">
                  {index === 0 && `Choosing A Niche
How to choose the right niche for you
Types of faceless YouTube channels
Which YouTube niches pay the most
Which YouTube niches you MUST avoid
BONUS: 400+ Examples Niche Channels
and more…`}
                  {index === 1 && `Market Research
Coming up with initial niche ideas
How to analyze a niche
How to verify the profitability of a niche
and more…`}
                  {index === 2 && `Channel Optimization
Secrets to properly optimize your channel for success
How to write an optimized channel description
The best optimization settings that many channel creators forget
How to make sure to get advanced features enabled
and more…`}
                  {index === 3 && `Logo and Channel Art
Learn how to create channel art that will stand out
Discover the best place to create channel art
The best place to outsource the creation of channel art
and more…`}
                  {index === 4 && `Get Ready For Growth
The secret rule to uploading YouTube videos
How to dominate YouTube’s suggested videos
Keyword research secrets
Best tool to use for keyword research
What makes a viral video go viral
and more…`}
                  {index === 5 && `Video Creation System
The 5 parts to creating videos
Secrets to writing great scripts
Best ways to record great voice overs
Where to get free content for your videos
Best video editors
BONUS: List of all placed to get free stock footage, images and music
and more…`}
                  {index === 6 && `High CTR Thumbnails
Learn trade secrets to creating high CTR thumbnails
Key dimensions
9 characteristics of high CTR that you can apply now
Tracking CTR of thumbnails
How to create high CTR thumbnails yourself
Best place to create thumbnails
and more…`}
                  {index === 7 && `Uploading Optimization
The parts of a proper video uploading process
Key video optimization tactics most YouTubers ignore
Complete breakdown of the uploading process
and more…`}
                  {index === 8 && `The YouTube Algorithm
Factors that matter most to YouTube
How videos rank and how to beat the algorithm
How to increase watch time and session time
The science of going viral on YouTube
Worst mistakes people make on YouTube
and more…`}
                  {index === 9 && `Monetization Tactics
Every way to make money on YouTube
The one monetization strategy that many YouTubers miss
How to make money with ads
and more…`}
                  {index === 10 && `Outsourcing
How to properly outsource to scale and grow
Where to find freelancers you can hire
Two places you should use to hire freelancers
How to post a job and what your listing MUST include
What you should pay for outsourcing
and more…`}
                  {index === 11 && `The Complete Process
Complete video based guide from start to finish
Shows the complete faceless channel process
Step by step instructions to start and grow a channel
and more…`}
                  {index === 12 && `ChatGPT
How to use ChatGPT to create videos
Using ChatGPT to eliminate script writing
Generate content and video ideas
Using ChatGPT for video editing
and more…`}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* INCLUDES - Branco */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">
            Also Get Access To These 6 Bonuses
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Printable Guide', description: 'This guide will cover every step of the process that you need to use to make money on YouTube without showing your face.' },
              { title: 'Optimization Secrets', description: 'In-depth guides to help you properly create a YouTube channel and optimize it so it will rank on YouTube faster.' },
              { title: 'Checklists', description: 'These checklists will help you to understand what you need to be doing to gain success with your faceless YouTube channel.' },
              { title: 'Affiliate List', description: 'Gain access to a huge list of affiliate network and affiliate programs that you can use to monetize your channel.' },
              { title: 'Stock Footage List', description: 'We have included this complete list of every stock footage and stock image and photo website you should ever need.' },
              { title: 'Example Channels', description: 'As an added bonus gain access to a downloadable list of 400+ faceless YouTube channels for your inspiration.' }
            ].map((bonus, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
                <h3 className="text-lg font-semibold mb-3 text-slate-900 flex items-center">
                  <span className="mr-2">🎁</span> {bonus.title}
                </h3>
                <p className="text-slate-700">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVAS */}
      <section className="w-full bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-10 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">
            Are There Faceless Channels That Make Money?
          </h2>
        </div>
      </section>
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto">
            Yes, there are thousands of faceless YouTube channels that are making big money! In fact, there are YouTubers that make millions of dollars per year from their faceless YouTube channels. Below are a few examples of very profitable faceless YouTube channels.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <img src="viralbe-1-1024x740.jpg" alt="ViralBe Channel" className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">$969,000 Per Year</h3>
              <p className="text-slate-700">
                ViralBe is a channel in the animal niche that creates videos using stock footage, stock photos, background sounds and voice over. With these easy to create videos they are absolutely crushing it making $969,000 per year!
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <img src="darkskies1-1024x740.jpg" alt="Dark Skies Channel" className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">$250,000 Per Year</h3>
              <p className="text-slate-700">
                Dark Skies shows the world of aviation through cinematic short movies. They use historical images, stock video footage and voice over in easy to create videos and are making up to $250,000 per year!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* DELIVERY - Branco */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">
            Reasons To Get This Course Right Now
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🚀', title: 'Instant Access', description: 'You could spend countless hours trying to learn how to actually succeed on YouTube or you can access this course and start with actionable steps today.' },
              { icon: '💰', title: 'Best Pricing', description: 'Other YouTube courses on this topic or way overprices and most cost $500 ore more. Get our course for less than $150 for a limited time.' },
              { icon: '🔄', title: 'Free Updates', description: 'Stay up to date on what’s happening on YouTube and get access to new lesson additions to the course including new case studies.' },
              { icon: '🎓', title: 'For All Levels', description: 'This course is great for beginners as well as those who have experience on YouTube. It truly has content that will help everyone go to the next level.' }
            ].map((reason, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
                <h3 className="text-lg font-semibold mb-3 text-slate-900 flex items-center">
                  <span className="mr-2">{reason.icon}</span> {reason.title}
                </h3>
                <p className="text-slate-700">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Accordion estilo shadcn */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">
            Frequently Asked Questions
          </h2>
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            {[
              {
                question: 'Who is this course for?',
                answer: 'This course is designed for anyone who wants to learn how to create and grow a profitable YouTube channel. No matter what your level, if you’re just beginning or have been on YouTube for years, this course can help you take your business to the next level.'
              },
              {
                question: 'How is the course structured?',
                answer: 'The course has 12 video based modules with each module teaching you what you need to know at that time. By the time you’re done with all 12 modules you should know everything you need to start a grow a profitable YouTube channel.'
              },
              {
                question: 'What’s the format of the course?',
                answer: 'The course has 12 video based modules. The bonuses are delivered in downloadable PDF format so you can print them if you wish.'
              },
              {
                question: 'How do I get access and what happens after I sign up?',
                answer: 'After you make payment, you will get access to a PDF file that will contain instructions on how to register. Follow the instructions in that file to register your account and then we will activate your account within 6 hours. Please give us time to activate your account.'
              },
              {
                question: 'Isn’t everything in this course online for free already?',
                answer: 'You can find some of the material we offer in this course online. However, it will take you a lot of time to search for the material and even then, you will not have the in-depth content you will receive in this course and it’s all in one location! You don’t need to spend time trying to find it.'
              },
              {
                question: 'Is YouTube Too Competitive?',
                answer: 'Many people think that YouTube is too competitive and it’s not possible to make any real money. Is this true? NO! In fact, YouTube is growing faster than ever and more people are using YouTube everyday to search for content.\n\nIn fact, competition is not a bad thing on YouTube. If you’re in a competitive niche this means people are looking for that type of material. The more competitive the niche the better chance you have to get into the suggested feeds of popular channels which can cause your videos to grow exponentially.'
              },
              {
                question: 'I have another question…',
                answer: 'If you have more questions not covered here, please contact us.'
              }
            ].map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`group border-b last:border-b-0 border-slate-200`}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className={`w-full flex items-center justify-between gap-4 px-6 py-4 text-left transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${isOpen ? 'bg-slate-50' : ''}`}
                  >
                    <span className={`text-base md:text-lg font-medium ${isOpen ? 'text-slate-900' : 'text-slate-900'}`}>
                      {faq.question}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180 text-red-600' : 'rotate-0 text-slate-400 group-hover:text-slate-600'}`}
                    >
                      <path fillRule="evenodd" d="M12 14.5c-.256 0-.512-.098-.707-.293l-6-6a1 1 0 0 1 1.414-1.414L12 12.086l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-.707.293Z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-5 text-slate-700"
                      >
                        <p className="leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA - Azul escuro */}
      <section className="w-full bg-slate-50 text-center">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-8">
          <img src="course-image-computer.png" alt="Course Image" className="mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Ready To Make Money On YouTube?
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Get the introductory price for a limited time.
          </p>
          <button
            className="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-4 text-white font-medium shadow-sm hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 transition"
            onClick={() => window.open("https://global.frendz.com.br/0m3qjtw1bk", "_blank")}
          >
            SIGN UP NOW ONLY $24
          </button>
        </div>
      </section>
    </div>
  );
}
  