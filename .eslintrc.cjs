module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'import/no-extraneous-dependencies': 0,
		'react/jsx-props-no-spreading': 0,
		'react/react-in-jsx-scope': 0,
		semi: ['error', 'always', { omitLastInOneLineBlock: false }],
		quotes: ['error', 'single'],
		'comma-dangle': ['error', 'never'],
		'react/prop-types': 0,
		indent: ['error', 'tab'],
		'no-shadow': 0,
		'@typescript-eslint/no-shadow': 0,
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				parser: 'typescript',
				endOfLine: 'auto',
				printWidth: 80,
				trailingComma: 'none',
				useTabs: true,
				tabWidth: 2
			}
		]
	}
};
