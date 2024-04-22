//Style
import styleNews1 from './News1.module.css';

//img
import img from '../../img/image-retro-pcs.jpg';

function News1(props){


    return(
        <div className={styleNews1.container}>
            <div className={styleNews1.divimg}>
                <div><img width={100} src={props.img ? props.img : img} alt="" /></div>
            </div>
            <div className={styleNews1.divtxt}>
                <div className={styleNews1.ttl}><span>{props.numero ? props.numero : "01"}</span></div>
                <div className={styleNews1.ttl1}><span>{props.titulo ? props.titulo : "Reviving Retro PCs"}</span></div>
                <div className={styleNews1.txt}>{props.txt ? props.txt : "What happens when old PCs are given modern upgrades?"}</div>
            </div>
        </div>
    )
}
export default News1