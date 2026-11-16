import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { LodgePage } from "./pages/LodgePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="lodge" element={<LodgePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
