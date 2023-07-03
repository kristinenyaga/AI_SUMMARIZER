
import './App.css'
import { RouterProvider, } from "react-router-dom";
import { router } from './routes/routes'
function App() {
  return (
    <main>
      <div className='main'>
        <div className='gradient'/>
      </div>

      <div className='app'>
        <RouterProvider router={ router} />
      </div>
    </main>
  )
}

export default App
