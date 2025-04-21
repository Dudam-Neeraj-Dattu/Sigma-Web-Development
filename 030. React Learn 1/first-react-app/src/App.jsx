import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="cardContainer">
        <Card title="My Card Title" description="This is a description of the card." />
        <Card title="My Card Title2" description="This is a description of the card2." />
      </div>
    </>
  )
}

export default App
