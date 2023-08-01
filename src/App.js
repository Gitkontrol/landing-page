import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import  Intro  from './components/Intro'
import Features from './components/Features'
import Hero2 from './components/Hero2';
import Testimonials from './components/Testimonials';
import Registration from './components/Registration'
import Footer from './components/Footer'
import { access, anyFile, collaborations, security } from './assets';


function App() {
  return (
    <div className='bg-[#1B2330] text-white w-screen flex-col'>
         <Header />
         <Hero />
         <Intro />
         <div className='lg:grid lg:grid-cols-2 lg:w-[80%] lg:mx-auto lg:gap-x-20'>
         <Features logo={access} heading='Access your files anywhere' description='The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.' />
         <Features logo={security} heading='Security you can trust' description='2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.' />
         <Features logo={collaborations} heading='Real-time collaboration' description='Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.' />
         <Features logo={anyFile} heading='Store any type of file' description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared." />
         </div>
         <Hero2 />
         <Testimonials />
         <Registration />
         <Footer />
        
    </div>
  );
}

export default App;
