import { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "yet-another-react-lightbox/styles.css";
import { ClipLoader } from "react-spinners";
import styles from "../style";
import { preloadImages } from "../utils/preloadImages";
import CustomLightbox from "./CustomLightbox";
import { useMediaQuery } from "react-responsive";

const Gallery = () => {
  const [categories, setCategories] = useState({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get('/gallery.json');
        const categoriesData = response.data.categories;

        for (const category in categoriesData) {
          const imagesResults = await preloadImages(categoriesData[category].images);
          categoriesData[category].images = imagesResults.map(result => result.success ? result.src : 'placeholder-image-url');
        }

        setCategories(categoriesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const handleImageClick = (category, index) => {
    if (isDesktopOrLaptop) {
      const images = categories[category].images.map(img => ({ src: img, type: 'image' }));
      setLightboxContent(images);
      setCurrentIndex(index);
      setLightboxOpen(true);
    }
  };

  const handleVideoClick = (category, index) => {
    if (isDesktopOrLaptop) {
      const videos = categories[category].videos.map(video => ({ src: video, type: 'video' }));
      setLightboxContent(videos);
      setCurrentIndex(index);
      setLightboxOpen(true);
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    );
  }

  return (
    <div className={styles.galleryContainer}>
      <h2 className="text-4xl font-bold mb-6 text-white">Gallery</h2>
      {Object.keys(categories).map(category => (
        <div key={category} className="category mb-8">
          <h3 className="text-3xl font-semibold mb-4 text-gradient">{category}</h3>
          <div className="mb-4">
            <h4 className="text-2xl font-semibold mb-2 text-white">Images</h4>
            <Slider {...settings}>
              {categories[category].images.map((image, index) => (
                <div key={index} className="gallery-item p-2">
                  <img
                    src={image}
                    alt={`Image ${index + 1} of ${category}`}
                    className="w-full h-auto cursor-pointer"
                    onClick={() => handleImageClick(category, index)}
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-2 text-white">Videos</h4>
            <Slider {...settings}>
              {categories[category].videos.map((video, index) => (
                <div key={index} className="gallery-item p-2">
                  <div className="relative w-full h-auto cursor-pointer">
                    <iframe
                      src={video}
                      width="100%"
                      height="480"
                      allow="autoplay"
                      className="w-full h-auto"
                      frameBorder="0"
                    ></iframe>
                    <button
                      className="absolute top-0 left-0 w-full h-full bg-transparent"
                      onClick={() => handleVideoClick(category, index)}
                    ></button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ))}
      {lightboxOpen && (
        <CustomLightbox
          slides={lightboxContent}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
};

export default Gallery;
