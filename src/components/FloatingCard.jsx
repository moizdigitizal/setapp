export function FloatingCard({
  text,
  bgColor,
  textColor = "#1F2937",
  rotation = 0,
  className = "",
  shape = "rounded", // "circle" | "square" | "rounded" | "curvy" | "roundedBorderSquare"
  size = 96, // px (used for square-based shapes)
  borderColor = "#000",
  borderWidth = 2,
}) {
  const squareShapes = [
    "circle",
    "square",
    "curvy",
    "roundedBorderSquare",
  ];

  const shapeClasses = {
    circle:
      "rounded-full aspect-square flex items-center justify-center p-4",
    square:
      "rounded-none aspect-square flex items-center justify-center p-4",
    rounded:
      "rounded-lg px-4 py-2",
    curvy:
      "rounded-[40%] aspect-square flex items-center justify-center p-4",
    roundedBorderSquare:
      "rounded-xl aspect-square flex items-center justify-center p-4",
  };

  const isCenteredShape = squareShapes.includes(shape);

  return (
    <div
      className={`absolute ${shapeClasses[shape]} ${className}`}
      style={{
        background: bgColor,
        width: isCenteredShape ? size : "auto",
        height: isCenteredShape ? size : "auto",
        transform: `rotate(${rotation}deg)`,
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        border:
          shape === "roundedBorderSquare"
            ? `${borderWidth}px solid ${borderColor}`
            : "none",
      }}
    >
      <span
        className="font-bold text-xs uppercase tracking-wider whitespace-nowrap text-center"
        style={{
          color: textColor,
          transform: isCenteredShape
            ? `rotate(${-rotation}deg)`
            : "none",
        }}
      >
        {text}
      </span>
    </div>
  );
}
