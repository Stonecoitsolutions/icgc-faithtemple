'use client';

export default function LocationMap() {
  const destination = "ICGC Faith Temple, Ofankor";

  const handleOpenGoogleMaps = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
          window.open(url, "_blank");
        },
        () => {
          alert("Could not get your location. Enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported in this browser.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 justify-center">Our Location</h2>
      <div className="rounded-lg overflow-hidden shadow-lg mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15881.668620575632!2d-0.2814656496048078!3d5.652637299658859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9f2e26993f1b%3A0x9d909811009a8adc!2sICGC%20Faith%20Temple%2C%20Ofankor!5e0!3m2!1sen!2sgh!4v1752092899979!5m2!1sen!2sgh"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="text-center">
        <button
          onClick={handleOpenGoogleMaps}
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          📍 Start Live Navigation
        </button>
      </div>
    </div>
  );
}
