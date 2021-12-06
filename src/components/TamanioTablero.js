const TamanioTablero = ({listas, setTamanioTablero, setLista, setCantJugadores, reiniciar}) => {
    return (
        <>
            <label className="etiqueta sinBorde">Tablero:</label>
            <button className="boton verde" onClick={() => {setTamanioTablero("d4x4"); setLista(listas[0]);}}>4 x 4</button>
            <button className="boton amarillo" onClick={() => {setTamanioTablero("d5x4"); setLista(listas[1]);}}>5 x 4</button>
            <button className="boton rojo" onClick={() => {setTamanioTablero("d6x6"); setLista(listas[2]);}}>6 x 6</button>
            <label className="etiqueta sinBorde">Jugadores:</label>
            <button className="botonJugador" onClick={() => {setCantJugadores(1);}}>1</button>
            <button className="botonJugador" onClick={() => {setCantJugadores(2);}}>2</button>
            <button className="boton reiniciar" onClick={reiniciar}>Reiniciar</button>
        </>
    );
}

export default TamanioTablero;