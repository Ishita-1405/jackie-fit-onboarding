function MobileLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex justify-center items-center p-4">
      <div
        className="
          w-full
          max-w-[430px]
          min-h-screen
          bg-white
          rounded-none
          md:rounded-[32px]
          shadow-2xl
          overflow-hidden
          relative
        "
      >
        {children}
      </div>
    </div>
  );
}

export default MobileLayout;