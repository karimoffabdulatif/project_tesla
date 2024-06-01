import { NavLink, useLocation } from 'react-router-dom'
import routes from '@routes'
import Logo from '../../assets/Logo.png'
import Search from '../../assets/content_search.png'
import User from '../../assets/user_icon.png'
import Sidebar from '../../assets/sidebar_btn.png'
 
import './index.css'
const Index = () => {
    const {pathname} = useLocation()
    console.log(pathname);
  return (
    <header>
      <div className="container">
      <img src={Logo} alt="logo" className='logo' />
        <ul>
            {
                routes?.map((item, index)=>(
                    <li key={index}>
                        <NavLink to={item.path} className={item.path === pathname ? "text-primary display-1 py-1 px-2 border border-primary fs-6 rounded-pill text-decoration-none" : "display-1 text-white py-1 px-2 fs-6 text-decoration-none "}>
                            {item.content}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
       <div className='nav-pages'>
       <img src={Search} alt="search" className='search'/>
         <img src={User} alt="user" />
         <img src={Sidebar} alt="sidebar"  />
       </div>
      </div>
    </header>
  )
}

export default Index