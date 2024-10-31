export default function Navbar() {
    return (
      <div className="navbar bg-black text-white">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-75 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         
          <a href="/"><li><a>Home</a></li></a>
          <a href="#search"> <li><a>Search</a></li> </a>
          <a href="#about"> <li><a>About</a></li> </a>
         
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <a href="/" className="btn btn-ghost text-xl">MovieMaze</a>
    </div>
    <div className="navbar-end">
      <a href="#search" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        
      </a>
      
    </div>
  </div>
    )
  }


  