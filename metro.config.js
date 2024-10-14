// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
config.resolver.assetExts.push('obj');
config.resolver.assetExts.push('mtl');
config.resolver.assetExts.push('png');
module.exports = withNativeWind(config, { input: './global.css' });
// module.exports = config;
