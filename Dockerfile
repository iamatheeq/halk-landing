# HALK Landing — production image for Coolify / any Docker host
# Multi-stage: build with Node, serve with nginx (SPA + large APK)

# ── Stage 1: build ──────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies first (better layer cache)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build`
COPY . .
RUN npm run build

# ── Stage 2: serve ──────────────────────────────────────────────
FROM nginx:1.27-alpine

# SPA-friendly nginx config (client-side routes → index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static assets from Vite build
COPY --from=builder /app/dist /usr/share/nginx/html

# Health check for Coolify / orchestrators
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
