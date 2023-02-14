interface InputContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  error: boolean;
}

export function InputContainer({
  label,
  error,
  children,
  className,
}: InputContainerProps) {
  return (
    <div
      className={`p-2 ${className ? className : ""}  ${
        error ? "bg-red-100" : "bg-gray-100"
      }`}
    >
      <p
        className={`text-[0.6rem] font-semibold uppercase ${
          error ? "text-red-400 " : "text-gray-400 "
        }`}
      >
        {label}
      </p>
      <div className="py-1 text-sm">{children}</div>
    </div>
  );
}
