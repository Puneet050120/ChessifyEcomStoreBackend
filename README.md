# ChessifyEcomStoreBackend

---

## 🚀 Project Structure

📦 project-root/
├── 📂src/
│   ├── 📂controllers/       # Route handlers and controller logic
│   ├── 📂models/            # Prisma client and database models
│   ├── 📂routes/            # Express route definitions
│   ├── 📂services/          # Business logic and service classes
│   ├── 📂middlewares/       # Custom Express middlewares
│   ├── 📂utils/             # Utility/helper functions
│   ├── 📜app.js             # Express app initialization
│   └── 📜server.js          # Server entry point
├── 📂prisma/
│   └── 📜schema.prisma      # Prisma schema definition
├── 📜.env                   # Environment variables
├── 📜docker-compose.yml     # Docker container orchestration
├── 📜Makefile              # Build and dev task definitions


---

## 📦 Makefile Commands

### 🐳 Docker Container Management

| Command           | Description                             |
|------------------|-----------------------------------------|
| `make up`        | Build and start all containers          |
| `make down`      | Stop and remove all containers          |
| `make start`     | Start stopped containers                |
| `make stop`      | Stop running containers                 |
| `make restart`   | Restart containers                      |
| `make logs`      | Show and follow container logs          |

---

### 🧩 Prisma ORM Commands

| Command           | Description                             |
|------------------|-----------------------------------------|
| `make migrate`   | Run Prisma database migrations          |
| `make generate`  | Generate Prisma client                  |
| `make studio`    | Open Prisma Studio UI in browser        |

---

### 🐚 Working Inside Containers

| Command           | Description                             |
|------------------|-----------------------------------------|
| `make bash-app`  | Enter backend container bash shell      |
| `make bash-mysql`| Enter MySQL container bash shell        |
| `make mysql-cli` | Open MySQL CLI inside container         |

---

