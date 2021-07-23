import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import Routes from './routes/Routes';
// import {firebaseConfig} from './firebase/firebaseConfig'
// import {FirebaseAppProvider} from 'reactfire'


ReactDOM.render(
  <Provider store={store}>
    {/* <FirebaseAppProvider firebaseConfig={firebaseConfig}> */}
      <Routes />
    {/* </FirebaseAppProvider> */}
  </Provider>,
  document.getElementById('root')
);

