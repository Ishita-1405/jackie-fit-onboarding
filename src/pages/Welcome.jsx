import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import MobileLayout from "../components/layout/MobileLayout";
import PrimaryButton from "../components/common/PrimaryButton";
import FeatureItem from "../components/common/FeatureItem";

import jeansImage from "../assets/images/jeans.jpg";

function Welcome() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="min-h-screen flex flex-col">

        {/* HERO IMAGE */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[42vh] bg-[#F8F8F8] rounded-b-[36px] overflow-hidden flex items-center justify-center"
        >
          <img
            src={jeansImage}
            alt="Premium Jeans"
            className="w-[88%] h-[88%] object-contain"
          />

          {/* Small Badge */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute top-6 right-6"
          >
            <div className="bg-black text-white px-4 py-2 rounded-full shadow-lg">
              <p className="text-xs font-semibold">
                AI Powered
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CONTENT */}

        <div className="flex-1 px-7 py-8 flex flex-col">

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[38px] font-bold leading-[42px] tracking-tight"
          >
            Find Your
            <br />
            Perfect Fit
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-5 text-gray-500 leading-7"
          >
            Discover jeans tailored to your body in under
            2 minutes using our AI-powered fit experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 space-y-4"
          >
            <FeatureItem text="AI Stylist" />
            <FeatureItem text="Personalized Fit" />
            <FeatureItem text="No Guesswork" />
          </motion.div>

          <div className="flex-1"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <PrimaryButton
              text="Find My Perfect Fit →"
              onClick={() => navigate("/choose")}
            />
          </motion.div>

        </div>
      </div>
    </MobileLayout>
  );
}

export default Welcome;