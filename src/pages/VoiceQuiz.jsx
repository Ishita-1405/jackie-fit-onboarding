import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MobileLayout from "../components/layout/MobileLayout";
import PrimaryButton from "../components/common/PrimaryButton";

import quizData from "../data/quizData";
import { speak, listen } from "../utils/speech";
import normalizeAnswer from "../utils/normalizeAnswer";

function VoiceQuiz() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [status, setStatus] = useState("Ready");
  const [running, setRunning] = useState(false);
  const [retryMode, setRetryMode] = useState(false);
  const [retryIndex, setRetryIndex] = useState(0);

  async function askQuestion(index, previousAnswers = {}) {

    if (index >= quizData.length) {

      navigate("/review", {
        state: previousAnswers,
      });

      return;
    }

    const question = quizData[index];

    setCurrent(index);

    setStatus("AI is speaking...");

    await speak(question.question);

    setStatus("Listening...");

    try {

      let response;

try {
  response = await listen();
} 
catch (err) {

  setStatus("🎤 Microphone didn't catch your answer.");

  await speak(
    "Sorry, I didn't catch that. Please tap the microphone and answer again."
  );

  setRetryMode(true);
  setRetryIndex(index);

}
      const normalized = normalizeAnswer(
        question,
        response
      );

      const updatedAnswers = {
        ...previousAnswers,
        [question.key]: normalized,
      };

      setAnswers(updatedAnswers);

      setStatus(
        `Recorded: ${
          Array.isArray(normalized)
            ? normalized.join(", ")
            : normalized
        }`
      );

      await speak("Got it.");

      setTimeout(() => {

        askQuestion(
          index + 1,
          updatedAnswers
        );

      }, 700);

    } catch (err) {

  if (err === "timeout") {

    setStatus("No response detected.");

    await speak(
      "I didn't hear any response. Please tap the microphone and answer again."
    );

  } else {

    setStatus("I couldn't understand your answer.");

    await speak(
      "Sorry, I couldn't understand that. Please tap the microphone and answer again."
    );

  }

  setRetryMode(true);
  setRetryIndex(index);

}
  }

  async function startConversation() {

    if (running) return;

    setRunning(true);

    setAnswers({});

    await speak(
      "Hello. Welcome to Jackie Jeans. I am your AI Fit Stylist. Let's find your perfect fit."
    );

    askQuestion(0, {});
  }
  async function retryListening() {

  setRetryMode(false);

  askQuestion(
    retryIndex,
    answers
  );

}
    return (
    <MobileLayout>
      <div className="min-h-screen flex flex-col px-6 py-8">

        {/* Heading */}

        <h1 className="text-4xl font-bold text-center">
          AI Voice Stylist
        </h1>

        <p className="text-center text-gray-500 mt-4 leading-7">
          I'll ask a few questions and record your answers using your voice.
        </p>

        {/* Progress */}

        <div className="mt-10">

          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>
              Question {Math.min(current + 1, quizData.length)}
            </span>

            <span>
              {quizData.length}
            </span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">

            <div
              className="h-full bg-black transition-all duration-500"
              style={{
                width: `${
                  ((current + 1) / quizData.length) * 100
                }%`,
              }}
            />

          </div>

        </div>

        {/* Current Question */}

        <div className="mt-10 rounded-3xl border border-gray-200 bg-white shadow-sm p-6">

          <p className="text-sm text-gray-500">
            Current Question
          </p>

          <h2 className="text-2xl font-semibold mt-3 leading-snug">
            {quizData[current]?.question}
          </h2>

        </div>

        {/* Status */}

        <div className="mt-8 rounded-2xl bg-blue-50 p-5">

          <p className="text-sm text-gray-500">
            Status
          </p>

          <p className="text-blue-700 font-semibold mt-2">
            {status}
          </p>

        </div>

        {/* Answers Preview */}

        {Object.keys(answers).length > 0 && (

          <div className="mt-8">

            <p className="font-semibold mb-3">
              Recorded Answers
            </p>

            <div className="space-y-3 max-h-52 overflow-y-auto">

              {Object.entries(answers).map(([key, value]) => (

                <div
                  key={key}
                  className="border rounded-xl p-3 bg-gray-50"
                >

                  <p className="text-xs text-gray-500 capitalize">
                    {key}
                  </p>

                  <p className="font-medium mt-1">

                    {Array.isArray(value)
                      ? value.join(", ")
                      : value}

                  </p>

                </div>

              ))}

            </div>

          </div>

        )}
        {retryMode && (

  <div className="mt-8 rounded-3xl border-2 border-blue-500 bg-blue-50 p-6 text-center animate-pulse">

    <div className="text-5xl">
      🎤
    </div>

    <h3 className="font-semibold text-lg mt-4">
      Tap to Speak Again
    </h3>

    <p className="text-gray-600 mt-2">
      We couldn't hear your answer.
    </p>

  </div>

)}

        <div className="flex-1" />

        {retryMode ? (

  <PrimaryButton
    text="🎤 Tap to Speak Again"
    onClick={retryListening}
  />

) : (

  <PrimaryButton
    text={
      running
        ? "Conversation Running..."
        : "Start Voice Onboarding"
    }
    onClick={startConversation}
    disabled={running}
  />

)}

      </div>
    </MobileLayout>
  );
}

export default VoiceQuiz;