import axios from 'axios';
import fs from 'fs'; // Para leer el archivo
import FormData from 'form-data'; // Para enviar el formulario como multipart
import crypto from 'crypto';

// Configuración de Cloudinary
const CLOUD_NAME = 'dfoc1x1ex';  // Tu Cloud Name de Cloudinary
const API_KEY = '555893663672887';  // Tu API Key
const API_SECRET = '11bVLsENLFtm0uAfHq2P-FTFs8M';  // Tu API Secret
const filePath = 'C:/Users/Usuario/Desktop/Podologia/src/assets/home1.jpg'; // Ruta correcta del archivo en tu sistema

// Generar timestamp y firma
const timestamp = Math.floor(Date.now() / 1000); // Timestamp actual
const signature = crypto
  .createHash('sha1')
  .update(`timestamp=${timestamp}${API_SECRET}`)
  .digest('hex');

// Crear el formulario con el archivo
const form = new FormData();
form.append('file', fs.createReadStream(filePath)); // Agregar el archivo al formulario
form.append('api_key', API_KEY); // Agregar la API Key
form.append('timestamp', timestamp); // Agregar el timestamp
form.append('signature', signature); // Agregar la firma

// Enviar el POST request con Axios
axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, form, {
  headers: {
    ...form.getHeaders(),  // Obtener los headers correctos para el formulario
  }
})
  .then(response => {
    console.log('Archivo subido exitosamente:', response.data);  // Mostrar el resultado de la subida
  })
  .catch(error => {
    console.error('Error al subir el archivo:', error.response ? error.response.data : error.message);  // Mostrar error
  });



