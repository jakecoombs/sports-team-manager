build-dev:
	docker build -t sports-team-manager-dev \
	-f dev.Dockerfile .

dev:
	docker run --rm -it \
	-p 3000:3000 \
	sports-team-manager-dev
