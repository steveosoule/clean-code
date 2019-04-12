module.exports = {
	root: true,
    env: {
        browser: true,
        node: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 6
    },
    rules: {
        'indent': [
            'error',
            'tab'
        ],
        'linebreak-style': 0,
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
