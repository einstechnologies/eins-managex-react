interface Props {
  show: boolean;
}

const FullScreenLoader = ({ show }: Props) => {
  if (!show) return null;

  return (
    <div className="loader-overlay">
      <div className="modern-spinner"></div>
    </div>
  );
};

export default FullScreenLoader;
