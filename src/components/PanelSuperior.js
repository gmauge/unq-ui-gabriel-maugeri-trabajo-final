import '../css/PanelSuperior.css';
import DosJugadores from './DosJugadores';
import UnJugador from './UnJugador';
import TamanioTablero from './TamanioTablero';

const PanelSuperior = ({listas, setTamanioTablero, setLista, puntosJ1, puntosJ2, jugador, cantJugadores, setCantJugadores, reiniciar}) => {
    return(
      <div className="panelSuperior"> 
        <TamanioTablero listas={listas} setTamanioTablero={setTamanioTablero} setLista={setLista} setCantJugadores={setCantJugadores} reiniciar={reiniciar} />
        {(cantJugadores === 1)?(
            <UnJugador puntosJ1={puntosJ1}/>  
            ):(
            <DosJugadores puntosJ1={puntosJ1} puntosJ2={puntosJ2} jugador={jugador}/>
            )}
      </div>
    );
}

export default PanelSuperior;