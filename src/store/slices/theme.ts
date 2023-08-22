import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type ThemeState = {
  darkTheme: boolean;
};

const initialState = {
  darkTheme: false,
} as ThemeState;

type ThemeChangePayload = {
  darkTheme: boolean;
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkTheme: (_state, action: PayloadAction<ThemeChangePayload>) => ({
      darkTheme: action.payload.darkTheme,
    }),
  },
});

export const {setDarkTheme} = themeSlice.actions;

export default themeSlice.reducer;
