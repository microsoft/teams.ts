const tseslint = require("typescript-eslint");
const baseConfig = require("@microsoft/teams.config/eslint.config");

module.exports = (async () => {
  const config = await baseConfig;

  return tseslint.config(
    {
      ignores: ["src/server/schema.ts"],
    },
    ...config
  );
})();
