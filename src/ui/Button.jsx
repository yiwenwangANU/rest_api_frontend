function Button({ variant = "primary", children, ...props }) {
  const baseStyles = "px-4 py-2 text-xl";

  const variantStyles = {
    primary: "bg-yellow-500 text-purple-950 w-fit shadow-2xl capitalize",
    secondary: "font-bold border-2 border-white text-white",
  };
  return (
    <button className={`${baseStyles} ${variantStyles[variant]} `} {...props}>
      {children}
    </button>
  );
}

export default Button;
