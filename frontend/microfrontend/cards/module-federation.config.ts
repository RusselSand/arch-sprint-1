export const mfConfig = {
  name: "cards",
  filename: "remoteEntry.js",
  exposes: {
    './CardsTestControl': './src/components/CardsTestControl.js',
  },
  shared: ["react", "react-dom"],
};
