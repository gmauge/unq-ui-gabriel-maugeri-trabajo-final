import '../css/Ganador.css';

const Ganador = ({cantJugadores, puntosJ1, puntosJ2}) => {
    const yElGanadorEs = () => {
      let ret = "";
      if (cantJugadores === 1){
        ret = "Felicitaciones completaste el juego!!";}
      else if (puntosJ1 === puntosJ2){
              ret = "Hey empataron!!";}
           else if (puntosJ1 > puntosJ2){
                   ret = "Felicitaciones Jugador 1 ganaste!!";}
                else {
                   ret = "Felicitaciones Jugador 2 ganaste!!";}
      return ret;
    }
  
    return(
    <>
    <div className="ganador">
      <label className="etiquetaGanador">{yElGanadorEs()}</label>
    </div>
    </>      
    );
  }

  export default Ganador;