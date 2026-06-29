import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import MobileLayout from "../components/layout/MobileLayout";
import ProgressBar from "../components/quiz/ProgressBar";
import QuestionRenderer from "../components/quiz/QuestionRenderer";
import PrimaryButton from "../components/common/PrimaryButton";

import quizData from "../data/quizData";

function ManualQuiz() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = quizData[current];

  const handleAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [question.key]: value,
    }));
  };

  const next = () => {
    if (current === quizData.length - 1) {
      navigate("/review", {
        state: answers,
      });
      return;
    }

    setCurrent((prev) => prev + 1);
  };

  const previous = () => {
    if (current === 0) {
      navigate("/choose");
      return;
    }

    setCurrent((prev) => prev - 1);
  };

  const answer = answers[question.key];

  const canContinue =
    question.optional ||
    (Array.isArray(answer) ? answer.length > 0 : !!answer);

  return (
    <MobileLayout>
      <div className="min-h-screen flex flex-col px-6 py-8">

        {/* Back Button */}

        <button
          onClick={previous}
          className="w-fit mb-6"
        >
          <ArrowLeft size={24} />
        </button>

        {/* Progress */}

        <ProgressBar
          current={current + 1}
          total={quizData.length}
        />

        {/* Question */}

        <h2 className="text-3xl font-bold mt-2">
          {question.question}
        </h2>

        {/* Multi Select Hint */}

        {question.type === "multi" && (
          <p className="text-gray-500 mt-3 mb-6">
            Select all that apply.
          </p>
        )}

        {/* Input */}

        <div className="mt-6">
          <QuestionRenderer
            question={question}
            value={answers[question.key]}
            onChange={handleAnswer}
          />
        </div>

        <div className="flex-1" />

        {/* Bottom Buttons */}

        <div className="mt-10">

          {question.optional && (
            <button
              onClick={next}
              className="text-gray-500 mb-4"
            >
              Skip
            </button>
          )}

          <PrimaryButton
            text={
              current === quizData.length - 1
                ? "Review Answers"
                : "Continue"
            }
            onClick={next}
            disabled={!canContinue}
          />

        </div>

      </div>
    </MobileLayout>
  );
}

export default ManualQuiz;