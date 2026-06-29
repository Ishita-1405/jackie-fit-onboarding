function PageTitle({
  title,
  subtitle,
}) {
  return (
    <>
      <h1
        className="
        text-4xl
        font-bold
        leading-tight
        tracking-tight
        text-[#111]
        "
      >
        {title}
      </h1>

      {subtitle && (
        <p
          className="
          mt-5
          text-gray-500
          leading-7
          text-lg
          "
        >
          {subtitle}
        </p>
      )}
    </>
  );
}

export default PageTitle;