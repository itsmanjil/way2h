import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./ThemeReducer";
import GlobalStyles from "../styles/GlobalStyles";
import ContactSection from "../pages/ContactSection";
import LogIn from "../pages/logIn";
import Header from "../pages/Header";
// import SignUp from "./components/SignUp/SignUp";

const sighUpform = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={{ theme }}>
        <GlobalStyles />
        <Header />
        <LogIn />

        {/* <ContactSection /> */}
      </ThemeProvider>
    </>
  );
};

export default sighUpform;
