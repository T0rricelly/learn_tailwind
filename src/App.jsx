import './App.css'
import sprite from './assets/sprite.svg'
function App() {

  return (
    <>
      <header className='text-white'>
        <h1>
          Links
        </h1>
        <p>Enlaces y cursos</p>
        <section className='flex gap-2 justify-center'>

          <a href="#"
            className='size-14 bg-purple-100 p-2 flex items-center justify-center rounded-full'
          >
            <svg width="32" height="32">
              <use href={`${sprite}#twitch`} />
            </svg>
          </a>
          <a href="#"
            className='size-14 bg-zinc-900 p-2 flex items-center justify-center rounded-full'
          >
            <svg width="32" height="32">
              <use href={`${sprite}#github`} />
            </svg>
          </a>
          <a href="#"
            className='size-14 bg-gradient-to-tr from-yellow-400 via-pink-600 to-purple-500 p-2 flex items-center justify-center rounded-full'
          >
            <svg width="32" height="32" className="text-white">
              <use href={`${sprite}#instagram`} />
            </svg>
          </a>
          <a href="#"
            className='size-14 bg-white p-2 flex items-center justify-center rounded-full'
          >
            <svg width="32" height="32">
              <use href={`${sprite}#youtube`} />
            </svg>
          </a>
          <a href="#"
            className='size-14 bg-black p-2 flex items-center justify-center rounded-full'
          >
            <svg width="32" height="32">
              <use href={`${sprite}#x`} />
            </svg>
          </a>
          <a href="#"
            className='size-14 bg-white p-2 flex items-center justify-center rounded-full'
          >
            <svg width="32" height="32">
              <use href={`${sprite}#linkedin`} />
            </svg>
          </a>

        </section>
      </header>
    </>
  )
}

export default App
