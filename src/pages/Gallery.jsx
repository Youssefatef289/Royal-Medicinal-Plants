import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import { products } from '../data/products'
import '../styles/Gallery.css'

const Gallery = () => {
  const { language } = useLanguage()
  const t = translations[language]
  
  // Use product images for gallery
  const galleryImages = products.map(product => ({
    id: product.id,
    image: product.image,
    name: language === 'ar' ? (product.nameAr || product.name) : product.name
  }))

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="page-hero-background">
          <img src="/image/dried-herbs-1.webp" alt="Herbs Gallery" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <h1>{t.gallery.title}</h1>
            <p>{t.gallery.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map(item => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image-wrapper">
                  <img src={item.image} alt={item.name} />
                  <div className="gallery-overlay">
                    <p className="gallery-caption">{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery

