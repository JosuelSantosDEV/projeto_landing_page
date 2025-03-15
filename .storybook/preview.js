import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/theme';
import {GlobalStyles} from "../src/styles/GlobalStyles"

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: 'light', value: theme.colors.white },
        { name: 'dark', value: theme.colors.primaryColor },
      ],
    },
  },
  decorators: [
      (Story) => (
          <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Story/>
          </ThemeProvider>
        )
  ]
};

export default preview;
