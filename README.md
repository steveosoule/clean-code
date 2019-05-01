# clean-code

## Todo

- [x] EditorConfig
	- Description: EditorConfig helps developers maintain consistent coding styles between different editors
	- GitHub: https://github.com/sindresorhus/editorconfig-sublime
	- SublimeText Package: https://packagecontrol.io/packages/EditorConfig
- [x] HTML
	- https://www.npmtrends.com/html-lint-vs-htmlhint-vs-htmllint
	- htmllint
		- Rules: https://github.com/htmllint/htmllint/wiki/Options
	- htmlhint
		- Rules: https://github.com/htmlhint/HTMLHint/wiki/Rules
- [x] JavaScript
	- https://www.npmtrends.com/eslint-vs-jslint-vs-jshint
	- Questions
		- which version of ECMAScript? ES5, ES2015 (ES6)
		- What level of browser support? IE11?
	- Notes
		- https://www.sitepoint.com/comparison-javascript-linting-tools/
	- Linters
		- eslint
			- Rules: https://eslint.org/docs/rules/
			- more customizable
			- `$ eslint --init`
		- jslint
			 - Douglas Crockford
			 - Rules: http://jslint.com/help.html
		- jshint
			- Rules: https://jshint.com/docs/options/
- [x] CSS
	- https://www.npmtrends.com/csslint-vs-stylelint-vs-csscomb
	- stylelint (more customizable)
		- Rules: https://stylelint.io/user-guide/rules/
	- csslint (more popular)
		- Rules: https://github.com/CSSLint/csslint/wiki/Rules
- [X] PHP
	- phpcs (Code Sniffer)
		- Rules: https://github.com/squizlabs/PHP_CodeSniffer
		- Rules: https://github.com/JustBlackBird/gulp-phpcs
	- https://marcofranssen.nl/using-gulp-js-to-check-your-code-quality/
	- php -l
- [x] JSON
	- https://packagecontrol.io/packages/SublimeLinter-json
- [ ] MivaScript
- [ ] SMT / MVT
- [x] Markdown
	- remark
		- https://github.com/remarkjs/gulp-remark
	- markdownlint
		- Rules: https://github.com/DavidAnson/markdownlint#rules--aliases


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
		Choice:
			- eslint
				- Sublime Package: https://packagecontrol.io/packages/SublimeLinter-eslint
					- Installs: 159K
				- Github: https://github.com/eslint/eslint
					- Stars: 13.7K
		- Others
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

	- JSON
		- https://packagecontrol.io/packages/SublimeLinter-json
			- Requirements
				- Packages: SublimeLinter, SublimeLinter-json
	- CSS
		- Choice:
			- stylelint
				- Docs: https://stylelint.io/
				- Github:
					- https://github.com/stylelint/stylelint
						- Stars: 6.3k
					- https://github.com/primer/stylelint-config-primer
						- Stars: 112
				- Sublime Packge: https://packagecontrol.io/packages/SublimeLinter-stylelint
					- Installs: 13K
		- Others
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
	- XML
		- xmllint
			- https://www.npmtrends.com/xmllint-vs-libxml-xsd
			- Home/Docs: http://xmlsoft.org/xmllint.html
			- Sublime Package: https://packagecontrol.io/packages/SublimeLinter-xmllint
				- Installs: 38K

- Github:

### Formatters

- https://prettier.io/
	- https://packagecontrol.io/packages/JsPrettier
		- Options: https://prettier.io/docs/en/options.html
		- Github: https://github.com/jonlabelle/SublimeJsPrettier
			- Stars: 271
		- Sublime Package: https://packagecontrol.io/packages/JsPrettier
			- Installs: 62K

### Best Practices / Reading

- Uncle Bob - https://en.wikipedia.org/wiki/Robert_C._Martin
- https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882
- https://www.investigatii.md/uploads/resurse/Clean_Code.pdf
- https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29
- https://x-team.com/blog/principles-clean-code/
- https://clean-code-developer.com/