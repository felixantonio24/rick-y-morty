import './App.css'
import Location from "./Components/Location"
import logo from "./assets/logo.svg"
function App() {

  return (
    <section className='app'>
      <div className='banner'>
        <img src={logo} alt="" />
        <Location/>
      </div>
    </section>
  )
}

export default App