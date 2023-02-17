import '../styles/globals.css';
import '../styles/layout.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
// import Footer from '../components/Footer';
import SideBar from '../components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
      <Header/>
      <SideBar/>
      <Component {...pageProps} />
      {/* <Footer/> */}
    </>);
}

export default MyApp;
