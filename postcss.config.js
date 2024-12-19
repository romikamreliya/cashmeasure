module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // Add CSSNano as a plugin
        require('cssnano')({
            preset: 'default',
        }),
    ]
}
