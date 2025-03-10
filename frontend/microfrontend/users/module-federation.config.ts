export const mfConfig = {
  name: "users",
  filename: "remoteEntry.js",
  exposes: {
    './UsersTestControl': './src/components/UsersTestControl.js',
  },
  shared: ["react", "react-dom"],
};
