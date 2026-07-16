import { ProgressBar } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ProgressBar
        visible={true}
        height="80"
        width="80"
        borderColor="#ff0"
        ariaLabel="progress-bar-loading"
        barColor={"#f00"}
      />
    </div>
  );
}
