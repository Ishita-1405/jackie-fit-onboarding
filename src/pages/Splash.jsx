import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import MobileLayout from "../components/layout/MobileLayout";
import Logo from "../components/common/Logo";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 2200);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MobileLayout>
      <div className="h-screen flex flex-col items-center justify-center px-8">

        <motion.div
          initial={{ opacity: 0, scale: .85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .6 }}
        >
          <Logo />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mt-8 text-4xl font-bold text-[#111111]"
        >
          Jackie Jeans
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="mt-3 text-gray-500 text-center"
        >
          Find your perfect fit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .9 }}
          className="mt-10 flex gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
        </motion.div>

      </div>
    </MobileLayout>
  );
}

export default Splash;