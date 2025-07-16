# 🚀 Despliegue en EC2 con PM2

Este proyecto incluye un workflow de GitHub Actions para desplegar automáticamente la aplicación Next.js en una instancia EC2 de AWS usando PM2 como gestor de procesos.

## 📋 Prerrequisitos

### 1. Instancia EC2
- Una instancia EC2 con Ubuntu 20.04 o superior
- Acceso SSH configurado
- Grupo de seguridad con puertos 22 (SSH), 80 (HTTP), 443 (HTTPS) y 3000 abiertos

### 2. AWS IAM
- Usuario IAM con permisos para EC2
- Access Key ID y Secret Access Key

### 3. GitHub Repository
- Repositorio con el código de la aplicación
- Acceso para configurar secrets

## 🔧 Configuración Inicial del Servidor

### Paso 1: Conectar al servidor EC2
```bash
ssh -i tu-clave.pem ubuntu@tu-ip-ec2
```

### Paso 2: Ejecutar script de configuración
```bash
# Descargar el script de configuración
curl -O https://raw.githubusercontent.com/tu-usuario/tu-repo/main/scripts/setup-ec2.sh

# Dar permisos de ejecución
chmod +x setup-ec2.sh

# Ejecutar el script
./setup-ec2.sh
```

El script instalará automáticamente:
- Node.js 18.x
- PM2
- Nginx (proxy reverso)
- Configuración de firewall
- Directorios necesarios

## 🔐 Configuración de GitHub Secrets

Ve a tu repositorio en GitHub → Settings → Secrets and variables → Actions y agrega los siguientes secrets:

| Secret | Descripción | Ejemplo |
|--------|-------------|---------|
| `AWS_ACCESS_KEY_ID` | Access Key ID de AWS | `AKIAIOSFODNN7EXAMPLE` |
| `AWS_SECRET_ACCESS_KEY` | Secret Access Key de AWS | `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY` |
| `AWS_REGION` | Región de AWS donde está tu EC2 | `us-east-1` |
| `EC2_HOST` | IP pública de tu instancia EC2 | `54.123.45.67` |
| `EC2_USER` | Usuario SSH (normalmente `ubuntu`) | `ubuntu` |
| `EC2_SSH_KEY` | Clave privada SSH completa | `-----BEGIN RSA PRIVATE KEY-----\n...` |

### Cómo obtener la clave SSH:
```bash
# En tu máquina local
cat ~/.ssh/id_rsa
# Copia todo el contenido incluyendo las líneas BEGIN y END
```

## 🚀 Despliegue Automático

Una vez configurados los secrets, el despliegue se activará automáticamente cuando:

1. Hagas push a la rama `main` o `master`
2. Crees un Pull Request a `main` o `master`

### Proceso de despliegue:
1. ✅ Checkout del código
2. 📦 Instalación de dependencias
3. 🔍 Ejecución de linting
4. 🔨 Build de la aplicación
5. 📤 Transferencia de archivos al servidor
6. ⚙️ Configuración de PM2
7. 🚀 Inicio de la aplicación

## 📊 Monitoreo y Gestión

### Comandos PM2 útiles:
```bash
# Conectar al servidor
ssh -i tu-clave.pem ubuntu@tu-ip-ec2

# Ver estado de las aplicaciones
pm2 status

# Ver logs en tiempo real
pm2 logs

# Ver logs de una aplicación específica
pm2 logs psiscodemy-privacy

# Reiniciar aplicación
pm2 restart psiscodemy-privacy

# Detener aplicación
pm2 stop psiscodemy-privacy

# Eliminar aplicación de PM2
pm2 delete psiscodemy-privacy

# Ver información detallada
pm2 show psiscodemy-privacy

# Monitoreo en tiempo real
pm2 monit
```

### Logs de la aplicación:
Los logs se guardan en `/home/ubuntu/app/logs/`:
- `err.log` - Errores
- `out.log` - Salida estándar
- `combined.log` - Logs combinados

## 🔄 Rollback

Si necesitas hacer rollback a una versión anterior:

```bash
# Conectar al servidor
ssh -i tu-clave.pem ubuntu@tu-ip-ec2

# Ver backups disponibles
ls -la /home/ubuntu/app/backup-*

# Restaurar desde un backup
cd /home/ubuntu/app
pm2 stop psiscodemy-privacy
rm -rf current
cp -r backup-20231201-143022 current
cd current
pm2 start ecosystem.config.js
```

## 🛠️ Configuración Personalizada

### Variables de entorno
Puedes agregar variables de entorno en el archivo `ecosystem.config.js`:

```javascript
env: {
  NODE_ENV: 'production',
  PORT: 3000,
  NEXT_TELEMETRY_DISABLED: '1',
  // Agregar tus variables aquí
  DATABASE_URL: 'tu-url-de-base-de-datos',
  API_KEY: 'tu-api-key'
}
```

### Configuración de nginx
El archivo de configuración de nginx se encuentra en:
- `/etc/nginx/sites-available/psiscodemy-privacy`
- `/etc/nginx/sites-enabled/psiscodemy-privacy`

### SSL/HTTPS
Para configurar HTTPS, puedes usar Let's Encrypt:

```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx

# Obtener certificado
sudo certbot --nginx -d tu-dominio.com

# Renovar automáticamente
sudo crontab -e
# Agregar: 0 12 * * * /usr/bin/certbot renew --quiet
```

## 🐛 Troubleshooting

### Problemas comunes:

1. **Error de permisos SSH**
   - Verificar que la clave SSH esté correctamente configurada
   - Asegurar que el usuario tenga permisos en el directorio

2. **PM2 no inicia la aplicación**
   - Verificar logs: `pm2 logs psiscodemy-privacy`
   - Verificar configuración: `pm2 show psiscodemy-privacy`

3. **Puerto 3000 no accesible**
   - Verificar firewall: `sudo ufw status`
   - Verificar que nginx esté corriendo: `sudo systemctl status nginx`

4. **Error de memoria**
   - Ajustar `max_memory_restart` en `ecosystem.config.js`
   - Considerar aumentar el tamaño de la instancia EC2

### Logs útiles:
```bash
# Logs de nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Logs del sistema
sudo journalctl -u nginx -f
sudo journalctl -u pm2-ubuntu -f
```

## 📞 Soporte

Si tienes problemas con el despliegue:

1. Revisa los logs de GitHub Actions
2. Verifica la configuración de los secrets
3. Revisa los logs del servidor EC2
4. Asegúrate de que todos los prerrequisitos estén cumplidos

---

¡Tu aplicación Next.js estará corriendo en EC2 con PM2! 🎉 