const base = require("./base.js");
module.exports = {
  ...base,
  extends: ["eslint:recommended"],
  plugins: ["sort-keys-fix"],
  rules: {
    "sort-keys-fix/sort-keys-fix": "error",
  },
};
