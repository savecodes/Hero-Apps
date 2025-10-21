const LoadingSpinner = ({ size = "lg" }) => {
  const colorStart = "#632EE3";
  const colorEnd = "#9F62F2";

  // Map Tailwind sizes
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className={`rounded-full animate-spin ${sizeClasses[size] || sizeClasses.lg}`}
        style={{
          borderTop: `3px solid ${colorStart}`,
          borderRight: `3px solid ${colorEnd}`,
          borderBottom: `3px solid transparent`,
          borderLeft: `3px solid transparent`,
        }}
        role="status"
        aria-label="Loading"
      ></div>
    </div>
  );
};

export default LoadingSpinner;