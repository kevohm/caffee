import coffeeOne from "../assets/coffee_1.png";
import coffeeTwo from "../assets/coffee_2.png";
import coffeeThree from "../assets/coffee_3.png";
import coffeeFour from "../assets/coffee_4.png";
import coffeeCup from "../assets/coffee_cup.png";
import coffee from "../assets/coffee_image.png";
import coffeeSplash from "../assets/coffee_splash_left.png";

import badgeIcon from "../assets/badge.png";
import bestPriceIcon from "../assets/best-price.png";
import coffeeBeansIcon from "../assets/coffee-beans.png";
import coffeeCupIcon from "../assets/coffee-cup.png";
import coffeePouring from "../assets/coffee_pouring.png";
import coffeeSplashBoth from "../assets/coffee_splash_both.png";
import coffeeSplashRight from "../assets/coffee_splash_right.png";
import arrowLeftIcon from "../assets/left-arrow.png";
import profileOne from "../assets/profile-1.jpg";
import profileTwo from "../assets/profile-2.jpg";
import profileThree from "../assets/profile-3.jpg";
import profileFour from "../assets/profile-4.jpg";
import arrowRightIcon from "../assets/right-arrow.png";
import quoteIcon from "../assets/quote.png";
import coffeeSubscribe from "../assets/coffee-subscribe.png";
import coffeeFooter from "../assets/fotter_image.png";
import coffeeRight from "../assets/coffee_left.png";
import coffeeLeft from "../assets/coffee_right.png";
import { useState } from "react";

const Landing = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(1)
  const coffees = [
    {
      name: "Cappuccinno",
      price: 8.5,
      milk: 50,
      coffee: 50,
      image: coffeeOne,
    },
    {
      name: "Chai Latte",
      price: 8.5,
      milk: 50,
      coffee: 50,
      image: coffeeTwo,
    },
    {
      name: "Macchiato",
      price: 8.5,
      milk: 50,
      coffee: 50,
      image: coffeeThree,
    },
    {
      name: "Expresso",
      price: 8.5,
      milk: 50,
      coffee: 50,
      image: coffeeFour,
    },
  ];
  const features = [
    {
      icon: coffeeCupIcon,
      title: "Extraordinary",
      desc: "Coffee like you have never tasted",
    },
    {
      icon: coffeeBeansIcon,
      title: "Supreme Beans",
      desc: "Beans that provides great taste",
    },
    {
      icon: badgeIcon,
      title: "High Quality",
      desc: "We provide the highest quality",
    },
    {
      icon: bestPriceIcon,
      title: "Affordable Price",
      desc: "Our Coffee prices are easy to afford",
    },
  ];
  const testimonials = [
    {
      name: "John Doe",
      role: "Project Manager",
      feedback: "Caffee is simply the best! The coffee is amazing and the atmosphere is perfect for getting work done. I have been coming here for years and it never disappoints. The staff is always friendly and the environment is very conducive to productivity. Highly recommend!",
      image: profileOne,
    },
    {
      name: "Jane Smith",
      role: "Software Engineer",
      feedback: "I love coming to Caffee every morning. The coffee is always fresh and the staff is super friendly. It's the perfect place to start my day. The ambiance is great and I often find myself staying longer than planned just to enjoy the vibe. A must-visit for coffee enthusiasts!",
      image: profileTwo,
    },
    {
      name: "Sam Wilson",
      role: "Designer",
      feedback: "Caffee has the best coffee in town. I can't start my day without a cup from here. The quality of the coffee is unmatched and the variety of options available is impressive. The cozy setting makes it a great place to relax and get creative work done.",
      image: profileThree,
    },
    {
      name: "Lisa Brown",
      role: "Marketing Specialist",
      feedback: "The coffee at Caffee is top-notch. I highly recommend it to all coffee lovers. The rich flavors and the perfect blend make it a delightful experience every time. The customer service is exceptional and the overall experience is always pleasant. Definitely a favorite spot!",
      image: profileFour,
    },
  ];
  const nextTestimonial = ()=>{
    setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)
  }
  const prevTestimonial = ()=>{
    setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)
  }
  return (
    <main className="bg-white max-w-[1440px] mx-auto">
      <section
        className="w-full flex flex-col"
        style={{
          backgroundImage: `linear-gradient(90deg, black 0%, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0.3) 70%, transparent 100%), url(${coffee})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <nav className="py-5 px-12 flex text-white justify-between">
          <p className="capitalize font-clicker-script text-3xl">Caffee</p>
          <ul className="flex space-x-5 items-center capitalize">
            <li><a href="#home">Home</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
          <div className="flex items-center space-x-5">
            <button>Sign In</button>
            <button className="btn btn-primary font-medium">Sign Up</button>
          </div>
        </nav>
        <div className="flex p-12">
          <div className="text-white flex flex-col space-y-5 text-xl max-w-[527px]">
            <p>We’ve got your morning covered with</p>
            <span className="font-clicker-script text-[200px]">Coffee</span>
            <p>
              It is best to start your day with a cup of coffee. Discover the
              best flavours coffee you will ever have. We provide the best for
              our customers.
            </p>
            <button className="btn btn-primary w-max">Order Now</button>
          </div>
        </div>
      </section>
      <section
        className="relative flex items-center p-12 py-24 space-x-12"
        style={{
          backgroundImage: `url(${coffeeSplash})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-[0.5] flex flex-col space-y-5 items-start">
          <h2 className="text-5xl font-bold text-secondary">
            Discover the best coffee
          </h2>
          <p className="text-grey text-xl">
            Caffee is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
        <div className="max-w-[500px] flex-[0.5]">
          <img src={coffeeCup} alt="coffee cup" />
        </div>
      </section>
      <section className="flex flex-col items-center p-12 space-y-12">
        <header className="mx-auto flex flex-col space-y-2.5 items-center">
          <h2 className="text-5xl font-bold text-secondary">
            Enjoy a new blend of coffee style
          </h2>
          <p className="text-grey text-xl">
            Explore all flavours of coffee with us. There is always a new cup
            worth experiencing
          </p>
        </header>
        <div className="grid grid-cols-4 gap-5">
          {coffees.map((coffee, index) => {
            return (
              <div
                className="max-w-xl relative text-secondary pb-10 bg-primary/20 border border-primary/50"
                key={index}
              >
                <img src={coffee.image} alt="coffee one" />
                <div className="flex flex-col items-center">
                  <p className="font-bold">{coffee.name}</p>
                  <div className="flex items-center space-x-2 text-black">
                    <p>Coffee {coffee.coffee}%</p> <span>|</span>
                    <p>Milk {coffee.milk}%</p>
                  </div>
                  <p className="font-bold">${coffee.price}</p>
                </div>
                <button className="btn btn-primary absolute -bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  Order Now
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <section
        className="flex flex-col items-center p-12 space-y-24"
        style={{
          backgroundImage: `url(${coffeeSplashRight})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <header className="mx-auto flex flex-col space-y-2.5 items-center">
          <h2 className="text-5xl font-bold text-secondary">
            Why are we different?
          </h2>
          <p className="text-grey text-xl">
            We don’t just make your coffee, we make your day!
          </p>
        </header>
        <div className="grid grid-cols-4 gap-5">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="p-5 bg-primary/20 hover:bg-primary/40 border border-primary/50 flex flex-col items-center space-y-5"
              >
                <img src={feature.icon} alt="icon" />
                <div className="flex flex-col space-y-2.5 items-center">
                  <p className="font-bold text-secondary">{feature.title}</p>
                  <p className="text-grey">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mx-auto flex flex-col space-y-2.5 items-center"></div>
        <div className="mx-auto flex flex-col space-y-2.5 items-center">
          <p className="text-grey text-xl">
            Great ideas start with great coffee, Lets help you achieve that
          </p>
          <h2 className="text-3xl font-bold text-secondary">
            Get started today.
          </h2>
          <button className=" btn btn-primary">Join Us</button>
        </div>
      </section>
      <section
        className="flex min-h-[500px] flex-col items-start justify-center p-12 space-y-12"
        style={{
          backgroundImage: `url(${coffeePouring})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white max-w-xl flex flex-col space-y-6">
          <p className="font-bold text-5xl">
            Get a chance to have an Amazing morning
          </p>
          <p>
            We are giving you are one time opportunity to experience a better
            life with coffee.
          </p>
          <button className="btn w-max btn-primary">Order Now</button>
        </div>
      </section>
      <section
        className="flex min-h-[900px] flex-col items-center justify-start p-12 space-y-12"
        style={{
          backgroundImage: `url(${coffeeSplashBoth})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <header className="mx-auto flex flex-col space-y-2.5 items-center">
          <h2 className="text-5xl font-bold text-secondary">
            Our coffee perfection feedback
          </h2>
          <p className="text-grey text-xl">
            Our customers has amazing things to say about us
          </p>
        </header>
        <div className="w-full px-12">
          <div className="relative bg-primary/5 h-[550px] py-10 px-26 border border-primary/50 flex flex-col space-y-12 items-center justify-center">
            <p className="text-center text-grey leading-8">
              {testimonials[currentTestimonial].feedback}
            </p>
            <div className="flex flex-col space-y-2.5 items-center">
              <p className="text-secondary text-3xl font-bold">{testimonials[currentTestimonial].name}</p>
              <p className="text-grey">{testimonials[currentTestimonial].role}</p>
            </div>
              <span className=" absolute top-26 left-22 text-9xl transform -translate-x-1/2 -translate-y-1/2">
                <img src={quoteIcon} alt="quote icon" />
              </span>
            <div className="h-24 w-24 absolute -bottom-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                className="h-full w-full rounded-lg object-top object-cover"
                src={testimonials[currentTestimonial].image}
                alt="john doe"
              />
            </div>
            <button onClick={prevTestimonial} className="bg-primary p-5 rounded-lg flex items-center justify-center top-1/2 -right-8 absolute">
              <img src={arrowRightIcon} alt="arrow right" />
            </button>
            <button onClick={nextTestimonial} className="bg-primary p-5 rounded-lg flex items-center justify-center top-1/2 -left-8 absolute">
              <img src={arrowLeftIcon} alt="arrow left" />
            </button>
          </div>
        </div>
      </section>
      <section className="overflow-x-hidden">
      <section className="relative flex h-[374px] flex-col items-center justify-center p-12 space-y-12"
      style={{
        background:"rgba(96,56,9,.9)",
        backgroundImage: `url(${coffeeSubscribe})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
      >
        <img className="w-[444px] absolute -bottom-1/2 -left-1/8" src={coffeeRight} alt="coffee pouring from right" />
        <img className="w-[444px] absolute -bottom-1/2 -right-1/8" src={coffeeLeft} alt="coffee pouring from left" />
        <header className="mx-auto flex flex-col space-y-2.5 items-center">
          <h2 className="text-5xl font-bold text-white">
          Subscribe to get the Latest News
          </h2>
          <p className="text-white text-xl">
          Don’t miss out on our latest news, updates, tips and special offers
          </p>
        </header>
        <div>
          <input className="bg-white p-5 py-2.5 outline-none rounded-l" placeholder="Enter your email"/>
          <button className="p-5 py-2.5  font-bold rounded-r text-secondary bg-primary">Subscribe</button>
        </div>
      </section>
      <footer className="flex h-[492px] flex-col items-center justify-center p-12 space-y-12"
        style={{
          background:"rgba(96,56,9,.9)",
          backgroundImage: ` url(${coffeeFooter})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition:"top",
          backgroundBlendMode: "multiply",
        }}>
          <div className="flex flex-col items-center space-y-5 text-white">
            <p className="text-3xl font-bold">Caffee</p>
            <ul className="flex space-x-5 items-center capitalize">
              <li><a href="#home">Home</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
            <p className="text-center max-w-xl">
              Caffee is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
            </p>
            <p>&copy; {new Date().getFullYear} Caffee. All rights reserved.</p>
          </div>
      </footer>
      </section>
    </main>
  );
};

export default Landing;
