install: # Эта команда полезна при первом клонировании репозитория (или после удаления node_modules)
	npm ci
publish: #команда для отладки
	npm publish 
brain-games:#позволит запускать игру без глобальной установки
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-progression:
	node bin/brain-progression.js
lint:
	npx eslint .
rules:
  no-console: 0
  import/extensions: # FIXME: remove when rule will be adjusted for new nodejs version
    - error
    - ignorePackages
    - js: always
  no-underscore-dangle: [2, { "allow": ["__filename", "__dirname"] }]