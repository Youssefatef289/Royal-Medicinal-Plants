import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import { products } from '../data/products'
import { services } from '../data/services'
import ProductCarousel from '../components/ProductCarousel'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import '../styles/Home.css'

const Home = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const videoRef = useRef(null)
  const featuredProducts = products
  const featuredServices = services.slice(0, 3)

  // Intersection Observers for animations
  const [featuresRef, featuresVisible] = useIntersectionObserver()
  const [whoWeAreRef, whoWeAreVisible] = useIntersectionObserver()
  const [whyChooseRef, whyChooseVisible] = useIntersectionObserver()
  const [aboutRef, aboutVisible] = useIntersectionObserver()
  const [servicesRef, servicesVisible] = useIntersectionObserver()
  const [ctaRef, ctaVisible] = useIntersectionObserver()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay prevented:', err)
      })
    }
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/image/video Royal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{t.home.heroTitle}</h1>
          <p className="hero-subtitle">{t.home.heroSubtitle}</p>
          <p className="hero-description">
            {t.home.heroDescription}
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">{t.home.exploreProducts}</Link>
            <Link to="/contact" className="btn btn-secondary">{t.home.contactUs}</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className={`features-section ${featuresVisible ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/image/100-healthy.svg" alt="100% Healthy" />
              </div>
              <h3>{t.home.featureHealthy}</h3>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/image/100-locally.svg" alt="100% Locally" />
              </div>
              <h3>{t.home.featureLocally}</h3>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/image/100-natural-2.svg" alt="100% Natural" />
              </div>
              <h3>{t.home.featureNatural}</h3>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/image/100-premium.svg" alt="100% Premium" />
              </div>
              <h3>{t.home.featurePremium}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section ref={whoWeAreRef} className={`who-we-are-section ${whoWeAreVisible ? 'animate-in' : ''}`}>
        <div className="who-we-are-container">
          <div className="who-we-are-background">
            <img src="/image/medicinal-herbs.jpg" alt="Medicinal Herbs Processing" />
            <div className="who-we-are-overlay"></div>
          </div>
          <div className="who-we-are-content">
            <div className="who-we-are-text">
              <h2>{t.home.whoWeAreTitle}</h2>
              <p>{t.home.whoWeAreText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseRef} className={`why-choose-section ${whyChooseVisible ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="why-choose-container">
            <div className="why-choose-content">
              <h2 className="why-choose-title">{t.home.whyChooseTitle}</h2>
              <div className="why-choose-grid">
                <div className="why-choose-card">
                  <div className="card-number">1</div>
                  <h3>{t.home.whyChoose1Title}</h3>
                  <p>{t.home.whyChoose1Text}</p>
                </div>
                <div className="why-choose-card">
                  <div className="card-number">2</div>
                  <h3>{t.home.whyChoose2Title}</h3>
                  <p>{t.home.whyChoose2Text}</p>
                </div>
                <div className="why-choose-card">
                  <div className="card-number">3</div>
                  <h3>{t.home.whyChoose3Title}</h3>
                  <p>{t.home.whyChoose3Text}</p>
                </div>
                <div className="why-choose-card">
                  <div className="card-number">4</div>
                  <h3>{t.home.whyChoose4Title}</h3>
                  <p>{t.home.whyChoose4Text}</p>
                </div>
              </div>
              <Link to="/about" className="btn btn-view-more">{t.home.viewMore}</Link>
            </div>
            <div className="why-choose-image">
              <img src="/image/dried-herbs-1.webp" alt="Medicinal Herbs" />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section ref={aboutRef} className={`about-preview ${aboutVisible ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="about-preview-content">
            <div className="about-preview-image">
              <img src="/image/cuting-basil-1.webp" alt="Harvesting Basil" />
            </div>
            <div className="about-preview-text">
              <h2>{t.home.aboutTitle}</h2>
              <p>
                {t.home.aboutText1}
              </p>
              <p>
                {t.home.aboutText2}
              </p>
              <Link to="/about" className="btn btn-outline">{t.home.learnMore}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section ref={servicesRef} className={`services-preview ${servicesVisible ? 'animate-in' : ''}`}>
        <div className="container">
          <h2 className="section-title">{t.home.servicesTitle}</h2>
          <p className="section-subtitle">{t.home.servicesSubtitle}</p>
          <div className="services-grid">
            {featuredServices.map(service => {
              const IconComponent = service.icon
              return (
              <div key={service.id} className="service-card">
                  <div className="service-icon"><IconComponent /></div>
                  <h3>{language === 'ar' ? service.titleAr : service.title}</h3>
                  <p>{language === 'ar' ? service.descriptionAr : service.description}</p>
              </div>
              )
            })}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-primary">{t.home.viewAllServices}</Link>
          </div>
        </div>
      </section>

      {/* Products Carousel Preview */}
      <section className="products-preview">
        <div className="container">
          <ProductCarousel products={featuredProducts} />
          <div className="section-cta">
            <Link to="/products" className="btn btn-primary">{t.home.viewAllProducts}</Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section ref={ctaRef} className={`cta-section ${ctaVisible ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="cta-content">
            <h2>{t.home.ctaTitle}</h2>
            <p>{t.home.ctaText}</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">{t.home.getInTouch}</Link>
              <Link to="/products" className="btn btn-outline-light">{t.home.browseProducts}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

