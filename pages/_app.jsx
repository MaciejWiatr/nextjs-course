/** @jsx jsx */
import { jsx } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import Nav from "../src/components/Nav";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Dope notes app 📝</title>
            </Head>
            <div>
                <Nav />
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}
