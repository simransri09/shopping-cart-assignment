import Page from "../components/organism/Page";
import { applyMiddleware, compose, createStore } from "redux";
import reducers from "../redux/reducers";
import reduxThunk from 'redux-thunk';
import { Provider } from "react-redux";

const ComposeEnhancer = (global.window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ )|| compose
const store = createStore(reducers, ComposeEnhancer(applyMiddleware(reduxThunk),))

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Page>
      <Component {...pageProps} />
    </Page>
    </Provider>
  );
}


export default MyApp;
