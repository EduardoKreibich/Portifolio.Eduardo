import { useState } from "react";
import { Portifolio } from "./pages/dashbord";
import { DarkStyle, GlobalStyle } from "./styles/global";
import { Reset } from "./styles/reset";

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <>
      <Reset />
      {theme === true ? <GlobalStyle/> : <DarkStyle/>}
      <Portifolio setTheme={setTheme} theme={theme} />
    </>
  );
}

export default App;
