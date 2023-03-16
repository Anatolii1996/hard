import { Routes, Route } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.scss';
import Chat from "./components/Chat";
import Header from "./components/Header";
import Results from "./components/ResultsPage";
import GamePage from "./pages/GamePage";
import LoginPage from "./pages/LoginPage"
import MainPage from "./pages/MainPage";

function App() {



  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat" element={<Chat />}>
          <Route path="/chat/main" element={<MainPage />} />
          <Route path="/chat/game" element={<GamePage />} />
          <Route path="/chat/result" element={<Results />} />
        </Route>

      </Route>


    </Routes>
  );
}

export default App;
