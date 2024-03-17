import '../styles/globals.css'

//INTERNAL IMPORT
import { Footer, Banner, NavBar } from '../Components'
import { TrackingProvider } from '../Context/TrackingContextProvider'
export default function App({ Component, pageProps }) {
	return (
		<>
			<TrackingProvider>
				<NavBar />
				<Component {...pageProps} />
				<Footer />
			</TrackingProvider>
		</>
	)
}
