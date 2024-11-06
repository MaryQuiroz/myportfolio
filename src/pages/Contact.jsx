import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import emailjs from 'emailjs-com';

function Contact() {
  const language = useSelector((state) => state.language);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const content = {
    es: {
      title: 'Contacto',
      name: 'Nombre',
      email: 'Correo electrónico',
      message: 'Mensaje',
      send: 'Enviar',
      downloadCV: 'Descargar CV ▼',
      downloadFCV: 'CV Frontend',
      downloadBCV: 'CV Backend',
      success: 'Mensaje enviado con éxito',
      error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    },
    en: {
      title: 'Contact',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      downloadCV: 'Download CV ▼',
      downloadFCV: 'Frontend CV',
      downloadBCV: 'Backend CV',
      success: 'Message sent successfully',
      error: 'Error sending message. Please try again.',
    },
    de: {
      title: 'Kontakt',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      send: 'Senden',
      downloadCV: 'Lebenslauf ▼',
      downloadFCV: 'Frontend-Lebenslauf',
      downloadBCV: 'Backend-Lebenslauf',
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
      'service_kaohhca',
      'template_6isq4gi',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'maryqr21@gmail.com',
        to_phone: '637612072',
      },
      'NRcZQ86tDrH3Tc7EZ'
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

  const handleDownloadCV = (cvType) => {
    const cvUrls = {
      frontend: './CV-MaryQuiroz-Frontend.pdf',
      backend: './CV-MaryQuiroz-Backend.pdf'
    };

    const link = document.createElement('a');
    link.href = cvUrls[cvType];
    link.download = `MaryQuiroz-${cvType}-CV.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDropdownOpen(false);
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
        <h2 className="text-2xl font-semibold mb-4 text-secondary-brown dark:text-primary-cream">Redes Sociales</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/maryquiroz/" target="_blank" rel="noopener noreferrer" className="text-primary-brown dark:text-primary-cream hover:text-secondary-brown dark:hover:text-secondary-cream">LinkedIn</a>
          <a href="https://github.com/MaryQuiroz" target="_blank" rel="noopener noreferrer" className="text-primary-brown dark:text-primary-cream hover:text-secondary-brown dark:hover:text-secondary-cream">GitHub</a>
        </div>
      </div>

      <div className=" mt-8 flex items-center justify-center">
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="btn btn-secondary inline-flex items-center"
          >
            {content[language].downloadCV}
          </button>
          
          {isDropdownOpen && (
            <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-primary-cream dark:bg-primary-brown">
              <div className="rounded-md ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <button
                    onClick={() => handleDownloadCV('frontend')}
                    className="block w-full text-left px-4 py-2 text-primary-brown dark:text-primary-cream hover:bg-secondary-cream dark:hover:bg-secondary-brown"
                  >
                    {content[language].downloadFCV}
                  </button>
                  <button
                    onClick={() => handleDownloadCV('backend')}
                    className="block w-full text-left px-4 py-2 text-primary-brown dark:text-primary-cream hover:bg-secondary-cream dark:hover:bg-secondary-brown"
                  >
                    {content[language].downloadBCV}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;