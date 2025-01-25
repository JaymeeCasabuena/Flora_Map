type AlertProps = {
  children: React.ReactNode;
};

const Alert = ({ children }: AlertProps) => {
  return (
    <div className="p-2 rounded bg-red-500 text-white p-3 mb-4">{children}</div>
  );
};

export default Alert;
