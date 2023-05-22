import { IGlobalReducerState } from "../Base/interface/IGlobalReducerState";

export const getTheme = (state: IGlobalReducerState) => state.theme.theme;

export const getThemeString = (state: IGlobalReducerState) => state.theme.themeString;
