import {logo} from '../../assets'
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center flex-row w-full mb-10 pt-3' >
        <img src={logo} alt="summarizer-logo" className='w-28 object-contain' />
        <div className='flex flex-row gap-2'>
          <a className='py-1.5 px-2 text-md cursor-pointer hover:underline hover:underline-offset-4 font-satoshi' href="/">home</a>
          <a className='py-1.5 px-2 text-md cursor-pointer hover:underline hover:underline-offset-4 font-satoshi' href="/pricing">pricing</a>
          

          <button type='button'  className='black_btn font-satoshi' onClick={()=>window.open('https://github.com/kristinenyaga')}>login/signup</button>
        </div>

      </nav>

      <h1 className='head_text'>Summarize Your articles <br className='max-md:hidden' /> <span className='orange_gradient'>OpenAi</span></h1>
      <h2 className='description'>Simplify your reading with summarize,it transforms lengthy articles into clear and concise summaries</h2>
    </header>
  )
}

export default Hero