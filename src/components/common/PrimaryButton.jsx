function PrimaryButton({
  text,
  onClick,
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      w-full
      h-14
      rounded-2xl
      font-semibold
      text-lg
      transition-all
      duration-300
      active:scale-95

      ${
        disabled
          ? "bg-gray-300 text-gray-500"
          : "bg-black text-white hover:bg-gray-900"
      }
      `}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;