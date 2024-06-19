import RootLayout from "@/Components/RootLayout";
import "@/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import type { AppProps } from "next/app";
import  {Provider} from "react-redux";
import { persistor, store } from './../Store/Store';
import {PersistGate} from 'redux-persist/integration/react'
import { SessionProvider } from "next-auth/react";


export default function App({ Component, pageProps:{ session, ...pageProps} }: AppProps) {
  return (
     <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SessionProvider session={session}>
       <div className="font-bodyFont bg-slate-950">
       <RootLayout>
       <Component {...pageProps} />
       </RootLayout>
       </div>
       </SessionProvider>
      </PersistGate>
     </Provider> 
  );
}
