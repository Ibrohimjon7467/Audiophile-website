function ProductGallery({ data }) {
    return (
        <div className="gallery-product">
            <div className="first-img">
                <img className="mobile" src={data.gallery.first.mobile} alt="image" />
                <img className="tablet" src={data.gallery.first.tablet} alt="image" />
                <img className="desktop" src={data.gallery.first.desktop} alt="image" />
            </div>
            <div className="second-img">
                <img className="mobile" src={data.gallery.second.mobile} alt="image" />
                <img className="tablet" src={data.gallery.second.tablet} alt="image" />
                <img className="desktop" src={data.gallery.second.desktop} alt="image" />
            </div>
            <div className="third-img">
                <img className="mobile" src={data.gallery.third.mobile} alt="image" />
                <img className="tablet" src={data.gallery.third.tablet} alt="image" />
                <img className="desktop" src={data.gallery.third.desktop} alt="image" />
            </div>
        </div>
    );
}

export default ProductGallery