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
import arrowRightIcon from "../assets/right-arrow.png";
import quoteIcon from "../assets/quote.png";

const Landing = () => {
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
  return (
    <main>
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
            <li>Home</li>
            <li>Contact Us</li>
            <li>About us</li>
          </ul>
          <div className="flex items-center space-x-5">
            <button>sign in</button>
            <button className="btn btn-primary font-medium">sign up</button>
          </div>
        </nav>
        <div className="flex p-12">
          <div className="text-white flex  flex-col space-y-5 text-xl max-w-[527px]">
            <p>We’ve got your morning covered with</p>
            <span className="font-clicker-script text-[200px]">Coffee</span>
            <p>
              It is best to start your day with a cup of coffee. Discover the
              best flavours coffee you will ever have. We provide the best for
              our customers.
            </p>
            <button className="btn btn-primary w-max">order now</button>
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
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>
          <button className="btn btn-primary">learn more</button>
        </div>
        <div className="max-w-[500px] flex-[0.5]">
          <img src={coffeeCup} alt="coffee cup" />
        </div>
        {/* <img className="absolute left-0 bottom-[-30%] translate-y-[-50%]" src={coffeeSplash} alt="coffee splash" /> */}
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset.....
            </p>
            <div className="flex flex-col space-y-2.5 items-center">
              <p className="text-secondary text-3xl font-bold">John Doe</p>
              <p className="text-grey">Project Manager</p>
            </div>
              <span className=" absolute top-26 left-22 text-9xl transform -translate-x-1/2 -translate-y-1/2">
                <img src={quoteIcon} alt="quote icon" />
              </span>
            <div className="h-24 w-24 absolute -bottom-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                className="h-full w-full rounded-lg object-center object-cover"
                src={profileOne}
                alt="john doe"
              />
            </div>
            <button className="bg-primary p-5 rounded-lg flex items-center justify-center top-1/2 -right-8 absolute">
              <img src={arrowRightIcon} alt="arrow right" />
            </button>
            <button className="bg-primary p-5 rounded-lg flex items-center justify-center top-1/2 -left-8 absolute">
              <img src={arrowLeftIcon} alt="arrow left" />
            </button>
          </div>
        </div>
      </section>
      <section>
        <header className="flex-col">
        <p>Subscribe to get the Latest News</p>
        <p>Don’t miss out on our latest news, updates, tips and special offers</p>
        </header>
        <div>
          <input/>
          <button>Subscribe</button>
        </div>
      </section>
    </main>
  );
};

export default Landing;
