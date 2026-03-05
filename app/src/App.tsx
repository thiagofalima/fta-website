import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { GlobalStyle } from "./components/GlobalStyles";
import { About } from "./components/About";
import { WhatWeDo } from "./components/WhatWeDo";

function App() {
  return (
    <>
    <GlobalStyle />
    <Layout>
      <Hero />
      <About />
      <WhatWeDo />
    </Layout>
    </>
  );
}

export default App;
