
import Main from './components/pages/Main/Main';
import Nav from './components/pages/Nav/Nav';
import Footer from './components/pages/Footer/Footer';

export default function Home() {
  return (
    <div className='w-full h-screen max-sm:px-5 p-14'>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  )
}
