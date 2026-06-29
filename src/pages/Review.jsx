import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import MobileLayout from "../components/layout/MobileLayout";
import PrimaryButton from "../components/common/PrimaryButton";

function Review() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const answers = state || {};

  const labels = {
    height: "Height",
    weight: "Weight (kg)",
    waist: "Waist Measurement",
    hip: "Hip Measurement",
    waistFit: "Waist Fit",
    rise: "Waistband Position",
    thigh: "Thigh Fit",
    brands: "Brands You've Worn",
    size: "Usual Size",
    frustration: "Biggest Fit Frustration",
  };

  return (
    <MobileLayout>
      <div className="min-h-screen px-6 py-8 flex flex-col">

        {/* Back */}

        <button
          onClick={() => navigate(-1)}
          className="mb-6 w-fit"
        >
          <ArrowLeft />
        </button>

        {/* Heading */}

        <h1 className="text-3xl font-bold">
          Review Your Answers
        </h1>

        <p className="text-gray-500 mt-3 mb-8">
          Please review your fit profile before continuing.
        </p>

        {/* Answers */}

        <div className="space-y-4 flex-1 overflow-y-auto">

          {Object.entries(answers).map(([key, value]) => (

            <div
              key={key}
              className="rounded-2xl border border-gray-200 p-4 flex justify-between items-start bg-white shadow-sm"
            >
              <div>

                <p className="text-sm text-gray-500">
                  {labels[key] || key}
                </p>

                <p className="font-semibold mt-1 text-gray-900">
                  {Array.isArray(value)
                    ? value.join(", ")
                    : value || "-"}
                </p>

              </div>

              <CheckCircle2
                size={22}
                className="text-green-600"
              />

            </div>

          ))}

        </div>

        {/* Finish Button */}

        <div className="mt-10">
          <PrimaryButton
            text="Finish"
            onClick={() => navigate("/success")}
          />
        </div>

      </div>
    </MobileLayout>
  );
}

export default Review;