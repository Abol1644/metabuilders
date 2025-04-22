import { Outlet, Link } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">خانه</Link> | 
          <Link to="/about">درباره ما</Link> | 
          <Link to="/contact">تماس</Link>
        </nav>
      </header>
      
      <main>
        <Outlet />
      </main>

      <footer>© 2025</footer>
    </div>
  )
}
