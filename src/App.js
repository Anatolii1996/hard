import { Routes, Route } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.scss';
import Chat from "./components/Chat";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage"
import MainPage from "./pages/MainPage";

function App() {



  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat" element={<Chat />}>
          <Route path="/chat/main" element={<MainPage />} />
        </Route>

      </Route>


    </Routes>
  );
}

export default App;
