"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface CardProgress {
  completedGames: number[];
  finished: boolean;
}

const cardTitles = [
  "Demo Card",
  "Starter Pack",
  "Silver Pack",
  "Gold Pack",
  "Pro Pack",
  "Elite Pack",
  "Ultimate Pack",
];

export default function GamesSection() {
  const [premium, setPremium] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeGame, setActiveGame] = useState<number | null>(null);
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [phone, setPhone] = useState("");

  const [guessInput, setGuessInput] = useState("");
  const [mathAnswer, setMathAnswer] = useState("");
  const [mathQuestion, setMathQuestion] = useState(generateMath());
  const [clickCount, setClickCount] = useState(0);

  const [progress, setProgress] = useState<CardProgress[]>(
    cardTitles.map(() => ({
      completedGames: [],
      finished: false,
    }))
  );

  function generateMath() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return { question: `${a} + ${b}`, answer: a + b };
  }

  // ================= PAYMENT =================
  const handleUnlock = () => {
    setPremium(true);
    toast.success("Premium Activated!");
  };

  // ================= COMPLETE GAME =================
  const completeGame = (cardIndex: number, gameIndex: number) => {
    const updated = [...progress];

    if (!updated[cardIndex].completedGames.includes(gameIndex)) {
      updated[cardIndex].completedGames.push(gameIndex);
    }

    const required = cardIndex === 0 ? 1 : 4;

    if (updated[cardIndex].completedGames.length === required) {
      updated[cardIndex].finished = true;
      setShowRewardModal(true);
    }

    setProgress(updated);
    setActiveGame(null);
    toast.success("Game Completed!");
  };

  // ================= REWARD SUBMIT =================
  const handleRewardSubmit = () => {
    if (!phone) {
      toast.error("Enter mobile number");
      return;
    }

    toast.success("Payment request successful!");
    setPhone("");
    setShowRewardModal(false);
  };

  return (
    <section className="min-h-screen bg-black text-white py-20">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          🎮 Play & Complete Games
        </h2>

        {!premium && (
          <div className="text-center mb-8">
            <button
              onClick={handleUnlock}
              className="bg-green-500 px-6 py-3 rounded-lg font-bold"
            >
              Pay & Unlock Premium
            </button>
          </div>
        )}

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardTitles.map((title, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">{title}</h3>

              <p className="text-sm mb-2">
                Completed: {progress[index].completedGames.length}/
                {index === 0 ? 1 : 4}
              </p>

              <button
                disabled={!premium || progress[index].finished}
                onClick={() => setActiveCard(index)}
                className={`w-full py-2 rounded-lg font-bold ${
                  progress[index].finished
                    ? "bg-gray-600"
                    : premium
                    ? "bg-cyan-400 text-black"
                    : "bg-red-500"
                }`}
              >
                {progress[index].finished
                  ? "Completed"
                  : premium
                  ? "Play"
                  : "Locked"}
              </button>
            </div>
          ))}
        </div>

        {/* GAME AREA */}
        {activeCard !== null && premium && (
          <div className="mt-12 bg-slate-900 p-8 rounded-2xl">

            <h3 className="text-xl font-bold mb-6">
              Playing: {cardTitles[activeCard]}
            </h3>

            {/* GAME 1: Number Guess */}
            {(activeCard === 0 || activeGame === 0) && (
              <div className="mb-6">
                <h4 className="mb-2">Number Guess (1-5)</h4>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={guessInput}
                  onChange={(e) => setGuessInput(e.target.value)}
                  className="text-black p-2 rounded mr-2"
                />
                <button
                  onClick={() => {
                    const rand = Math.floor(Math.random() * 5) + 1;
                    if (parseInt(guessInput) === rand) {
                      completeGame(activeCard, 0);
                    } else {
                      toast.error("Wrong guess!");
                    }
                  }}
                  className="bg-blue-500 px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            )}

            {/* For cards 2–7 show 4 games */}
            {activeCard !== 0 && (
              <>
                {/* Dice Game */}
                <button
                  onClick={() => {
                    const roll = Math.floor(Math.random() * 6) + 1;
                    if (roll >= 4) completeGame(activeCard, 1);
                    else toast.error("Dice too low!");
                  }}
                  className="bg-purple-500 px-4 py-2 rounded mb-4"
                >
                  🎲 Roll Dice (Need 4+)
                </button>

                {/* Math Game */}
                <div className="mb-4">
                  <p>{mathQuestion.question}</p>
                  <input
                    value={mathAnswer}
                    onChange={(e) => setMathAnswer(e.target.value)}
                    className="text-black p-2 rounded mr-2"
                  />
                  <button
                    onClick={() => {
                      if (
                        parseInt(mathAnswer) === mathQuestion.answer
                      ) {
                        completeGame(activeCard, 2);
                        setMathQuestion(generateMath());
                      } else {
                        toast.error("Wrong answer");
                      }
                    }}
                    className="bg-yellow-500 px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                </div>

                {/* Click Speed */}
                <div>
                  <p>Click 5 times fast!</p>
                  <button
                    onClick={() => {
                      const newCount = clickCount + 1;
                      setClickCount(newCount);
                      if (newCount === 5) {
                        completeGame(activeCard, 3);
                        setClickCount(0);
                      }
                    }}
                    className="bg-pink-500 px-4 py-2 rounded"
                  >
                    Click ({clickCount}/5)
                  </button>
                </div>
              </>
            )}

          </div>
        )}

        {/* REWARD MODAL */}
        {showRewardModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
            <div className="bg-slate-900 p-8 rounded-2xl w-96">
              <h3 className="text-xl font-bold mb-4">
                Submit Mobile Number
              </h3>
              <input
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-black p-2 rounded mb-4"
              />
              <button
                onClick={handleRewardSubmit}
                className="w-full bg-green-500 py-2 rounded font-bold"
              >
                Submit Request
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}