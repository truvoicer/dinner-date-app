import '../assets/sass/style.scss'
import {Provider} from "react-redux";
import store from "../library/redux/store";

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
