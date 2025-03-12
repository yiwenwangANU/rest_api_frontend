function Button({ variant = "primary", children, ...props }) {
  const baseStyles =
    "px-3 py-2 font-semibold w-fit shadow-2xl capitalize hover:cursor-pointer transition duration-300";

  const variantStyles = {
    primary: "bg-yellow-500 text-purple-950 rounded hover:bg-yellow-600",
    rounded: "bg-yellow-500 text-purple-950 rounded-3xl hover:bg-yellow-600",
    warning: "bg-red-500 text-white rounded hover:bg-red-700",
    logo: "rounded-none font-bold border-2 border-white text-white",
  };
  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
