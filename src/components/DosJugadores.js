const DosJugadores = ({puntosJ1, puntosJ2, jugador}) => {
    return(
        <>
            <label className="etiqueta sinBorde">Turno de:</label>
            <label className="etiqueta jugador">{jugador}</label>
            <label className="etiqueta sinBorde">Puntos:</label>
            <label className="etiqueta puntos">Jugador 1 = {puntosJ1}</label>
            <label className="etiqueta puntos">Jugador 2 = {puntosJ2}</label>
        </>
    );
}

export default DosJugadores;