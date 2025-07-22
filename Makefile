# Makefile

# Docker lifecycle
up:
	docker compose up --build -d

down:
	docker compose down

start:
	docker compose start

stop:
	docker compose stop

restart:
	docker compose restart

logs:
	docker compose logs -f

# Prisma commands (run inside Node.js container)
migrate:
	docker exec -it clothify-backend npx prisma migrate dev

generate:
	docker exec -it clothify-backend npx prisma generate

studio:
	docker exec -it clothify-backend npx prisma studio

# Shell access to containers
bash-app:
	docker exec -it clothify-backend bash

bash-mysql:
	docker exec -it clothify-mysql bash

# MySQL CLI
mysql-cli:
	docker exec -it clothify-mysql mysql -u root -proot

# Restart PM2 inside the backend container
pm2-restart:
	docker exec clothify-backend pm2 restart all

