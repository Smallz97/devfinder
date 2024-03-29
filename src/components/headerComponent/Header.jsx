import DarkIcon from "../../assets/icons/dark"
import LightIcon from "../../assets/icons/light"
import { toggleTheme } from "../../app/userSlice"
import { useSelector, useDispatch } from "react-redux"
import styles from "./Header.module.css"
const Header = () => {
    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.user);

    const fillColor = theme === 'light' ? '#697C9A' : theme === 'dark' ? '#FFFFFF' : '#697C9A';

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
                    {theme === "light" ? "dark" : "light"}
                </div>
                <div className={styles.switchIcon}>
                    {theme === "light" ? <DarkIcon fillColor={fillColor} /> : <LightIcon fillColor={fillColor} />}
                </div>
            </button>
        </div>
    )
}

export default Header;
