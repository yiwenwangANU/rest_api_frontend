function Button({ variant = "primary", children, ...props }) {
  const baseStyles =
    "px-4 py-2 text-xl w-fit shadow-2xl capitalize hover:cursor-pointer";

  const variantStyles = {
    primary: "bg-yellow-500 text-purple-950 rounded",
    rounded: "bg-yellow-500 text-purple-950 rounded-3xl",
    warning: "bg-red-300 text-white rounded",
    logo: "rounded-none font-bold border-2 border-white text-white rounded",
  };
  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
