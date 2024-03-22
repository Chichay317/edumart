import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import RootLayout from "../../components/RootLayout";
import { SearchProvider } from "../../context/searchcontext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SearchProvider>
        <ClerkProvider
          {...pageProps}
          appearance={{
            elements: {
              rootBox: "mx-auto my-20",
              card: "flex items-center justify-center",
            },
          }}
        >
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </ClerkProvider>
      </SearchProvider>
    </Provider>
  );
}
