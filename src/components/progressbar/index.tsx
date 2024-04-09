import "./index.css";

type PropsProgress = {
  value: number;
};

export const ProgressBar = ({ value }: PropsProgress) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: value > 100 ? "100%" : `${value}%` }}
      ></div>
    </div>
  );
};
