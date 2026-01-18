import '../styles/Loading.css'

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="loading-logo">
          <img src="/image/royal-med-logo-removebg-preview.png" alt="Royal Medicinal Plants" />
        </div>
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  )
}

export default Loading

