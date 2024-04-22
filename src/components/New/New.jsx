//Style
import styleNew from './New.module.css';


function New(props) {

    return (
        <div>
            <div className={styleNew.k2732}><h3>{props.titulo ? props.titulo : "Hydrogen VS Electric Cars "}</h3></div>
            <div className={styleNew.k2313}>
                <span>
                    {props.txt ? props.txt : "Will hydrogen-fueled cars ever catch up to EVs?"}
                </span>
            </div>
        </div>
    )
}
export default New