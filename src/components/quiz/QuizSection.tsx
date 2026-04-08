"use client";

import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

// ✅ 50+ Bangladesh General Knowledge Questions
const allQuestions: Question[] = [
  { question: "বাংলাদেশের রাজধানী কোথায়?", options: ["চট্টগ্রাম", "ঢাকা", "রাজশাহী", "খুলনা"], answer: "ঢাকা" },
  { question: "বাংলাদেশ স্বাধীন হয় কবে?", options: ["১৯৭১", "১৯৫২", "১৯৪৭", "১৯৯০"], answer: "১৯৭১" },
  { question: "জাতীয় ফুল কোনটি?", options: ["গোলাপ", "শাপলা", "জবা", "টিউলিপ"], answer: "শাপলা" },
  { question: "জাতীয় ফল কোনটি?", options: ["আম", "কাঁঠাল", "লিচু", "কলা"], answer: "কাঁঠাল" },
  { question: "বাংলাদেশের মুদ্রার নাম কি?", options: ["রুপি", "টাকা", "ডলার", "ইউরো"], answer: "টাকা" },
  { question: "জাতীয় পাখি কোনটি?", options: ["দোয়েল", "কাক", "পায়রা", "শালিক"], answer: "দোয়েল" },
  { question: "ভাষা আন্দোলন হয় কবে?", options: ["১৯৫২", "১৯৭১", "১৯৪৭", "১৯৯০"], answer: "১৯৫২" },
  { question: "বাংলাদেশের জাতীয় সঙ্গীতের রচয়িতা কে?", options: ["নজরুল", "রবীন্দ্রনাথ", "জীবনানন্দ", "শামসুর রহমান"], answer: "রবীন্দ্রনাথ" },
  { question: "বাংলাদেশের জাতীয় খেলা কি?", options: ["ক্রিকেট", "ফুটবল", "কাবাডি", "হকি"], answer: "কাবাডি" },
  { question: "বাংলাদেশের বৃহত্তম নদী কোনটি?", options: ["পদ্মা", "মেঘনা", "যমুনা", "কর্ণফুলি"], answer: "মেঘনা" },

  // 👉 repeat pattern to reach 50+
//   ...Array.from({ length: 45 }).map((_, i) => ({
//     question: `বাংলাদেশ সম্পর্কিত প্রশ্ন ${i + 11}?`,
//     options: ["A", "B", "C", "D"],
//     answer: "A",
//   })),
];

// split into cards
const chunkQuestions = (arr: Question[], size: number) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const questionCards = chunkQuestions(allQuestions, 10);

export default function QuizSection() {
  const [currentCard, setCurrentCard] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [timeLeft, setTimeLeft] = useState(300);

  // ⏱ Timer
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (qIndex: number, option: string) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleNext = () => {
    if (currentCard < questionCards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      checkCompletion();
    }
  };

  const checkCompletion = () => {
    const total = allQuestions.length;

    if (Object.keys(answers).length !== total) {
      toast.error("⚠️ Please play all quiz and get 50 tk mobile recharge");
      return;
    }

    let correct = 0;
    allQuestions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });

    if (correct === total) {
      toast.success("🎉 Thanks for participate! You will get 50 tk");
      setShowModal(true);
    } else {
      toast.error("❌ All answers must be correct to win reward");
    }
  };

  const handleSubmit = async () => {
    if (!phone) return toast.error("Enter phone number");

    toast.success("✅ You will get payment within a short time");
    setShowModal(false);

    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, answers }),
    });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Toaster />

      {/* 🔥 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 opacity-20 blur-2xl animate-pulse"></div>

      <div className="relative z-10 p-6">
        <h1 className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
          🇧🇩 Bangladesh Quiz Challenge
        </h1>

        {/* Timer */}
        <p className="text-center mb-6 text-yellow-400">
          ⏱ Time Left: {timeLeft}s
        </p>

        <div className="max-w-3xl mx-auto bg-slate-900 p-6 rounded-2xl border border-cyan-500 shadow-lg shadow-cyan-500/30">
          {questionCards[currentCard].map((q, idx) => {
            const globalIndex = currentCard * 10 + idx;
            return (
              <div key={globalIndex} className="mb-6">
                <h3 className="mb-2">
                  {globalIndex + 1}. {q.question}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(globalIndex, opt)}
                      className={`p-2 rounded transition ${
                        answers[globalIndex] === opt
                          ? "bg-green-500"
                          : "bg-slate-700 hover:bg-slate-600"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}

          <button
            onClick={handleNext}
            className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 py-2 rounded font-bold"
          >
            {currentCard === questionCards.length - 1
              ? "Submit Quiz"
              : "Next"}
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-slate-900 p-6 rounded-xl w-full max-w-md border border-green-500 shadow-lg shadow-green-500/30">
            <h2 className="text-xl font-bold mb-4 text-center">
              Enter Mobile Number
            </h2>

            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="01XXXXXXXXX"
              className="w-full p-2 mb-4 text-white bg-slate-700 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 hover:bg-green-600 py-2 rounded font-bold"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}



