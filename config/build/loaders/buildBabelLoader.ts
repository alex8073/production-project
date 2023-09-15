import { IBuildOptions } from "../types/config";
import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";

interface IBuildBabelLoaderProps extends IBuildOptions {
    isTsx: boolean;
}

export function buildBabelLoaders({ isDev, isTsx }: IBuildBabelLoaderProps) {
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["ru", "en"],
                            keyAsDefaultValue: true,
                        },
                    ],
                    [
                        "@babel/plugin-transform-typescript",
                        {
                            isTsx,
                        },
                    ],
                    "@babel/plugin-transform-runtime",
                    isTsx && [
                        babelRemovePropsPlugin,
                        {
                            props: ["data-testid"],
                        },
                    ],
                    isDev && require.resolve("react-refresh/babel"),
                ].filter(Boolean),
            },
        },
    };
}
