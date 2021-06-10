const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
    configure: {
      module: {
        rules: [
          {
            test: /\.worker\.js$/,
            use: { loader: 'worker-loader' },
          },
        ],
      },
      output: {
        globalObject: 'this',
      },
    },
  },
  typescript: {
    enableTypeChecking: true,
  },
};
