//style
import styleNavBar from './NavBar.module.css';

//img
import logo from '../../img/logo.svg';
import iconmenuclose from '../../img/icon-menu-close.svg';
import iconmenu from '../../img/icon-menu.svg';
import { useState } from 'react';

//Hooks

function NavBar() {

    const [Menu, setMenu] = useState(false)

    return (
        <div className={styleNavBar.container}>
            <div className={styleNavBar.navbar}>
                <div className={styleNavBar.containerlogo}>
                    <div><img src={logo} alt="" /></div>
                </div>
                <div className={styleNavBar.iconmenu}><button className={styleNavBar.btniconmenu} onClick={()=> setMenu(Menu ? false : true)}><img src={iconmenu} alt="" /></button></div>
                <div className={styleNavBar.containermenunavbar}>
                    <button className={styleNavBar.iconmenuclose}><img src={iconmenuclose} alt="" /></button>
                    <button className={styleNavBar.btnmenu}>Home</button>
                    <button className={styleNavBar.btnmenu}>New</button>
                    <button className={styleNavBar.btnmenu}>Popular</button>
                    <button className={styleNavBar.btnmenu}>Trending</button>
                    <button className={styleNavBar.btnmenu}>Categories</button>
                </div>
                {Menu && (
                    <div className={styleNavBar.containermenunavbar1}>
                        <button className={styleNavBar.iconmenuclose} onClick={()=> setMenu(Menu ? false : true)}><img src={iconmenuclose} alt="" /></button>
                        <button className={styleNavBar.btnmenu}>Home</button>
                        <button className={styleNavBar.btnmenu}>New</button>
                        <button className={styleNavBar.btnmenu}>Popular</button>
                        <button className={styleNavBar.btnmenu}>Trending</button>
                        <button className={styleNavBar.btnmenu}>Categories</button>
                    </div>
                )}

            </div>
        </div>
    )
}
export default NavBar