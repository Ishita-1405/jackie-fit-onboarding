function QuestionRenderer({
  question,
  value,
  onChange,
}) {
  switch (question.type) {

    case "select":
      return (
        <select
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-4 rounded-2xl border text-lg"
        >
          <option value="">Select</option>

          {question.options.map((option) => (
            <option key={option}>
              {option}
            </option>
          ))}
        </select>
      );

    case "number":
      return (
        <input
          type="number"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter weight"
          className="w-full p-4 rounded-2xl border text-lg"
        />
      );

    case "radio":
      return (
        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => onChange(option)}
              className={`w-full p-4 rounded-2xl border text-left transition ${
                value === option
                  ? "border-black bg-gray-100"
                  : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      );

    case "multi":
  return (
    <div className="space-y-3">
      {question.options.map((option) => {
        const selected = value || [];

        return (
          <button
            key={option}
            onClick={() => {
              if (selected.includes(option)) {
                onChange(selected.filter((item) => item !== option));
              } else {
                onChange([...selected, option]);
              }
            }}
            className={`w-full p-4 rounded-2xl border text-left transition ${
              selected.includes(option)
                ? "border-black bg-gray-100"
                : ""
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );

default:
  return null;
  }
}

export default QuestionRenderer;