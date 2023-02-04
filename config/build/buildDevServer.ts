import {IBuildOptions} from "./types/config";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer({port,}: IBuildOptions): DevServerConfiguration {
    return {
        port,
        open: true,
    };
}
