import ReactDOM from 'react-dom/client';
import store from './redux/store/store';
import App from './components/App/App';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
