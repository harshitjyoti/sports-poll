import serve from "rollup-plugin-serve";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import image from "@rollup/plugin-image";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import { eslint } from "rollup-plugin-eslint";
const isDev = process.env.NODE_ENV === "development";

const pluginBase = [
    eslint({}),
    postcss({
        extensions: [".css"],
    }),
    nodeResolve({
        extensions: [".jsx", ".js", ".json"],
    }),
    commonjs(),
    babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-react"],
        exclude: "node_modules/**",
    }),
    image(),
    serve({
        open: true,
        verbose: true,
        contentBase: ["", "public"],
        host: "localhost",
        port: 3000,
    }),
];

const pluginsDevelopment = [
    replace({
        "process.env.NODE_ENV": JSON.stringify("development"),
        preventAssignment: true,
    }),
];

const pluginsProduction = [
    replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
        preventAssignment: true,
    }),
    terser(),
];

export default {
    input: "src/index.jsx",
    output: {
        file: "dist/bundle.js",
        format: "esm",
        sourcemap: true,
    },
    plugins: [
        ...pluginBase,
        ...(isDev ? pluginsDevelopment : pluginsProduction),
    ],
};