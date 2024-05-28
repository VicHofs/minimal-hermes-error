import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { loadModel } from "../utils/tensorflow";
import * as tf from "@tensorflow/tfjs";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

const RootLayout = () => {
  useEffect(() => {
    const load = async () => {
      try {
        await tf.ready();
        // ! the following line is causing the `'viewManagersMetadata' doesn't exist` error somehow
        // const model = await loadModel("my-model");
      } catch (err) {
        console.error("error loading tf model:", err);
      }
    };
  }, []);

  return <RootLayoutNav />;
};

const RootLayoutNav: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default RootLayout;
