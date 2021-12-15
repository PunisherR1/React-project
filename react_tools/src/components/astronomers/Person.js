import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../../context";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Person = () => {
  const { people, index, setIndex } = useGlobalContext();

  /*  changes state when we come to the end or beginning of array*/
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people, setIndex]);

  /* changes index every 5 sec and clears var after executing */
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index, setIndex]);

  return (
    <section className="section-person">
      <div className="title-person">
        <h2>
          <span>/</span>Astronomers
        </h2>
      </div>
      <div className="section-center-person">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          /*changes css class based on current index
          all slides are put to the right by default  */
          let position = "nextSlide-person";
          if (personIndex === index) {
            position = "activeSlide-person";
          }
          /* puts previous slide to the left */
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide-person";
          }

          return (
            <article className={`person ${position}`} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title-person">{title}</p>
              <p className="text-person">{quote}</p>
              <FaQuoteRight className="icon-person" />
            </article>
          );
        })}
        <button className="prev-person" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next-person" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};
export default Person;
