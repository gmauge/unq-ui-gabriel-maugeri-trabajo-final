import { useEffect, useState } from 'react';
import Tablero from './components/Tablero';
import PanelSuperior from './components/PanelSuperior';
import Ganador from './components/Ganador';


const lista4x4 = [...'💣💥🎱🦊🦄🐘🐳🍎'];
const lista5x4 = [...'💥🦊🦄🐳🍎🥐🌺🙏😃🌵'];
const lista6x6 = [...'💣💥🎱🦊🦄🐘🐳🍎🥐🌺👈🙏🦴👀🧤🙉😃🌵'];
const listas = [lista4x4, lista5x4, lista6x6];

const App = () => {
  const reiniciar = () => {
    window.location.reload();
  };

  const [tableroMezclado, setTableroMezclado] = useState([]);
  const [fichaSeleccionada, setFichaSeleccionada] = useState(null);
  const [tamanioTablero, setTamanioTablero] = useState("d4x4")
  const [lista, setLista] = useState(listas[0])
  const [animado, setanimado] = useState(false);
  const [cantJugadores, setCantJugadores] = useState(1);
  const [jugador, setJugador] = useState("Jugador 1");
  const [puntosJ1, setPuntosJ1] = useState(0);
  const [puntosJ2, setPuntosJ2] = useState(0);
  
  useEffect( () => {
    const listaMezclada = mexclar([...lista, ...lista]);
    setTableroMezclado(listaMezclada.map( (icono, i) => ({ index: i, icono, flipped: false}) ));
    setPuntosJ1(0); setPuntosJ2(0); setJugador("Jugador 1")
  }, [lista, tamanioTablero, cantJugadores]);

  const mexclar = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const proximoJugador = () =>{
    (cantJugadores === 2 && jugador === "Jugador 1")? (setJugador("Jugador 2")):(setJugador("Jugador 1"));
  }

  const puntuarJugador = () =>{
    (jugador === "Jugador 1")? (setPuntosJ1(puntosJ1 + 1)):(setPuntosJ2(puntosJ2 + 1));
  }
  
  const alHacerClick = memoBlock => {
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let tableroMezcladoCopy = [...tableroMezclado];
    tableroMezcladoCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setTableroMezclado(tableroMezcladoCopy);
    
    if(fichaSeleccionada === null) {
      setFichaSeleccionada(memoBlock);
    } else 
        if(fichaSeleccionada.icono === memoBlock.icono) {
          puntuarJugador();
          setFichaSeleccionada(null);
        } else {
          setanimado(true);
          setTimeout(() => {
            tableroMezcladoCopy.splice(memoBlock.index, 1, memoBlock);
            tableroMezcladoCopy.splice(fichaSeleccionada.index, 1, fichaSeleccionada);
            setTableroMezclado(tableroMezcladoCopy);
            setFichaSeleccionada(null);
            setanimado(false);
            proximoJugador();
          }, 1000);
        }
  }

  const hayGanador = () => {
    let ret = false;
    if ((tamanioTablero === "d4x4" && puntosJ1 + puntosJ2 === 8) ||
        (tamanioTablero === "d5x4" && puntosJ1 + puntosJ2 === 10) ||
        (tamanioTablero === "d6x6" && puntosJ1 + puntosJ2 === 18)) {
        ret = true;
    }
    return ret;
  }

  return (
    <>
    <PanelSuperior listas={listas} setTamanioTablero={setTamanioTablero} setLista={setLista} puntosJ1={puntosJ1} puntosJ2={puntosJ2} jugador={jugador} cantJugadores={cantJugadores} setCantJugadores={setCantJugadores} reiniciar={reiniciar} />
    { (!hayGanador())? 
      (<Tablero animado={animado} alHacerClick={alHacerClick} fichas={tableroMezclado} tamanio={tamanioTablero}/>):
      (<Ganador  cantJugadores={cantJugadores} puntosJ1={puntosJ1} puntosJ2={puntosJ2} />)
    }
    </>
  );
}

export default App;
