import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Content from "./components/Articles/Content";
import NewsSlider from "./components/NewsSlider/NewsSlider";
import PerspectiveContent from "./components/Perspectives/PerspectiveContent";
import VideoContent from "./components/Videos/VideoContent";
import AllPerspectives from "./components/Perspectives/AllPerspectives";
import AllArticles from "./components/Articles/AllArticles";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/makale/namazda-ayaktayken-neden-sadece-fatiha-okumaliyiz" element={<Content/>}/>
        <Route path="/news-slider" element={<NewsSlider/>}/>
        <Route path="/perspektif" element={<PerspectiveContent/>}/>
        <Route path="/perspektifler" element={<AllPerspectives/>}/>
        <Route path="/videolar" element={<VideoContent/>}/>
        <Route path="/makaleler" element={<AllArticles/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
