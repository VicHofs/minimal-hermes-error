import React from 'react';
import { Stack } from 'expo-router';
import { BlurView } from 'expo-blur';
import { ThemeProvider, DefaultTheme } from '@react-navigation/native';
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

const RootLayout = () => {
  return <RootLayoutNav />;
};

const RootLayoutNav: React.FC = () => {
  return (
    <ThemeProvider value={DefaultTheme}>
      {/* // ! offending line */}
      <BlurView />
      {/* // ! offending line */}
      <Stack>
        <Stack.Screen name="home" />
      </Stack>
    </ThemeProvider>
  );
};

export default RootLayout;
