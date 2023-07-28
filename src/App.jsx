import './App.css'
import Body from './Components/Body/Body'
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <>
      <div className='App'>
          <NavBar></NavBar>
          <p className='text-5xl text-green-600'>Hello...!! I am React with Tailwind css.</p>
          <Body></Body>
      </div>
    </>
  )
}

export default App
