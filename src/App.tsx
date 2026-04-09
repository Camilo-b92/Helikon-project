import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import ComicPage from "./pages/ComicPage";
import HelikonPage from "./pages/HelikonPage";
import HomePage from "./pages/HomePage";
import JuanesPage from "./pages/JuanesPage";
import SiteFooter from "./components/SiteFooter";

export default function App() {
  const location = useLocation();
  const showFooter = location.pathname !== "/";

  return (
    <div className="app-shell">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/juanes" element={<JuanesPage />} />
          <Route path="/helikon" element={<HelikonPage />} />
          <Route path="/comic" element={<ComicPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {showFooter ? <SiteFooter /> : null}
    </div>
  );
}
