import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import emailjs from 'emailjs-com';

function Contact() {
  const language = useSelector((state) => state.language);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const content = {
    es: {
      title: 'Contacto',
      name: 'Nombre',
      email: 'Correo electrónico',
      message: 'Mensaje',
      send: 'Enviar',
      downloadCV: 'Descargar CV',
      success: 'Mensaje enviado con éxito',
      error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    },
    en: {
      title: 'Contact',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      downloadCV: 'Download CV',
      success: 'Message sent successfully',
      error: 'Error sending message. Please try again.',
    },
    de: {
      title: 'Kontakt',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      send: 'Senden',
      downloadCV: 'Lebenslauf herunterladen',
      success: 'Nachricht erfolgreich gesendet',
      error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.',
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_kaohhca', // Reemplaza con tu Service ID de EmailJS
      'template_6isq4gi', // Reemplaza con tu Template ID de EmailJS
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'maryqr21@gmail.com',
        to_phone: '637612072',
      },
      'NRcZQ86tDrH3Tc7EZ' // Reemplaza con tu Public key de EmailJS
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, (err) => {
      console.log('FAILED...', err);
      setStatus('error');
    });
  };

  return (
    <div className="contact">
      <h1 className="text-4xl font-bold mb-8 text-primary-brown dark:text-primary-cream">{content[language].title}</h1>
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-primary-brown dark:text-primary-cream">{content[language].name}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-secondary-brown dark:border-secondary-cream rounded bg-primary-cream dark:bg-primary-brown text-primary-brown dark:text-primary-cream"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-primary-brown dark:text-primary-cream">{content[language].email}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-secondary-brown dark:border-secondary-cream rounded bg-primary-cream dark:bg-primary-brown text-primary-brown dark:text-primary-cream"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-primary-brown dark:text-primary-cream">{content[language].message}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-secondary-brown dark:border-secondary-cream rounded bg-primary-cream dark:bg-primary-brown text-primary-brown dark:text-primary-cream h-32"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-full">{content[language].send}</button>
      </form>

      {status && (
        <p className={`mt-4 text-center ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {content[language][status]}
        </p>
      )}

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-secondary-brown dark:text-secondary-cream">Redes Sociales</h2>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-primary-brown dark:text-primary-cream hover:text-secondary-brown dark:hover:text-secondary-cream">LinkedIn</a>
          <a href="#" className="text-primary-brown dark:text-primary-cream hover:text-secondary-brown dark:hover:text-secondary-cream">GitHub</a>
          <a href="#" className="text-primary-brown dark:text-primary-cream hover:text-secondary-brown dark:hover:text-secondary-cream">Twitter</a>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="btn btn-secondary">{content[language].downloadCV}</button>
      </div>
    </div>
  );
}

export default Contact;
