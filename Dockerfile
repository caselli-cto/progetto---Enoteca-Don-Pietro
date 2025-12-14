# STEP 1: Build dell'applicazione React
FROM node:20-alpine AS build

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file di dipendenze
COPY package.json package-lock.json* ./

# Installa le dipendenze
RUN npm ci

# Copia tutto il codice sorgente
COPY . .

# Esegue la build di produzione (crea la cartella /dist)
RUN npm run build

# STEP 2: Server Nginx per servire i file statici
FROM nginx:alpine

# Copia la configurazione custom di Nginx (che creeremo al punto 2)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia i file compilati dallo step precedente alla cartella di Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Espone la porta 80
EXPOSE 80

# Avvia Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]