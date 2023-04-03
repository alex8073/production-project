import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { IBuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: IBuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.relative(__dirname, '../../src'),
    };

    config.resolve.modules = [paths.src, 'node_modules'];
    config.resolve.extensions.push('ts', 'tsx');

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module.rules.push(buildCssLoaders(true));

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true,
        __API__: JSON.stringify(''),
    }));

    return config;
};
