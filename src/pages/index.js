import AboutPage from "@/components/AboutPage/AboutPage";
import ChosePage from "@/components/ChosePage/ChosePage";
import FootherPage from "@/components/Foother/FootherPage";
import LoginPage from "@/components/LoginPage/LoginPage";
import ServicesPage from "@/components/ServicesPage/ServicesPage";
import TitlePage from "@/components/TitlePage/TitlePage";
import HeaderPage from "@/HeaderPage/HeaderPage";
import HomePage from "@/home/Home";
import Louchpad from "@/home/Louchpad/Louchpad";




export default function Home() {
  return (    
  <>
    <HeaderPage />
    {/*Home page ------ */}
    <HomePage />
    {/*AboutPage ---- */}
    <AboutPage />
    {/*Chose page ---- */ }
    <ChosePage  />
    {/*TitlePage */}
    <TitlePage />
    {/*ServicesPage */}
    <ServicesPage />
    {/*FooterPAge*/}
    <FootherPage />
    {/*Louchpad page*/}
    <Louchpad />


    {/*LoginPage*/}
    <LoginPage />
    
  </>

  
  );
}
