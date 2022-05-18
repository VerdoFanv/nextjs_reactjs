import '@styles/app.scss'
import { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactNode } from "react"

type Page<P = {}> = NextPage<P> & {
	getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
	Component: Page;
};

export default function App({ Component, pageProps }: Props) {
	const getLayout = Component.getLayout ?? ((page: ReactNode) => page)

	return (
    <div className="app">
      {getLayout(<Component {...pageProps} />)}
    </div>
	)
}