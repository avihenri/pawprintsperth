import Image from 'next/image';
import 'material-icons/iconfont/material-icons.css';
import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
    </>
  )
}
