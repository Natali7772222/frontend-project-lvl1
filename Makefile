install: # Эта команда полезна при первом клонировании репозитория (или после удаления node_modules)
	npm ci
publish: #команда для отладки
	npm publish --dry-run;
brain-games:#позволит запускать игру без глобальной установки
	node bin/brain-games.js
lint:
	npx eslint .