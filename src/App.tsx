import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignUp } from "./pages/SignUp";
import { ShowData } from "./pages/ShowData";

// import { ContextProvider } from './contexts/ContextBasic';
import { ContextProvider } from './contexts/ContextProfissional';

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <h1>Tìtulo da página</h1>
        <hr />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/exibir" element={<ShowData />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App;