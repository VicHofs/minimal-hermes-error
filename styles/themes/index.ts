import darkTheme from './dark';
import lightTheme from './light';
import { CustomTheme } from './types';

const themes: Record<string, CustomTheme> = {
  light: lightTheme,
  dark: darkTheme,
};
export default themes;
