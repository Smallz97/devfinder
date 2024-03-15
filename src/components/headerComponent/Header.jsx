import DarkIcon from "../../assets/icons/dark"
import LightIcon from "../../assets/icons/light"
import { toggleTheme } from "../../app/userSlice"
import { useSelector, useDispatch } from "react-redux"
import styles from "./Header.module.css"
const Header = () => {
    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.user);
    
    const toggler = () => {
        dispatch(toggleTheme());
    }
    return (
        <div className={styles.header}>
            <div id="logo" className={styles.brand}>
                devfinder
            </div>
            <button id="theme" className={styles.themeSwitch} onClick={toggler}>
                <div className={styles.switchIconText}>
                    {theme === "dark" ? "light" : "dark"}
                </div>
                <div className={styles.switchIcon}>
                   {theme === "dark" ? <LightIcon /> : <DarkIcon />}
                </div>
            </button>
        </div>
    )
}

export default Header;
