// ESLint configuration
// http://eslint.org/docs/user-guide/configuring

module.exports = {
    parser: 'babel-eslint',

    extends: [
        'airbnb',
        'plugin:flowtype/recommended',
        'plugin:css-modules/recommended',
        'prettier',
        'prettier/flowtype',
        'prettier/react',
        'plugin:react/recommended',
    ],

    plugins: ['flowtype', 'css-modules', 'prettier'],

    globals: {
        __DEV__: true,
    },

    env: {
        browser: true,
        es6: true,
    },

    rules: {
        'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],

        // Allow only special identifiers
        // https://eslint.org/docs/rules/no-underscore-dangle
        'no-underscore-dangle': [
            'error',
            {
                allow: ['__typename'],
            },
        ],

        // Prefer destructuring from arrays and objects
        // http://eslint.org/docs/rules/prefer-destructuring
        'prefer-destructuring': [
            'error',
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: false,
                    object: false,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to'],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            },
        ],

        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

        eqeqeq: ['error', 'always', { null: 'ignore' }],
        'import/export': 'error',
        'import/first': ['error', 'absolute-first'],
        'import/newline-after-import': 'error',
        'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
        'import/no-duplicates': 'error',
        'jsx-quotes': ['error', 'prefer-double'],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-debugger': 'error',
        'no-empty': 'error',
        'no-multi-assign': ['error'],
        'no-negated-condition': 'off',
        'no-nested-ternary': 'error',
        'no-unused-vars': [
            'error',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
        ],
        'no-useless-constructor': 'error',
        'no-var': 'error',
        'no-param-reassign': 'off',
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],
        'prefer-template': 'error',
        'prettier/prettier': 'error',
        'react/boolean-prop-naming': 'error',
        'react/button-has-type': 'error',
        'react/jsx-boolean-value': ['error', 'never', { always: [] }],
        'react/jsx-curly-brace-presence': [
            'error',
            { props: 'never', children: 'never' },
        ],
        'react/jsx-curly-spacing': ['warn', { when: 'never' }],
        'react/jsx-equals-spacing': ['warn', 'never'],
        'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
        'react/jsx-handler-names': 'warn',
        'react/jsx-max-props-per-line': ['warn', { when: 'multiline' }],
        'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
        'react/jsx-pascal-case': 'error',
        'react/jsx-tag-spacing': [
            'warn',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
            },
        ],
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': 'warn',
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'off',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-multi-comp': 'error',
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-string-refs': 'warn',
        'react/no-this-in-sfc': 'error',
        'react/no-unknown-property': 'warn',
        'react/no-unused-state': 'warn',
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': 'error',
        'react/prefer-stateless-function': 'off',
        'react/require-default-props': 'warn',
        'react/require-render-return': 'warn',
        'react/self-closing-comp': 'warn',
        'react/sort-comp': 'warn',
        'react/void-dom-elements-no-children': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'template-curly-spacing': 'error',
        'react/forbid-prop-types': 'off',
        'react/no-unescaped-entities': 'off',
    },

    settings: {
        // Allow absolute paths in imports, e.g. import Button from 'components/Button'
        // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', 'src'],
            },
        },
    },
}
