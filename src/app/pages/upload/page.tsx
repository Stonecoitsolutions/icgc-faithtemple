'use client';

import { useState } from 'react';

export default function Upload() {
  const [video, setVideo] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setVideo(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!video) {
      console.error("No video selected");
      return;
    }

    await uploadToCloudinary(video);
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleChange} />
      <button onClick={handleUpload}>Upload Video</button>
    </div>
  );
}

async function uploadToCloudinary(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "YOUR_UPLOAD_PRESET"); // from Cloudinary dashboard

  const res = await fetch(`https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/video/upload`, {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  console.log("Uploaded Video URL:", data.secure_url);
}
