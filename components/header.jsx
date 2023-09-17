import { useState } from 'react'
import Link from "next/link";


function NavLink({ to, children }) {
  return <a href={to} className={`mx-4`}>
    {children}
  </a>
}

function MobileNav({ open, setOpen }) {
  return (
    <div className={`absolute top-0 left-0 h-fit-content py-5 w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `} >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
        <Link href="/">
          <a class="navbar-brand"
          ><img src="https://stutorpal.github.io/waitlist/img/logo.png" alt="" width="40" height="40"
            /></a>
        </Link>

      </div>
      <div className="flex flex-col ml-4">
        <Link href="/">
                    <a className="text-xl hover:text-blue-600 font-medium my-4" href="" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
          Home
        </a>
</Link>

      
        <Link href="blog">
          <a className="text-xl hover:text-blue-600 font-medium my-4" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
            Blog
          </a>
        </Link>

      </div>
    </div>
  )
}

export default function Navbar() {

  const [open, setOpen] = useState(false)
  return (
    <nav className=" flex filter drop-shadow-sm bg-white px-8 py-4 h-20 items-center" >
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <a class="navbar-brand" href="index.html"
        ><img src="https://stutorpal.github.io/waitlist/img/logo.png" alt="" width="40" height="40"
          /></a>
      </div>
      <div className="w-9/12 flex justify-end items-center">

        <div className="z-50 flex relative w-6 h-6 flex-col justify-between items-center md:hidden" onClick={() => {
          setOpen(!open)
        }}>
          {/* hamburger button */}
          <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
          <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3" : ""}`} />
        </div>

        <div className="hidden md:flex">
          <NavLink to="/" >
            <span className="hover:text-blue-600">Home</span>
          </NavLink>
        
          <NavLink to="/blog">
            <span className="hover:text-blue-600">Blog</span>
          </NavLink>
        </div>
      </div>
    </nav>


  )
}
