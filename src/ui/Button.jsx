function Button({ variant = "primary", children, ...props }) {
  const baseStyles = "px-3 py-2 font-bold text-xl";

  const variantStyles = {
    primary: "bg-yellow-500 text-purple hover:bg-blue-600 shadow",
    secondary: "border-2 border-white text-white hover:bg-gray-400",
  };
  return (
    <div className={`${baseStyles} ${variantStyles[variant]} `} {...props}>
      {children}
    </div>
  );
}

export default Button;
