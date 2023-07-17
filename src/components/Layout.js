import Head from "next/head"
import NextNProgress from "../components/NextNProgress"

import Header from "./Header"
import Footer from "./Footer"
import Footer_new from "./Footer_new"

import { FormProvider } from "./FormContext"
import { useState } from "react"
import SvgIcons from "./SvgIcons"
import SSRProvider from "react-bootstrap/SSRProvider"
import TopBarNew from "./Header/topBarNew"

const Layout = (pageProps) => {
  const [paddingTop, setPaddingTop] = useState(0)
  const headerProps = {
    nav: {
      classes: pageProps.nav && pageProps.nav.classes,
      fixed: pageProps.nav && pageProps.nav.fixed,
      color: pageProps.nav && pageProps.nav.color,
      light: pageProps.nav && pageProps.nav.light,
      dark: pageProps.nav && pageProps.nav.dark,
      sticky: pageProps.nav && pageProps.nav.sticky,
    },
    loggedUser: pageProps.loggedUser,
    headerClasses: pageProps.headerClasses,
    headerAbsolute: pageProps.headerAbsolute,
    hideTopbar: pageProps.hideTopbar,
    setPaddingTop: (event) => setPaddingTop(event),
  }

  return (
    <SSRProvider>
      <div
        style={{ paddingTop: pageProps.noPaddingTop ? "0" : paddingTop }}
        className={pageProps.className}
      >
        <Head>
          <title>{`${pageProps.title} - Sell Theme [React]`}</title>
        </Head>

        <NextNProgress color="#3494E6" options={{ showSpinner: false }} />

         {/*{!pageProps.hideHeader && <Header {...headerProps} />} */}
         <TopBarNew/>
          <main>{pageProps.children}</main>
       

        {/* {!pageProps.hideFooter && <Footer />} */}
        {!pageProps.hideFooter && <Footer_new />}
        <SvgIcons />
      </div>
    </SSRProvider>
  )
}

export default Layout
