.PHONY: build-dev
build-dev: ## Build the dev docker image.
	docker compose -f compose.dev.yaml build

.PHONY: start-dev
start-dev: ## Start the dev docker container.
	docker compose -f compose.dev.yaml up -d

.PHONY: stop-dev
stop-dev: ## Stop the dev docker container.
	docker compose -f compose.dev.yaml down
  
.PHONY: build-prod
build-prod: ## Build the prod docker image.
	docker compose -f compose.prod.yaml build

.PHONY: start-prod
start-prod: ## Start the prod docker container.
	docker compose -f compose.prod.yaml up -d

.PHONY: stop-prod
stop-prod: ## Stop the prod docker container.
	docker compose -f compose.prod.yaml down
