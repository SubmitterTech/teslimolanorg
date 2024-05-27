import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Content from "./components/Articles/Content";
import NewsSlider from "./components/NewsSlider/NewsSlider";
import PerspectiveContent from "./components/Perspectives/PerspectiveContent";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/makaleler/namazda-ayaktayken-neden-sadece-fatiha-okumaliyiz" element={<Content/>}/>
        <Route path="/news-slider" element={<NewsSlider/>}/>
        <Route path="/perspektifler" element={<PerspectiveContent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
