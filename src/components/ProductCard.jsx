import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { getProductForms } from '../data/products'
import '../styles/ProductCard.css'

const ProductCard = ({ product }) => {
  const { language } = useLanguage()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Get available forms for the product
  const availableForms = getProductForms(product, language)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="product-card-new">
      <div className="product-image-new">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-name-new">
        {language === 'ar' ? (product.nameAr || product.name) : product.name}
      </div>
      <div className="product-forms-dropdown">
        <button 
          className="dropdown-toggle" 
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
        >
          <span className="dropdown-label">
            {language === 'ar' ? 'الأشكال المتاحة:' : 'Available Forms:'}
          </span>
          <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </span>
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            {availableForms.map(form => (
              <div key={form.id} className="dropdown-item">
                <span className="form-icon">{form.icon}</span>
                <span className="form-name">{form.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard

