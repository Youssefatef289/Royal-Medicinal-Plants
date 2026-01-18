import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import '../styles/Products.css'

const Products = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="products-page">
      <section className="page-hero">
        <div className="page-hero-background">
          <img src="/image/medicinal-herbs.jpg" alt="Medicinal Plants" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <h1>{t.products.title}</h1>
            <p>{t.products.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="products-content">
        <div className="container">
          <div className="products-grid-full">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products

