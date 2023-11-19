const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div style={{backgroundImage: 'url(/images/subscribe.jpg)'}} className="subscribe__content">
          <h4>Subscribe to hear about our latest collection</h4>

          <form className="subscribe__form">
            <input type="email" placeholder="Email address" />
            <button type="submit" className="btn btn--rounded btn--yellow">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
};


export default Subscribe