# mvps-linting

## Todo

- [ ] EditorConfig
	- Description: EditorConfig helps developers maintain consistent coding styles between different editors
	- GitHub: https://github.com/sindresorhus/editorconfig-sublime
	- SublimeText Package: https://packagecontrol.io/packages/EditorConfig
	- Steps:
		- [ ] Installation Instructions
		- [x] Template
- [x] HTML
- [x] JavaScript
	- Questions
		- which version of ECMAScript? ES5, ES2015 (ES6)
		- What level of browser support? IE11?
	- Linters
		- jshint
		- eslint
			- `$ eslint --init`
- [ ] CSS
- [ ] PHP
- [x] JSON
	- https://packagecontrol.io/packages/SublimeLinter-json
- [ ] MivaScript
- [ ] SMT / MVT


## Notes

### Linters

#### Sublime

1. Intall SublimeLinter plugin
	- Package: https://packagecontrol.io/packages/SublimeLinter
	- Docs: http://www.sublimelinter.com/en/stable/installation.html
1. Install language-specific linters
	- PHP
		- Choice
			- https://packagecontrol.io/packages/SublimeLinter-php
				- Installs: 283K
				- Requirements
					- Packages: SublimeLinter, SublimeLinter-php
					- Software: php
		- Others
			- https://packagecontrol.io/packages/SublimeLinter-phpcs
				- Installs: 73K
			- https://packagecontrol.io/packages/SublimeLinter-phplint
				- Installs: 99k
	- JavaScript
		- jshint
			- Requirements:
				- Packages: SublimeLinter, SublimeLinter-jshint
				- Software:
					- node: https://nodejs.org/en/
					- npm: https://www.npmjs.com/
					- jshint: npm install -g jshint
			- Docs: https://jshint.com/docs/
			- Github: https://github.com/SublimeLinter/SublimeLinter-jshint
				- Stars: 466
			- Sublime Package: https://packagecontrol.io/packages/SublimeLinter-jshint
				- Installs: 341K
		- Others
			- eslint
				- Sublime Package: https://packagecontrol.io/packages/SublimeLinter-eslint
					- Installs: 159K
				- Github: https://github.com/eslint/eslint
					- Stars: 13.7K

	- JSON
		- https://packagecontrol.io/packages/SublimeLinter-json
			- Requirements
				- Packages: SublimeLinter, SublimeLinter-json
	- CSS
		- Choice:
			- csslint
				- GitHub: https://github.com/CSSLint/csslint
					- Stars: 4.3K
				- Rules: https://github.com/CSSLint/csslint/wiki/Rules
				- Sublime Package: https://packagecontrol.io/packages/SublimeLinter-csslint
					- Installs: 193K
				- Requirements:
					- Packages: SublimeLinter, SublimeLinter-jshint
					- Software:
						- node: https://nodejs.org/en/
						- npm: https://www.npmjs.com/
						- csslint: npm install -g csslint
		- Others
			- stylelint
				- Docs: https://stylelint.io/
				- Github:
					- https://github.com/stylelint/stylelint
						- Stars: 6.3k
					- https://github.com/primer/stylelint-config-primer
						- Stars: 112
				- Sublime Packge: https://packagecontrol.io/packages/SublimeLinter-stylelint
					- Installs: 13K
	- XML
		- xmllint
			- Home/Docs: http://xmlsoft.org/xmllint.html
			- Sublime Package: https://packagecontrol.io/packages/SublimeLinter-xmllint
				- Installs: 38K

- Github:

### Formatters

- https://prettier.io/
	- https://packagecontrol.io/packages/JsPrettier
		- Github: https://github.com/jonlabelle/SublimeJsPrettier
			- Stars: 271
		- Sublime Package: https://packagecontrol.io/packages/JsPrettier
			- Installs: 62K
