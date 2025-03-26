import { Route, Routes } from "react-router-dom";
import Content from "./pages/Content";
import { Navbar } from "./components/Navbar";
import Writings from "./pages/Writings";
import Home from "./pages/Home";
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import NotFound from "./pages/NotFound";
import { Analytics } from '@vercel/analytics/react';
import { Helmet } from 'react-helmet-async';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Helmet>
        <meta name="description" content="Atharv Kotekar's Portfolio" />
        <meta name="author" content="Atharv Kotekar" />
        <meta name="keywords" content="Atharv Kotekar, Portfolio, Atharv, Kotekar, Developer, Coder, Atharv Kotekar Portfolio, Atharv Kotekar Developer, Atharv Kotekar Coder" />
        <meta name="url" content="https://atharvkotekar.com" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="google-site-verification" content="google-site-verification=google-site-verification" />
        <meta name="google-site-verification" content="google-site-verification=google-site-verification" />
        <meta name='reply-to' content='yo@atharvkotekar.com' />
        <meta name='copyright' content='Atharv Kotekar' />
        <meta name='language' content='English' />
        
      </Helmet>
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
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Analytics />
    </>
  );
}

export default App;
