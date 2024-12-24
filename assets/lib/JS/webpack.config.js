module.exports = {
    entry: ['./test.es6'],
    output: {
        path: __filename + '/build',
        filename: 'bundle.js'
    }
}