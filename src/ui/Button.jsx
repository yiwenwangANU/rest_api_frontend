function Button({ variant = "primary", children, ...props }) {
  const baseStyles =
    "px-3 font-semibold w-fit shadow-2xl capitalize hover:cursor-pointer transition duration-300";

  const variantStyles = {
    primary: "py-2 bg-yellow-500 text-purple-950 rounded hover:bg-yellow-600",
    secondary:
      "py-2 bg-purple-900 text-yellow-500 rounded-full hover:bg-purple-950",
    rounded:
      "py-2 bg-yellow-500 text-purple-950 rounded-3xl hover:bg-yellow-600",
    rounded_sm:
      "bg-yellow-500 text-purple-950 rounded-3xl hover:bg-yellow-600 text-xs h-5 py-0",
    warning: "py-2 bg-red-500 text-white rounded hover:bg-red-700",
    logo: "py-2 rounded-none font-bold border-2 border-white text-white",
  };
  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
