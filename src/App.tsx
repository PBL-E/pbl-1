
import './App.scss'
import { Header } from './components/Navu.tsx'
import { CultureAccordion, OtherAccordion, PEAccordion, TechnologyAccordion } from './components/test.tsx'
import { ThreeSample } from './components/Three.tsx'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase.ts'


function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <>
    <div className='entrance'>
       <Header auth={auth} user={user}/>
       <ThreeSample />
    </div>
    <section>
      <h1>技術系<span className='main-span'>technology</span></h1>
      <TechnologyAccordion />
    </section>
    <section>
      <h1>体育系<span className='main-span'>physical education</span></h1>
      <PEAccordion />
    </section>
    <section>
      <h1>文化系<span className='main-span'>cultural</span></h1>
      <CultureAccordion />
    </section>
    <section>
      <h1>その他<span className='main-span'>others</span></h1>
      <OtherAccordion />
    </section>
    </>
  )
}

export default App
