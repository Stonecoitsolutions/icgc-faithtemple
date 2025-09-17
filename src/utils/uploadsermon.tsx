import { storage, db } from "../firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { collection, addDoc, Timestamp } from "firebase/firestore"

export async function uploadSermon(file: File, title: string, description: string) {
  const storageRef = ref(storage, `sermons/${Date.now()}-${file.name}`)
  const snapshot = await uploadBytes(storageRef, file)
  const downloadURL = await getDownloadURL(snapshot.ref)

  await addDoc(collection(db, "sermons"), {
    title,
    description,
    url: downloadURL,
    uploadedAt: Timestamp.now(),
  })

  return downloadURL
}
