import React from 'react'


export default function BtnBackTop (){ 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>

    <button onClick={scrollToTop}
            className="button-footer condensed uppercase">
        <div className="text">
            <span>Back</span>
            <span>to</span>
            <span>top</span>
        </div>
        <div className="clone">
            <span>Back</span>
            <span>to</span>
            <span>top</span>
        </div>
        <svg width="20px" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">

            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
    </button>


      



    </>
  )
}

