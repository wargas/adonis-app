# ============================
# Stage 1 — Build / Install
# ============================
FROM oven/bun:latest AS build

WORKDIR /app

# Copia apenas os arquivos de dependência primeiro (melhor cache)
COPY package.json bun.lockb* ./

# Instala dependências
RUN bun install --frozen-lockfile

# Copia o resto do projeto
COPY . .

# Se tiver build (TypeScript, etc)
# RUN bun run build


CMD ["bun", "bin/server.ts"]
