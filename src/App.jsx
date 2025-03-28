import { useEffect, useMemo, useState } from "react";
import { Portifolio } from "./pages/dashbord";
import { DarkStyle, GlobalStyle } from "./styles/global";
import { Reset } from "./styles/reset";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

function App() {
  const [theme, setTheme] = useState(true);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(() => ({
    background: {
      color: {
        value: theme ? "#1d004b" : "#121212",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "rgb(0, 255, 98)",
      },
      links: {
        color: "#f700ff",
        distance: 200,
        enable: true,
        opacity: 0.9,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        speed: 2,
      },
      number: {
        density: {
          enable: true,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }), [theme]);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <Reset />
      {theme ? <GlobalStyle /> : <DarkStyle />}
      
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}

      {/* Centralizando o conteúdo */}
      <div 
        style={{ 
          position: "relative", 
          zIndex: 1, 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          width: "100%", 
          // height: "100vh" 
        }}
      >
        <Portifolio setTheme={setTheme} theme={theme} />
      </div>
    </div>
  );
}

export default App;
