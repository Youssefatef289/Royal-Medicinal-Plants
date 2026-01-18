import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import { services } from '../data/services'
import '../styles/Services.css'

const Services = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="page-hero-background">
          <img src="/image/dried-herbs-1.webp" alt="Dried Herbs" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <h1>{t.services.title}</h1>
            <p>{t.services.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid-full">
            {services.map(service => {
              const IconComponent = service.icon
              return (
                <div key={service.id} className="service-card-full">
                  <div className="service-icon-large"><IconComponent /></div>
                  <h3>{language === 'ar' ? service.titleAr : service.title}</h3>
                  <p>{language === 'ar' ? service.descriptionAr : service.description}</p>
                </div>
              )
            })}
          </div>

          <div className="additional-services">
            <h2>{t.services.additionalTitle}</h2>
            <div className="additional-grid">
              <div className="additional-card">
                <h3>{t.services.consultation}</h3>
                <p>{t.services.consultationText}</p>
              </div>
              <div className="additional-card">
                <h3>{t.services.privateLabel}</h3>
                <p>{t.services.privateLabelText}</p>
              </div>
              <div className="additional-card">
                <h3>{t.services.qualityTesting}</h3>
                <p>{t.services.qualityTestingText}</p>
              </div>
              <div className="additional-card">
                <h3>{t.services.supplyChain}</h3>
                <p>{t.services.supplyChainText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

