import Logo from '../../assets/icons/logo';


const Footer = () => {
  // const svgIconCode = ` <svg xmlns="http://www.w3.org/2000/svg" height="0.1em" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>`;
  const svgIconCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14" transform="scale(0.5)"/></svg>`;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>Beyond </span>- KnitKnot</h6>
            <p>Beyond Knitknot brings you the essence of Nepali craftsmanship through our authentic knitwear collection. Each piece is meticulously handcrafted in Nepal, showcasing the rich cultural heritage and artisanal skills of the region. Our products embody a blend of traditional techniques and contemporary designs, ensuring both quality and uniqueness in every stitch. Explore our range of Nepali authentic knitwear, where each garment tells a story of dedication, artistry, and timeless elegance.</p>
            <ul className="site-footer__social-networks">
              <li><a href="https://www.instagram.com/beyondknitknot/"><i className="icon-instagram"></i></a></li>
              <li><a href="https://www.youtube.com/channel/UCco8MumSxaZPjZHEyorIzbA"><i className="icon-youtube-play"></i></a></li>
              <li><a href="https://www.tiktok.com/@beyondknitknot"><i dangerouslySetInnerHTML={{ __html: svgIconCode }} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
};


export default Footer