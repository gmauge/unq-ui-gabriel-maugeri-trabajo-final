import Tarjeta from './Tarjeta';
import '../css/Tablero.css';

const Tablero = ({animando, alHacerClick, fichas, tamanio}) => {
    return (
        <div className="contenedorTablero">
            <div className={"tablero " + tamanio}>
                {fichas.map( (ficha, i) => {
                    return <Tarjeta key={`${i}_${ficha.emoji}`} animando={animando} alHacerClick={alHacerClick} ficha={ficha} />
                })}
            </div>
        </div>
    );
}

export default Tablero;