import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { CountdownPage } from "./pages/countdownPage";
import { TimelinePage } from "./pages/timelinePage";
import { QuizPage } from "./pages/quizPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<CountdownPage/>} />
          <Route path="/TimelinePage" element={<TimelinePage />} />
          <Route path="/quizPage" element={<QuizPage />} />
        </Routes>
      </Router>
  );
}
export default App;
