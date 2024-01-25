"use client";
import {useState, useRef } from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';


interface NavbarProps {
  title: string;
  theme: 'light' | 'dark';
}

interface NavbarBtnProps {
  href: string;
  title: string;
  className?: string;
}


const NavbarBtn: React.FC<NavbarBtnProps> = ({href, title}) => {
  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  
    const targetId = event.currentTarget.getAttribute('href');
    
    if (targetId !== null) {
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  };  
  return (
    <Link href={href}   onClick={scrollToSection} className='group relative tracking-widest' >
          {title}
        <span className='h-[1px] w-0 bg-white-100 absolute left-0 -bottom-0.5
        group-hover:w-full transition-all ease-in-out duration-500'>
          &nbsp;
        </span>
    </Link>
  )
}

const navVariants = {
  hidden: { height: 0 },
  visible: { height: "auto" },
 };

const Navbar: React.FC<NavbarProps> = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible((prevState) => !prevState);
  };

  

  return (
    <>
      <nav className={`w-full md:px-7 z-40 bg-dark-900 bg-opacity-95 backdrop-blur-sm shadow-nav-shadow sticky top-0`}>
        <div className="container mx-auto">

          
          <motion.div className=" flex flex-col lg:flex-row justify-between lg:items-center px-7 lg:px-16  py-3  transition-transform duration-500 ease-in "
          
          
          >  

              
            <div className="flex justify-between">
              <div className="cursor-default">
                <h5 className={`group lg:text-sm text-lg font-bold ease-in duration-500 text-dark-900 bg-white-100 
                              hover:bg-yellow-400 h-12 w-12  lg:h-10 lg:w-10 pr-[6px] p-1 flex items-end justify-end rounded tracking-tighter`}>
                  J 
                  <span className='group-hover:hidden group-hover:opacity-0 ease-in duration-500'>F</span>
                  <span className='hidden group-hover:block opacity-0 group-hover:opacity-100 ease-in duration-500'>S</span>
                </h5>
              </div>


              <div className="lg:hidden">
                  <div className= {`w-20 items-center justify-center ${menuOpen ? 'active' : ''} `}
                                  onClick={toggleNav}>

                    <div className={`group flex h-12 w-12 cursor-pointer float-right items-center justify-center rounded border 
                                   border-dark-600 bg-white p-2  hover:bg-dark-900 ${ menuOpen ? 'border-dark-400' : ''}`} 
                                    onClick={() => setMenuOpen(!menuOpen)} >
                      <div className="space-y-2">
                        <span className={`block h-0.5 w-8 origin-center bg-white-300 transition-transform duration-500 ease-in-out 
                                          ${ menuOpen ? 'translate-y-[5px] rotate-45' : ' ' }
                                          `}>
                        </span>
                        <span className={`block h-0.5  origin-center bg-orange-500 transition-transform duration-500 ease-in-out 
                                          ${ menuOpen ? 'w-8 -translate-y-[5.1px] -rotate-45' : 'w-6' }
                                          `}>
                        </span>
                      </div>
                    </div>

                  </div>
              </div>

            </div>
            
            <div className="lg:w-2/3 w-4/5 max-w-xl">
              <div className="hidden lg:flex justify-end">
                <ul className={`flex flex-col lg:flex-row 
                              pb-3 lg:pb-0 justify-between lg:gap-4 xl:gap-6 gap-y-1 pt-6 lg:pt-1 uppercase lg:capitalize
                              ${ isNavVisible ? 'h-auto' : 'pt-0 overflow-hidden' }        
                              `}>
                    <li><NavbarBtn title='About Me' href="#about"  /></li>
                    <li><NavbarBtn title='Experience' href="#experience"  /></li>
                    <li><NavbarBtn title='Certifications' href="#certification"  /></li>
                    <li><NavbarBtn title='Projects' href="#projects" /></li>
                    <li className='mt-2 lg:mt-0'>
                      <Link className='bg-white-100 text-dark-600 px-4  py-1 rounded-sm hover:bg-primary duration-300 ease-in' href="#footer">Contact</Link>
                    </li>
                </ul>
              </div>

              <motion.div className="overflow-hidden"
               variants={navVariants}
               initial="hidden"
               animate={isNavVisible ? "visible" : "hidden"}
               transition={{ duration: .3, ease: "easeIn" }}
               >
                 <motion.ul className={`flex  flex-col lg:flex-row 
                              pb-3 lg:pb-0 justify-between lg:gap-3 gap-y-1 pt-6 lg:pt-1 uppercase lg:capitalize
                              ${ isNavVisible ? 'h-auto' : 'pt-0 overflow-hidden' }
                              
                              `}
                             
                               >

                <li><NavbarBtn title='About Me' href="#about"  /></li>
                <li><NavbarBtn title='Experience' href="#experience"  /></li>
                <li><NavbarBtn title='Certifications' href="#certification"  /></li>
                <li><NavbarBtn title='Projects' href="#projects" /></li>
                <li className='mt-2 lg:mt-0'>
                  <Link className='bg-white-100 text-dark-600 px-4  py-1 rounded-sm hover:bg-primary duration-300 ease-in' href="#footer">Contact</Link>
                </li>
              </motion.ul>

              </motion.div>
             

                              

              
            </div>


          


          </motion.div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;