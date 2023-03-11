import { Routes, Route } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.scss';
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route path="/" element={<LoginPage/>}/>
      </Route>

    
    </Routes>
  );
}

export default App;
