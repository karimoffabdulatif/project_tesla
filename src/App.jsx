// import { ModelS, Model3 } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
export default App
