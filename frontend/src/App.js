import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Content from "./components/Articles/Content";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/makaleler/namazda-ayaktayken-neden-sadece-fatiha-okumaliyiz" element={<Content/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
