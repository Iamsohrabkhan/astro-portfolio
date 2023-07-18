import { useState,useEffect } from 'react'
const  Navbar= () => {
    const [state, setState] = useState(false)
    // const [darkMode, setDarkMode] = useState(false);
    // useEffect(() => {
    //     // Load the user's preference for dark mode from local storage
    //     const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
    //     setDarkMode(isDarkModeEnabled);
    //   }, []);
    
    //   useEffect(() => {
    //     // Toggle the dark mode class on the body element when darkMode state changes
    //     document.body.classList.toggle('dark', darkMode);
    //     // Save the user's preference for dark mode to local storage
    //     localStorage.setItem('darkMode', darkMode.toString());
    //   }, [darkMode]);
    
    //   const handleToggle = () => {
    //     setDarkMode(!darkMode);
    //   };

  

    return (
        <nav className="bg-slate-50 border-b w-full md:static md:text-sm md:border-none">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a className='font-bold text-teal-700 italic group' href="/">
                        <span  className="text-lg font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient group-hover:invert bg-300%">Frontendfyi </span>
                        <span  className="text-lg font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient group-hover:invert bg-300%">Motion</span>
                        
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end  items-center space-y-6 md:flex md:space-x-6 md:space-y-0 ">
            
                                <li className=' group'>
                                    <a href="/" className='w-14 h-6 block overflow-hidden'>
                                        <div className="relative">
                                            <span className="block absolute transition-transform duration-300
                                            group-hover:-translate-y-full  group-hover:text-teal-500 group-hover:font-bold translate-y-0 font-medium">Home</span>
                                            <span className="block absolute transition-transform duration-300
                                            group-hover:translate-y-0 group-hover:text-teal-500 group-hover:font-bold translate-y-full  font-medium">Home</span>
                                        </div>
                                    </a>
                                </li>
            
                                <li className=' group'>
                                    <a href="/about" className='w-14 h-6 block overflow-hidden'>
                                        <div className="relative">
                                            <span className="block absolute transition-transform duration-300
                                            group-hover:-translate-y-full  group-hover:text-teal-500 group-hover:font-bold translate-y-0 font-medium">About</span>
                                            <span className="block absolute transition-transform duration-300
                                            group-hover:translate-y-0 group-hover:text-teal-500 group-hover:font-bold translate-y-full  font-medium">About</span>
                                        </div>
                                    </a>
                                </li>
                               
                                <li className=' group'>
                                    <a href="/blogs" className='w-14 h-6 block overflow-hidden'>
                                        <div className="relative">
                                            <span className="block absolute transition-transform duration-300
                                            group-hover:-translate-y-full  group-hover:text-teal-500 group-hover:font-bold translate-y-0 font-medium">Blogs</span>
                                            <span className="block absolute transition-transform duration-300
                                            group-hover:translate-y-0 group-hover:text-teal-500 group-hover:font-bold translate-y-full  font-medium">Blogs</span>
                                        </div>
                                    </a>
                                </li>
                               
                                <li className=' group'>
                                    <a href="/contact" className='w-14 h-6 block overflow-hidden'>
                                        <div className="relative">
                                            <span className="block absolute transition-transform duration-300
                                            group-hover:-translate-y-full  group-hover:text-teal-500 group-hover:font-bold translate-y-0 font-medium">Contact</span>
                                            <span className="block absolute transition-transform duration-300
                                            group-hover:translate-y-0 group-hover:text-teal-500 group-hover:font-bold translate-y-full  font-medium">Contact</span>
                                        </div>
                                    </a>
                                </li>
                               
                                <li className=' group'>
                                    <a href="/projects" className='w-14 h-6 block overflow-hidden'>
                                        <div className="relative">
                                            <span className="block absolute transition-transform duration-300
                                            group-hover:-translate-y-full  group-hover:text-teal-500 group-hover:font-bold translate-y-0 font-medium">Projects</span>
                                            <span className="block absolute transition-transform duration-300
                                            group-hover:translate-y-0 group-hover:text-teal-500 group-hover:font-bold translate-y-full  font-medium">Projects</span>
                                        </div>
                                    </a>
                                </li>
                                
                                {/* <li className=' group'>
                              <button onClick={handleToggle}>Mode</button>
                                </li> */}
                               
                       
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar