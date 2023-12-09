
import React   from 'react';
import Footer from './home/Footer';
import Hero from './home/Hero';
import Navbar from './home/Navbar';
import Offer from './home/Offer';
import StatCard from './home/StatCard';


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
      <div className='flex-col justify-center md:flex md:flex-row md:py-12'>
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
