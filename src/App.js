import { Routes, Route } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.scss';
import Header from "./components/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/>}/>

    
    </Routes>
  );
}

export default App;
