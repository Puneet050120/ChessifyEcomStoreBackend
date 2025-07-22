# ChessifyEcomStoreBackend

---

## 🚀 Project Structure

📦 project-root/
├── 📂src/
│   ├── 📂controllers/       
│   ├── 📂models/            
│   ├── 📂routes/            
│   ├── 📂services/          
│   ├── 📂middlewares/       
│   ├── 📂utils/             
│   ├── 📜app.js             
│   └── 📜server.js          
├── 📂prisma/
│   └── 📜schema.prisma      
├── 📜.env                   
├── 📜docker-compose.yml     
├── 📜Makefile              


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

