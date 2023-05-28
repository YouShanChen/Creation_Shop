

import { Provider } from "react-redux";
import 'antd/dist/reset.css';
import './App.css';
import Router from './Router';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { networkMode: 'offlineFirst' },
    mutations: { networkMode: 'offlineFirst' },
  }
})
function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
    </QueryClientProvider>


  );

}

export default App;
