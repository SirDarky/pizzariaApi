# Usar a imagem oficial do PostgreSQL como base
FROM postgres:latest

# Definir variáveis de ambiente para configurar o banco de dados
ENV POSTGRES_DB=pizzeria
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin

# Copiar scripts de inicialização, se houver
# COPY ./init.sql /docker-entrypoint-initdb.d/

# Expor a porta padrão do PostgreSQL
EXPOSE 5432
