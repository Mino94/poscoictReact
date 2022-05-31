import { createContext } from "react";
import { themes } from "./Themes";

export const ThemesContext = createContext({
    themes: themes.dark, changeMode: ()=>{}
});
