import React, { createContext } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

 const Name = createContext();

function App() {
  return (
    <>
      {/* <Router>
         <Switch> 
          <Route path exact="/" component={()=>(<Navbar />)}/>
          <Route path exact="/main">
            <Main title="Main Content" />
          </Route>
          <Route path="/footer">
            <Footer />
          </Route>
          </Switch>
      </Router> */}
     <Name.Provider value={"mudasser"}> 
      <Navbar links={
       {
       l1:'About',
       l2:'Home',
       l3:'More'
       }
     } />
     <Main title="Main Content"/>
     <Footer/>
     </Name.Provider>
    </>
  );
}

export default App;
export {Name};