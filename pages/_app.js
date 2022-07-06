import "../styles/globals.css";
import MainNavigation from "../component/navigation/MainNavigation"
import Footer from "../component/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainNavigation>
      <Component {...pageProps} />
      </MainNavigation>
      <Footer/>
    </>
  );
}

export default MyApp;
