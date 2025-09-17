
'use client'

import React, { useState } from 'react'

export default function AdminVideoUpload() {
  const [videoFile, setVideoFile] = useState(null)
  const [videoPreview, setVideoPreview] = useState(null)
  const [heading, setHeading] = useState('')
  const [title, setTitle] = useState('')
  const [speaker, setSpeaker] = useState('')
  const [date, setDate] = useState('')

  const handleVideoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setVideoFile(file)
      setVideoPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', {
      heading,
      title,
      speaker,
      date,
      videoFile
    })
    alert('Video submitted locally for testing')
    // Clear form
    setVideoFile(null)
    setVideoPreview(null)
    setHeading('')
    setTitle('')
    setSpeaker('')
    setDate('')
  }

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Admin Video Upload (Local Test)</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Import Video from PC</label>
          <input type="file" accept="video/*" onChange={handleVideoChange} className="w-full" />
        </div>

        {videoPreview && (
          <video
            controls
            className="w-full h-64 object-cover mt-2"
            src={videoPreview}
          />
        )}

        <div>
          <label className="block font-semibold mb-1">Heading</label>
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="e.g., Week 1"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Sermon Title"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Speaker</label>
          <input
            type="text"
            value={speaker}
            onChange={(e) => setSpeaker(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Speaker Name"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Select Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
