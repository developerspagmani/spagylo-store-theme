import Layout from "../components/Layout"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "swiper/css/bundle"
import "../../public/fonts/hkgrotesk/stylesheet.css"
import "../scss/style.default.scss"
import "../scss/custom/_CustomGiftingGood.scss"
import "../scss/custom/_custom.scss"
import "../scss/custom/_customstyleHarish.scss"


const App = ({ Component, pageProps }) => {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

// This default export is required in a new `pages/_app.js` file.
export default App
