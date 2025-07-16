#!/bin/bash

# Script de configuración inicial para EC2
# Ejecutar como usuario con permisos sudo

set -e

echo "🚀 Configurando servidor EC2 para despliegue..."

# Actualizar sistema
echo "📦 Actualizando sistema..."
sudo apt update && sudo apt upgrade -y

# Instalar Node.js 18.x
echo "📦 Instalando Node.js 18.x..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verificar instalación
echo "✅ Node.js instalado:"
node --version
npm --version

# Instalar PM2 globalmente
echo "📦 Instalando PM2..."
sudo npm install -g pm2

# Instalar nginx (opcional, para proxy reverso)
echo "📦 Instalando nginx..."
sudo apt install -y nginx

# Configurar firewall
echo "🔥 Configurando firewall..."
sudo ufw allow ssh
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 3000
sudo ufw --force enable

# Crear directorio de la aplicación
echo "📁 Creando directorio de la aplicación..."
sudo mkdir -p /home/ubuntu/app
sudo chown ubuntu:ubuntu /home/ubuntu/app

# Crear directorio de logs
mkdir -p /home/ubuntu/app/logs

# Configurar nginx como proxy reverso (opcional)
echo "⚙️ Configurando nginx..."
sudo tee /etc/nginx/sites-available/psiscodemy-privacy << 'EOF'
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Habilitar sitio
sudo ln -sf /etc/nginx/sites-available/psiscodemy-privacy /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx

# Configurar PM2 para iniciar automáticamente
echo "⚙️ Configurando PM2 startup..."
pm2 startup ubuntu

echo "✅ Configuración del servidor completada!"
echo ""
echo "📋 Próximos pasos:"
echo "1. Configurar los secrets en GitHub:"
echo "   - AWS_ACCESS_KEY_ID"
echo "   - AWS_SECRET_ACCESS_KEY"
echo "   - AWS_REGION"
echo "   - EC2_HOST (IP pública de tu instancia)"
echo "   - EC2_USER (ubuntu)"
echo "   - EC2_SSH_KEY (clave privada SSH)"
echo ""
echo "2. Hacer push a main/master para activar el despliegue"
echo ""
echo "3. Comandos útiles de PM2:"
echo "   pm2 status          # Ver estado de las aplicaciones"
echo "   pm2 logs            # Ver logs"
echo "   pm2 restart all     # Reiniciar todas las apps"
echo "   pm2 stop all        # Detener todas las apps" 