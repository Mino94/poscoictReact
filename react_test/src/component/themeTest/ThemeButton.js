import { useContext } from "react";
import { ThemesContext } from "./ThemeContext";


const ThemeButton = () => {
    const themeContext = useContext(ThemesContext);
    const onClickHandler = () => {
        themeContext.changeMode();
    };

    return (
        <button style={{ background: themeContext.themes.background, color:themeContext.themes.foreground }} onClick={()=>onClickHandler()}>
            버튼 컬러보기
        </button>

    )
};

export default ThemeButton;
