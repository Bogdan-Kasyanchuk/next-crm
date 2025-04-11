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
        parser: '@typescript-eslint/parser',
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
                        ],
                        'unknown',
                        'object',
                        'type',
                    ],
                    'pathGroups': [
                        {
                            'pattern': '@/mock/**',
                            'group': 'internal'
                        },
                        {
                            'pattern': '@/lib/**',
                            'group': 'internal'
                        },
                        {
                            'pattern': '@/components/**',
                            'group': 'internal'
                        },
                        {
                            'pattern': '@/ui/**',
                            'group': 'internal'
                        },
                        {
                            'pattern': '@/**',
                            'group': 'internal'
                        },

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
            'react/jsx-first-prop-new-line': [
                'error',
                'multiline'
            ],
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
                    'location': 'line-aligned'
                }
            ],
            // 'react/jsx-indent-props': [ 2, 4 ],
            // 'react/jsx-indent': [
            //     2, 4,
            //      {
            //         indentLogicalExpressions: true
            //     }
            //      ]
            // 'react/jsx-closing-tag-location': [
            //     'error',
            //     {
            //         'location': 'tag-aligned'
            //     }
            // ],
        },
    }),
];

export default eslintConfig;
