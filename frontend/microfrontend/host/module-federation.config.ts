export const mfConfig = {
  name: "host",
  exposes: {},
  remotes: {
    'users': 'users@http://localhost:8081/remoteEntry.js',
    'cards': 'cards@http://localhost:8082/remoteEntry.js'
  },
  shared: ["react", "react-dom"],
};
