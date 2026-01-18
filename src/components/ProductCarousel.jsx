import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ProductCard from './ProductCard'
import '../styles/ProductCarousel.css'

const ProductCarousel = ({ products }) => {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [itemsPerView, setItemsPerView] = useState(5)
  const intervalRef = useRef(null)
  const carouselRef = useRef(null)

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth
      if (width >= 1200) setItemsPerView(5)
      else if (width >= 968) setItemsPerView(4)
      else if (width >= 768) setItemsPerView(3)
      else if (width >= 480) setItemsPerView(2)
      else setItemsPerView(1)
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    const maxIndex = Math.max(0, products.length - itemsPerView)
    
    if (isAutoPlaying && products.length > itemsPerView && maxIndex > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev >= maxIndex) {
            return 0
          }
          return prev + 1
        })
      }, 3000) // Change slide every 3 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, itemsPerView, products.length])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    const maxIndex = Math.max(0, products.length - itemsPerView)
    setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1))
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    const maxIndex = Math.max(0, products.length - itemsPerView)
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1))
  }

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <div className="product-carousel-section">
      <div className="carousel-header">
        <div className="carousel-title-wrapper">
          {language === 'ar' ? (
            <h2 className="carousel-title-arabic">
              <span>منتجات المجموعة</span>
            </h2>
          ) : (
            <div className="carousel-title-svg">
              <img src="/image/cluster-products.svg" alt="Cluster Products" className="title-svg-image" />
            </div>
          )}
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="decoration-line"></div>
          </div>
        </div>
      </div>

      <div 
        className="product-carousel-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={carouselRef}
      >
        <button 
          className="carousel-arrow carousel-arrow-left"
          onClick={handlePrev}
          aria-label="Previous products"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>

        <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}>
          {products.map((product) => (
            <div key={product.id} className="carousel-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <button 
          className="carousel-arrow carousel-arrow-right"
          onClick={handleNext}
          aria-label="Next products"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ProductCarousel

