install: # Эта команда полезна при первом клонировании репозитория (или после удаления node_modules)
	npm ci
publish: #команда для
	npm publish --dry-run;
brain-games:#позволит запускать игру без глобальной установки
	bin/brain-games.js