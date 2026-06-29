function ChoiceCard({
  icon,
  title,
  subtitle,
  selected,
  onClick,
  badge,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        rounded-3xl
        border-2
        p-4
        text-left
        transition-all
        duration-300
        hover:shadow-lg
        hover:-translate-y-1
        ${
          selected
            ? "border-black bg-gray-50 shadow-xl"
            : "border-gray-200 bg-white"
        }
      `}
    >
      <div className="flex justify-between items-start">

        <div className="flex-1">

          <div className="text-3xl text-gray-800">
            {icon}
          </div>

          <h3 className="mt-3 text-xl font-semibold text-gray-900">
            {title}
          </h3>

          <p className="mt-2 text-[15px] text-gray-500 leading-6">
            {subtitle}
          </p>

        </div>

        <span
          className="
            bg-blue-100
            text-blue-700
            text-[11px]
            font-semibold
            px-3
            py-1
            rounded-full
            whitespace-nowrap
          "
        >
          {badge}
        </span>

      </div>
    </button>
  );
}

export default ChoiceCard;