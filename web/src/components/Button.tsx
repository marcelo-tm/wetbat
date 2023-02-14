type ButtonProps = {
  label: string;
  onClick: () => void;
};

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full bg-custom-dark-green text-white font-bold ring-0 outline-none focus:border-0"
    >
      {label}
    </button>
  );
}
