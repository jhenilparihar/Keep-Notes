import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<NotesListPage />} />
              <Route path="/note/:id" element={<NotePage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
