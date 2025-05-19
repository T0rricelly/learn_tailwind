import './App.css'
import image from './assets/image.jpeg'
import sprite from './assets/sprite.svg'
function App() {

  return (
    <>
      <header className='text-white'>
        <img src={image} alt="image" className='h-[50vh] object-cover mask-radial-at-center mask-radial-from-50% mask-radial-to-70%' />
        <header className="flex flex-col items-center justify-center -mt-16">
          <span
            className='flex items-center justify-center text-sky-400 text-xl font-mono px-3 py-2 border-2 border-sky-400/60 rounded-full bg-black/65 cursor-pointer z-10'>
            @Santiago
            <svg  className="fill-sky-400 size-5 ml-1 mt-[3px]">
              <use href = {`${sprite}#verified`} />
            </svg>
          </span>
          <h1
            className="text-3xl font-bold leading-tight mt-1 font-mono overflow-hidden whitespace-nowrap w-[15ch] border-r-4 border-white animate-[typing_5s_steps(15,end)infinite] animate-[blink_0.7s_infinite]"
          >
            Santiago Torres
          </h1>
        </header>
        <section className='flex gap-3 justify-center'>

          <a href="#"
            className='size-12 sm:size-16 bg-purple-100 p-2 flex items-center justify-center rounded-full'
          >
            <svg width="32" height="32">
              <use href={`${sprite}#twitch`} />
            </svg>
          </a>
          <a href="#"
            className='size-12 sm:size-16 bg-zinc-900 p-2 flex items-center justify-center rounded-full'
          >
            <svg width="32" height="32">
              <use href={`${sprite}#github`} />
            </svg>
          </a>
          <a href="#"
            className='size-12 sm:size-16 bg-gradient-to-tr from-yellow-400 via-pink-600 to-purple-500 p-2 flex items-center justify-center rounded-full'
          >
            <svg width="32" height="32" className="text-white">
              <use href={`${sprite}#instagram`} />
            </svg>
          </a>
          <a href="#"
            className='size-12 sm:size-16 bg-white p-2 flex items-center justify-center rounded-full'
          >
            <svg width="32" height="32">
              <use href={`${sprite}#youtube`} />
            </svg>
          </a>
          <a href="#"
            className='size-12 sm:size-16 bg-black p-2 flex items-center justify-center rounded-full'
          >
            <svg width="32" height="32">
              <use href={`${sprite}#x`} />
            </svg>
          </a>
          <a href="#"
            className='size-12 sm:size-16 bg-white p-2 flex items-center justify-center rounded-full'
          >
            <svg width="32" height="32">
              <use href={`${sprite}#linkedin`} />
            </svg>
          </a>

        </section>
        <p className="text-center mt-4 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi corporis ullam et? Animi harum dolor commodi sed hic perspiciatis qui voluptas vel.
        </p>
      </header>
    </>
  )
}

export default App
