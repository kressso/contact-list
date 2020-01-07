module.exports = {
    publicPath: '/',
    devServer: {
        // host: 'localhost',
        port: 3000
    },
    // TODO: delete this
    chainWebpack: config => {
        config.resolve.alias
            .set("scss", __dirname + "/src/assets/scss")
            .set("fonts", __dirname + "/src/assets/fonts")
            .set("@", __dirname + "/src")
            .set("@shared", __dirname + "/src/components")
            .set("@views", __dirname + "/src/views");
    }
}