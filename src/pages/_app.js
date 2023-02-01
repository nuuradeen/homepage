import '@/styles/globals.css'
//ChakraUI Import
import { ChakraProvider } from '@chakra-ui/react'
//Layout Import Template
import Layout from "../components/layout"

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
         )
}
