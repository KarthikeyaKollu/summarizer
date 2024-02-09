import React from "react";
// import { logo } from "../assets";

export const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={""} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Blogs with<br className='max-md:hidden' />
        <span className='blue_gradient '>Gemini Pro</span>
      </h1>
      <h2 className='desc'>
      "Blogs into concise insights with our new summarizer tool. Simplify complexity, amplify understanding. Unlock the essence effortlessly."
      </h2>
    </header>
  );
};

