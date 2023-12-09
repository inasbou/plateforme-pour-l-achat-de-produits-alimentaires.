
import React   from 'react';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Offer from './Offer';
import StatCard from './StatCard';


const homepage = () => {
  const stati = [
    {
      title: "All shops in one place",
      Subtitle: "find best products and prices ",
      img: "/images/market.png"
    },
    {
      title: "Add products to basket",
      Subtitle: "select products and order them ",
      img: "/images/product.png"
    },
    {
      title: "Deliver your products fast ",
      Subtitle: "delivery is offered ",
      img: "/images/basket.png"
    }
  ];

 

  return (
    <div className='flex flex-col'>
      <Navbar />
      <Hero />
      <div className='hidden md:flex flex-row md:py-12'>
        {stati.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            Subtitle={stat.Subtitle}
            img={stat.img}
          />
        ))}
      </div>
      <Offer/>
      <Footer/>
    </div>
  );
};



export default homepage

/** const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
 * 
 * 

 * 
 * 
 * <div className="md:hidden">
        <div>
          <StatCard
            title={stati[currentIndex].title}
            Subtitle={stati[currentIndex].Subtitle}
            img={stati[currentIndex].img}
          />
        </div>
      </div> */