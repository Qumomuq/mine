import '../styles/globals.css'
import {Provider} from 'react-redux'
import {useStore} from '../core/store'
import {ChakraProvider} from '@chakra-ui/react'
import {PageFirstInit} from "../core/services/PageFirstInit";
import Navbar from "../components/mineLauncherComponents/navbar";
import Footer from "../components/mineLauncherComponents/footer";

export default function MyApp({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState)
    return (
        <Provider store={store}>
            <ChakraProvider>
                <PageFirstInit>
                    <Navbar/>
                    <div className="">
                        <Component {...pageProps} />
                    </div>
                    <Footer/>
                </PageFirstInit>
            </ChakraProvider>
        </Provider>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await Index.getInitialProps(appContext);
//
//   return { ...appProps }
// }
