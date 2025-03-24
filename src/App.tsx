import { Route, Routes } from "react-router-dom";
import Content from "./pages/Content";
import { Navbar } from "./components/Navbar";
import Writings from "./pages/Writings";
import Home from "./pages/Home";
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import NotFound from "./pages/NotFound";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <LoadingScreen
          onComplete={() => {
            setIsLoaded(true);
          }}
        />
      )}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-[#f5f5f7]`}
      >
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Content />} />
          <Route path="/writings" element={<Writings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
