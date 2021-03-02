/** @type {import('snowpack').SnowpackUserConfig } */
module.exports = {
  alias: {
    "react": "../../node_modules/preact/compat/dist/compat.js",
    "react-dom": "../../node_modules/preact/compat/dist/compat.js",
  },
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  workspaceRoot: '../../',
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-webpack',
    // ['@snowpack/plugin-babel', {
    //   input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
    //   transformOptions: {
    //     presets: [
    //       [
    //         '@babel/preset-env',
    //         {
    //           'targets': {
    //             'esmodules': true
    //           },
    //           'modules': false,
    //           'useBuiltIns': false
    //         }
    //       ],
    //       '@babel/preset-typescript',
    //       ['@babel/preset-react', {
    //         runtime: 'automatic'
    //       }]
    //     ],
    //     plugins: [
    //       'babel-plugin-styled-components',
    //     ]
    //   }
    // }]
  ],
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  buildOptions: {
    sourcemap: true,
  }
};
