export default {
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      { isolatedModules: true, diagnostics: false, useESM: true },
    ],
  },
};