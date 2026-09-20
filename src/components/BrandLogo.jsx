import site from "../data/site.json";

export default function BrandLogo({
  className = "",
  imageClassName = "h-8 w-8",
  nameClassName = "text-base",
  showImage = true,
}) {
  const { brand } = site;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {showImage && (
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          className={`${imageClassName} rounded-lg`}
        />
      )}

      <span
        className={`font-semibold text-white ${nameClassName}`}
        aria-label={brand.name}
      >
        {brand.name.split("").map((char, index) => {
          const isBrandLetter =
            char.toUpperCase() === "A" || char.toUpperCase() === "K";

          return (
            <span
              key={`${char}-${index}`}
              className={isBrandLetter ? "text-brand-500" : undefined}
            >
              {char}
            </span>
          );
        })}
      </span>
    </div>
  );
}
