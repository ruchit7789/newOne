import React from "react";
// // import Page2 from "./component2/Page2";

// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
// import Page2 from "./component2/Page2";
import Layout2 from "./Layout2";
import Layout3 from "./Layout3";
// import Pagee3 from "./component3/Pagee3";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout></Layout>}></Route>
          <Route path="/page" element={<Layout2></Layout2>}></Route>
          <Route path="/page2" element={<Layout3></Layout3>}></Route>
        </Routes>
      </BrowserRouter>
      {/* // <Page2></Page2> */}
      {/* <Pagee3></Pagee3> */}
    </>
  );
};

export default App;
