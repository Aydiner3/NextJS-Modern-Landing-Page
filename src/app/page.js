import Footer from './components/footer';
import Cta from './components/cta';
import Features from './components/features';
import NavbarHero from './components/navbarhero';
import './globals.css';

export default function Home() {
  return (
    <main className='flex flex-col gap-28'>
      <NavbarHero/>
      <Features/>
      <Cta/>
      <Footer/>
    </main>
  )
}
