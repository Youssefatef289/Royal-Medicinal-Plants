import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import '../styles/About.css'

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="page-hero-background">
          <img src="/image/medicinal-herbs.jpg" alt="Medicinal Herbs" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <h1>{t.about.title}</h1>
            <p>{t.about.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section about-company">
            <h2>{t.about.companyTitle}</h2>
            <p className="company-description">
              {t.about.companyText}
            </p>
          </div>

          <div className="about-section">
            <h2>{t.about.storyTitle}</h2>
            <p>
              {t.about.storyText1}
            </p>
            <p>
              {t.about.storyText2}
            </p>
          </div>

          <div className="about-section">
            <h2>{t.about.missionTitle}</h2>
            <p>
              {t.about.missionText}
            </p>
          </div>

          <div className="about-section">
            <h2>{t.about.valuesTitle}</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>{t.about.qualityFirst}</h3>
                <p>{t.about.qualityText}</p>
              </div>
              <div className="value-card">
                <h3>{t.about.sustainability}</h3>
                <p>{t.about.sustainabilityText}</p>
              </div>
              <div className="value-card">
                <h3>{t.about.customerFocus}</h3>
                <p>{t.about.customerText}</p>
              </div>
              <div className="value-card">
                <h3>{t.about.integrity}</h3>
                <p>{t.about.integrityText}</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>{t.about.whyTitle}</h2>
            <ul className="features-list">
              {t.about.whyItems.map((item, index) => (
                <li key={index}>✅ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

