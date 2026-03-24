import { Header } from '../Components/Header'
import { Comic } from '../Pages/Comic'
import { About } from '../Pages/About'
import { Contact } from '../Pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

function App() {

  return (
    <>
    <Header />
    <Comic />
    <About />
    <Contact />
    <Footer/>
    </>
  )
}

export default App
