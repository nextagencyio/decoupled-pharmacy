'use client'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80&fit=crop',
    alt: 'Pharmacy consultation',
  },
  {
    src: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=600&q=80&fit=crop',
    alt: 'Health and wellness products',
  },
  {
    src: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80&fit=crop',
    alt: 'Pharmacist at work',
  },
  {
    src: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&q=80&fit=crop',
    alt: 'Modern pharmacy interior',
  },
]

export default function PhotoGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Our Pharmacy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A welcoming environment where health and community come together.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl group aspect-square">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
