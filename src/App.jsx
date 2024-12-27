import './index.css'
import HeadTags from './elements/HeadTags'
import Navbar from './elements/navbar'

function App() {
  return (
    <>
      <HeadTags />
      <div className="min-h-screen bg-primary min-w-screen">
        <Navbar />
      </div>
    </>
  )
}

export default App
