interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: JSX.Element;
  title: string;
  actions: JSX.Element;
}

export function Panel({
  icon,
  title,
  actions,
  children,
  className,
}: PanelProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>
      <div className="p-3 border-b-2 border-gray-200 flex justify-between">
        <div className="flex gap-2">
          <div className="text-custom-dark-green w-7 h-7">{icon}</div>
          <p className="text-custom-purple text-lg">{title}</p>
        </div>
        {actions}
      </div>
      <div>{children}</div>
    </div>
  );
}
