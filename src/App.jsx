import {Route, Routes} from "react-router-dom"
import Header from "./Components/Header/Header.jsx"
import Nav from "../src/Components/Nav.jsx"
import Hero from "../src/Components/Hero/Hero.jsx"
import Services from "./Components/Medical/Services.jsx"
import About from "./Components/About/About.jsx"
import Staffs from "./Components/Staffs/Staffs.jsx"
import Faq from "./Components/Faq/Faq.jsx"
import Testimonials from "./Components/Testimonials/Testimonials.jsx"
import Blog from "../src/Components/Blog/Blog.jsx"
import Appointment from "./Components/Appointment/Appointment.jsx"
import Mobile from "./Components/Mobileapp/Mobile.jsx"
import StatsSection from "./Components/Countup/Countup.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import ReadMore from "./Components/ReadMore/ReadMore.jsx"
import ChatBot from "./Components/ChatBot.jsx"
import Contact from "./Components/Contact/Contact.jsx"
import Gallery from "./Components/Gallery/Gallery.jsx"
import ViewAppointments from "./Components/Appointment/ViewAppointments.jsx"
import ServicesHome from "./Components/Medical/ServicesHome.jsx"
import Top from "./Components/Top.jsx"



const Home = () => (
  <>
    <Hero />
    <About />
    <StatsSection />
    <ServicesHome />
    <Staffs />
    <Mobile />
    <Faq />
    <Testimonials />
    <Blog />
    <Appointment />
    <Top/>
    <ChatBot />
   
   
  </>
);

function App() {
  return (
    <>
      <Header />
      <Nav />
    <Top/>
    <ChatBot />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ReadMore />} />
        <Route path="/services" element={<Services />} />
        <Route  path="/contact" element={<Contact/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route  path="/ViewAppointments" element={<ViewAppointments/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
