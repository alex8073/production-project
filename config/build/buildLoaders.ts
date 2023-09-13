import webpack from "webpack";
import { IBuildOptions } from "./types/config";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import { buildBabelLoaders } from "./loaders/buildBabelLoader";

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const cssLoader = buildCssLoaders(isDev);

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    const codeBabelLoader = buildBabelLoaders({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoaders({ ...options, isTsx: true });

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoader,
    ];
}
