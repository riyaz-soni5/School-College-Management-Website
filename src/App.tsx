import Header from "./components/Header";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import AcademicPrograms from "./pages/Academic-Programs.tsx";
import News from "./pages/News.tsx";
import Admission from "./pages/Admission.tsx";
// import Plus2Page from "./pages/Plus2Page.tsx";
// import SeePage from "./pages/SeePage.tsx";
import NewsDetails from "./pages/NewsDetails.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academic-programs/*" element={<AcademicPrograms />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
