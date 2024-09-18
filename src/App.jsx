import './App.css'
import Header from './components/Header/Header'
import Portada from './components/Portada/Portada'
import WhastAppButton from './elements/WhatsApp/WhastAppButton'
import Services from './components/Services/Services'
import AboutMe from './components/AboutMe/AboutMe'
import MainCourse from './components/MainCourse/MainCourse'
import Portfolio from './components/Portfolio/Portfolio'
import SocialSecurity from './components/SocialSecurity/SocialSecurity'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <>
     <Header/>
     <Portada/>
     <WhastAppButton/>
     <Services/>
     <AboutMe/>
     <MainCourse/>
     <Portfolio/>
     <SocialSecurity/>
     <Contact/>
    </>
  )
}

export default App
