import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "../pages/Splash";
import Welcome from "../pages/Welcome";
import ChooseMethod from "../pages/ChooseMethod";
import ManualQuiz from "../pages/ManualQuiz";
import VoiceQuiz from "../pages/VoiceQuiz";
import Review from "../pages/Review";
import Success from "../pages/Success";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/choose" element={<ChooseMethod />} />
        <Route path="/manual" element={<ManualQuiz />} />
        <Route path="/voice" element={<VoiceQuiz />} />
        <Route path="/review" element={<Review />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
