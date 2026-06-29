import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

import MobileLayout from "../components/layout/MobileLayout";

function Success() {

  useEffect(() => {

    const timer = setTimeout(() => {

      window.location.href =
        "https://jackie-jeans.vercel.app/";

    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <MobileLayout>

      <div className="min-h-screen flex flex-col justify-center items-center px-8 text-center">

        <CheckCircle2
          size={90}
          className="text-green-600"
        />

        <h1 className="text-4xl font-bold mt-8">
          Perfect!
        </h1>

        <p className="text-gray-500 mt-5 leading-7 text-center">
             Your personalized fit profile is ready.
        </p>

        <p className="mt-4 text-gray-400 text-center">
             Redirecting you to Jackie Jeans...
        </p>

        <div className="w-full bg-gray-200 rounded-full h-3 mt-10">

          <div
            className="bg-black h-full rounded-full animate-pulse w-full"
          />

        </div>

        <p className="mt-6 text-sm text-gray-400">

          Redirecting...

        </p>

      </div>

    </MobileLayout>

  );

}

export default Success;