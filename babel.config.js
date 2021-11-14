module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@StyleUtils': './src/utils/styleUtils',
          '@Store': './src/store',
          '@Components': './src/components',
          '@Navigators': './src/navigators',
          '@Screens': './src/screens',
          '@Theme': './src/theme',
          '@Assets': './src/assets',
          '@Configs': './src/configs',
          '@Utils': './src/utils',
        },
      },
      'react-native-reanimated/plugin',
    ],
    'react-native-reanimated/plugin',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
};
