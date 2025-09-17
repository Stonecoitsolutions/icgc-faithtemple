app/adminsermon/page.tsx
'use client'

import { useState } from 'react'
import { uploadSermon } from '@/src/utils/uploadSermon'

export default function AdminSermonPage() {
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file || !title) {
      alert("Please provide a title and a video file")
      return
    }

    setStatus('Uploading...')

    try {
      await uploadSermon(file, title, description)
      setStatus('Upload successful!')
      setFile(null)
      setTitle('')
      setDescription('')
    } catch (error) {
      console.error(error)
      setStatus('Upload failed')
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow mt-10 rounded">
      <h2 className="text-2xl font-bold mb-4">Upload Sermon</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Sermon Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Upload
        </button>
        {status && <p className="text-sm text-gray-600">{status}</p>}
      </form>
    </div>
  )
}
