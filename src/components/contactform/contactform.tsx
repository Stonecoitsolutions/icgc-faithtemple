'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', phone: '', title: '', message: '' });
      } else {
        setStatus('Something went wrong.');
      }
    } catch (err) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold text-center">SEND US A MESSAGE</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />

        <input
        type="text"
        name="email"
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />

      <input
        type="text"
        name="title"
        placeholder="Subject/Title"
        value={form.title}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        value={form.message}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Send Message
      </button>

      <p className="text-center text-sm">{status}</p>
    </form>
  );
}
