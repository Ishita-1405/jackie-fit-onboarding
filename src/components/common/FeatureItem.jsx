import { CheckCircle2 } from "lucide-react";

function FeatureItem({ text }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2
        size={20}
        className="text-blue-600"
      />

      <p className="text-[15px] text-gray-700">
        {text}
      </p>
    </div>
  );
}

export default FeatureItem;