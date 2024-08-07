import webpack from 'webpack';
import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths, buildEnv } from './config/build/types/config';

export default (env: buildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'dist', 'locales'),
    };

    const mode = env?.mode || 'development';
    const PORT = env?.port || 3000;
    const apiUrl = env?.apiUrl || 'http://localhost:8000';

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend',
    });
    return config;
};
