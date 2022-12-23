install: # Эта команда полезна при первом клонировании репозитория (или после удаления node_modules)
	npm ci
publish: #команда для отладки
	npm publish --dry-run
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
brain-prime:
	node bin/brain-prime.js
lint:
	npx eslint .
