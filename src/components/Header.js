import Image from "next/image";
import {MenuIcon, SearchIcon,ShoppingCartIcon} from "@heroicons/react/outline";

function Header() {
  return (
  <header>
    <div className="flex items-center bg-amazon_blue px-1 py-2 flex-grow ">
      <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
        <Image 
          src='https://links.papareact.com/f90'
          width={150}
          height={40}
          objectFit="contain"
          className="cursor-pointer"
        />
      </div>

      {/* SearchBar */}
      <div className="hidden sm:flex rounded-md items-center flex-grow cursor-pointer h-10 bg-yellow-400 hover:bg-yellow-500">
        <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"/>
        <SearchIcon className="h-12 p-4"/>
      </div>

      {/* rightNav */}
      <div className="text-white flex  items-center text-xs space-x-6 mx-6 whitespace-nowrap">
        <div className="link">
          <p>Bonjour, Jérémie SIVAN</p>
          <p className="font-extrabold md:text-sm">Account & Lists</p>
        </div>

        <div className="link">
          <p>Returns</p>
          <p className="font-extrabold md:text-sm">& Orders</p>
        </div>

        <div className="link relative flex items-center">
          <span className="absolute bg-yellow-400 w-4 h-4 flex items-center justify-center text-black font-bold rounded-xl top-0 right-0 md:right-10">0</span>
          <ShoppingCartIcon className="h-10"/>
          <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
        </div>

      </div>
      

    </div>

    {/* Bottom Nav */}
    <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
      <p className="link flex  items-center">
        <MenuIcon className="h-6 mr-1"/>
        All
      </p>
      <p className="link">Prime Video</p>
      <p className="link">Amazon Business</p>
      <p className="link">Today's Deals</p>
      <p className="links hidden lg:inline-flex">Electronics</p>
    </div>
    
  </header>
  )
}

export default Header
