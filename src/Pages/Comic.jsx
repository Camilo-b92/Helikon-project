import { useState } from 'react'
import '../styles/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="contact-page">

      {/* Hero */}
      <section className="contact-hero text-white text-center py-5">
        <div className="container py-4">
          <h1 className="display-4 fw-bold mb-3">Contacto</h1>
          <p className="lead text-white-50 mb-0">
            ¿Tienes algo que contarnos? Escríbenos.
          </p>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">

              {submitted && (
                <div className="alert alert-success mb-4" role="alert">
                  ✅ ¡Mensaje enviado! Pronto te responderemos.
                </div>
              )}

              <div className="card border-0 shadow-sm p-4 p-md-5">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Nombre</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold">Asunto</label>
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="¿De qué quieres hablar?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold">Mensaje</label>
                      <textarea
                        name="message"
                        className="form-control"
                        rows="5"
                        placeholder="Escribe tu mensaje aquí..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12 mt-2">
                      <button type="submit" className="btn btn-dark w-100 py-2 fw-semibold">
                        Enviar mensaje →
                      </button>
                    </div>

                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact