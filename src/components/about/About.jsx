function About() {
    return (
      <div className="outro">
        <img className="border-box mobile"
          src="../../../assets/images/shared/mobile/mobilegear.jpg"
          alt="image"
        />
        <img className="border-box tablet"
          src="../../../assets/images/shared/tablet/tabgear.jpg"
          alt="image"
        />
        <img className="border-box desktop"
          src="../../../assets/images/shared/desktop/gearimage.jpg"
          alt="image"
        />
        <div className="txt">
          <h4>
            Bringing you the <span>best</span> audio gear
          </h4>
          <p>
            Located at the heart of New York City, Audiophile is the premier store
            for high end headphones, earphones, speakers, and audio accessories.
            We have a large showroom and luxury demonstration rooms available for
            you to browse and experience a wide range of our products. Stop by our
            store to meet some of the fantastic people who make Audiophile the
            best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    );
  }
  
  export default About
  