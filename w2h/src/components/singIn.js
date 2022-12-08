import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./components/ThemeReducer";
import GlobalStyles from "./styles/GlobalStyles";
import LogIn from "./pages/logIn";
import Header from "./pages/Header";
import SignUp from "./components/SignUp/SignUp";
import ContactSection from "../pages/ContactSection";

const sighUpform = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={{ theme }}>
        <GlobalStyles />
        <Header />
        {/* <LogIn /> */}

        <ContactSection />
      </ThemeProvider>
    </>
  );
};

export default sighUpform;
