import { Routes, Route } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.scss';
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage"
import MainPage from "./pages/MainPage";

function App() {



  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
      </Route>

    
    </Routes>
  );
}

export default App;
