import { Link } from "react-router-dom"
import styles from "./header.module.css"     


function Header(){
    return(
        <header className={styles.cabecalho}>
            <h1>Rick and Morty</h1>
            
            <nav className={styles.menu}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="./components/Galeria">Galeria</Link></li>
                    <li> <Link to="./components/Episodios">Episódios</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
