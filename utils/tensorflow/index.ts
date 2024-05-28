import * as tf from "@tensorflow/tfjs";
import { bundleResourceIO } from "@tensorflow/tfjs-react-native";
import * as myModel from "./models/my-model";

const models = {
  "my-model": {
    name: "my-model",
    model: myModel.model,
    weights: myModel.weights,
    classNames: myModel.classNames,
  },
};

export const loadModel = async (name: keyof typeof models) => {
  return await tf
    .loadLayersModel(
      bundleResourceIO(
        models[name].model as tf.io.ModelJSON,
        models[name].weights
      )
    )
    .catch((e) => console.log(e));
};
