import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch("https://formsubmit.co/ajax/info@daabiz.in", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Contact Us</h2>
                <p className="section-subtitle">
                    Get in touch with us for any inquiries or collaborations.
                </p>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3 className="contact-info-title">Get in Touch</h3>
                        <p className="contact-info-subtitle">
                            We have offices in New Delhi and Vadodara, covering North, East, West, and South India.
                        </p>

                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-info-text">
                                <h4>Vadodara Office</h4>
                                <p>Ground Floor ISHAN, 42 Pratapgunj,<br />Vadodara 390002, India</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-info-text">
                                <h4>New Delhi Office</h4>
                                <p>E-202, LGF, Greater Kailash Part II,<br />New Delhi 110048, India</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="contact-info-text">
                                <h4>Phone</h4>
                                <p>+91 9081259660</p>
                                <p>+91 11 4607 4901-05</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-info-text">
                                <h4>Email</h4>
                                <p>info@daabiz.in</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3 className="contact-form-title">Send Message</h3>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    rows="5"
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`btn btn-primary contact-submit ${status === 'sending' ? 'loading' : ''}`}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <div className="contact-status status-success">
                                    Message sent successfully!
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="contact-status status-error">
                                    Something went wrong. Please try again later.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
