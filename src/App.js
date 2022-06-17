import './App.css';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
     <Navbar links={
       {
       l1:'About',
       l2:'Home',
       l3:'More'
       }
     } />
     <Main title="Main Content"/>
     <Footer/>
    </>
  );
}

export default App;
