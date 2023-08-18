import Link from 'next/link';

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
  return (
    <Link href={href} className='group relative'>
        {title}
      <span className='h-[1px] w-0  bg-white-100 absolute left-0 -bottom-0.5
      group-hover:w-full transition-all ease-in-out duration-500'>
        &nbsp;
      </span>
    </Link>
  )
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
              <ul className='flex justify-between gap-3 pt-1'>
                <li><NavbarBtn title='About Me' href="#about"  /></li>
                <li><NavbarBtn title='Projects' href="#projects"  /></li>
                <li><NavbarBtn title='Backgrounds' href="#backgrounds " /></li>
                <li><NavbarBtn title='Experience' href="#experience"  /></li>
                <li><NavbarBtn className='bg-white-100 text-dark-600 px-4 py-1 rounded-sm' title='Contact' href="#" /></li>
              </ul>
            </div>


          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;