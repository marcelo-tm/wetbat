import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/Home";
import { QuotesPage } from "./pages/Quotes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="quotes" element={<QuotesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
