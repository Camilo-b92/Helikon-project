import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section className="container py-5">
      <h1 className="display-4 fw-bold mb-4">Contacto</h1>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mensaje</label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact