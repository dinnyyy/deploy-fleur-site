import Countdown from "../components/countdown";
/*import { Link } from "react-router-dom";
 */
export function CountdownPage() {
  const targetDate = "2024-09-20T00:00:00";
  return (
    <div className="timer">
      <div className="wrapper">
        <Countdown targetDate={targetDate} />
      </div>
    </div>
    
  );
}
