Node.js application that uses local dockerized LLM models to analyze receipts images and returns the content

Requires: Docker

After cloning the project run:

docker compose --build

should start 2 docker containers running:
 - express server
 - model ( locally ) with ollama




