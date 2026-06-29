import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ClipboardList,
  Mic,
} from "lucide-react";
import { motion } from "framer-motion";

import MobileLayout from "../components/layout/MobileLayout";
import PrimaryButton from "../components/common/PrimaryButton";
import ChoiceCard from "../components/common/ChoiceCard";

function ChooseMethod() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  const handleContinue = () => {
    if (selected === "manual") {
      navigate("/manual");
    } else if (selected === "voice") {
      navigate("/voice");
    }
  };

  return (
    <MobileLayout>
      <div className="min-h-screen flex flex-col px-6 py-8">

        {/* Back Button */}

        <button
          onClick={() => navigate("/welcome")}
          className="mb-8 w-fit transition hover:opacity-70"
        >
          <ArrowLeft size={24} />
        </button>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl font-bold leading-tight">
            How would you
            <br />
            like to get fitted?
          </h1>

          <p className="text-gray-500 mt-4 leading-7">
            Choose your preferred onboarding experience.
          </p>
        </motion.div>

        {/* Choice Cards */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 space-y-4"
        >
          <ChoiceCard
            icon={<ClipboardList size={34} />}
            title="Manual Quiz"
            subtitle="Answer a few quick questions at your own pace."
            badge="Recommended"
            selected={selected === "manual"}
            onClick={() => setSelected("manual")}
          />

          <ChoiceCard
            icon={<Mic size={34} />}
            title="AI Voice Stylist"
            subtitle="Speak naturally while our AI collects your fit profile."
            badge="Voice AI"
            selected={selected === "voice"}
            onClick={() => setSelected("voice")}
          />
        </motion.div>

        <div className="flex-1" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <PrimaryButton
            text="Continue →"
            onClick={handleContinue}
            disabled={!selected}
          />
        </motion.div>

      </div>
    </MobileLayout>
  );
}

export default ChooseMethod;