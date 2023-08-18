import Link from 'next/link';

interface NavbarProps {
  title: string;
  theme: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = (props) => {
  

  return (
    <>
      <nav className={`w-full md:px-7 z-40 bg-dark-900 shadow-nav-shadow`}>
        <div className="container mx-auto">
          <div className="flex justify-between lg:px-16  py-3">


            <div className="">
              <h5 className={`condensed text-2xl`}>
                JFR DEV
              </h5>
            </div>
            
            <div className="lg:w-2/3 w-4/5 max-w-xl">
              <ul className='flex justify-between pt-1'>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#backgrounds">Backgrounds</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a className='bg-white-100 text-dark-600 px-4 py-1 rounded-sm' href="#">Contact</a></li>
              </ul>
            </div>


          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;