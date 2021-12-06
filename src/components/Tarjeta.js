import '../css/Tarjeta.css';


const Tarjeta = ({animando, alHacerClick, ficha}) => (
    <div className="tarjeta" onClick={() => (!ficha.flipped && !animando) && alHacerClick(ficha)}>
        <div className={`tarjeta-inner ${ficha.flipped && 'tarjeta-girada'}`}>
            <div className="tarjeta-front">
                ❔
            </div>
            <div className="tarjeta-back">
                {ficha.icono}
            </div>
        </div>
    </div>
)

export default Tarjeta;