import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.config({
        extends: ['next/core-web-vitals', 'next/typescript'],
        rules: {
            'import/order': [
                'error',
                {
                    'groups': [
                        [
                            'builtin',
                            'external'
                        ],
                        'internal',
                        [
                            'parent',
                            'sibling',
                            'index'
                        ]
                    ],
                    'alphabetize': {
                        'order': 'asc'
                    },
                    'newlines-between': 'always'
                }
            ],
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            // 'array-bracket-spacing': ['error', 'always'],
            'no-trailing-spaces': [
                'error',
                { 'skipBlankLines': true }
            ],
            'no-multiple-empty-lines': [
                'error',
                { 'max': 1, 'maxEOF': 1 }
            ],
            'react/jsx-max-props-per-line': [
                'error',
                {
                    'maximum': {
                        'single': 1,
                        'multi': 1
                    }
                }
            ],
            'react/jsx-props-no-multi-spaces': ['error'],
            // 'react/jsx-first-prop-new-line': [
            //     'error',
            //     {
            //         'when': 'always'
            //     }
            // ],
            'react/jsx-curly-newline': [
                'error',
                {
                    'multiline': 'require'
                }
            ],
            // 'react/jsx-curly-spacing': [
            //     'error',
            //     {
            //         'when': 'always'
            //     }
            // ],
            'react/jsx-closing-bracket-location': [
                'error',
                {
                    'location': 'tag-aligned'
                }
            ],
            'react/jsx-closing-tag-location': [
                'error',
                {
                    'location': 'tag-aligned'
                }
            ],
        },
    }),
];

export default eslintConfig;
