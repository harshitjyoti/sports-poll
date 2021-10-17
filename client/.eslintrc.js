module.exports = {
    env: {
        commonjs: true,
        node: true,
        browser: true,
        es6: true,
        jest: true,
    },
    plugins: ["cypress"],
    parser: "babel-eslint",
    rules: {
        semi: "off",
    },
};