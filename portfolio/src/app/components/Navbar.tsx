import Link from 'next/link';

interface NavbarProps {
  title: string;
  theme: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { title} = props;

  

  return (
    <>
      <nav className={`w-full shadow-sm md:px-7 z-40`}>
        <div className="container mx-auto">
          <div className="flex justify-between flex-col md:flex-row items-center ">
            <div className="tooltip relative cursor-help">
              <h1 className='font-semibold text-3xl md:text-3xl mt-3 md:mt-0 py-1'>
                {title}
              </h1>
              <span className='absolute z-40 text-white bg-slate-950 px-1 text-xs rounded-sm left-0 top-10' style={{ display: 'none' }}> Current Category </span>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;