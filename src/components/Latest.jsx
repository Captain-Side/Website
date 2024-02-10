import React, { useState, useEffect, useCallback } from "react";
import "./Latest.css";
import img1 from "../assets/latest/Anthem.jpg";
import img2 from "../assets/latest/Bgmi.jpg";
import img3 from "../assets/latest/Cyberpunk.jpg";
import img4 from "../assets/latest/Valo.jpg";
import img5 from "../assets/latest/vaaloo.png";

const Latest = () => {
  const [active, setActive] = useState(0);

  const items = [
    { src: img1, link: "https://example.com/1" },
    { src: img2, link: "https://example.com/2" },
    { src: img3, link: "https://example.com/3" },
    { src: img4, link: "https://example.com/4" },
    { src: img5, link: "https://example.com/5" }
  ];

  const lengthItems = items.length - 1;

  const reloadSlider = useCallback(() => {
    const slider = document.querySelector(".slider .list");
    const item = document.querySelectorAll(".slider .list .item")[active];
    if (slider && item) {
      slider.style.left = -item.offsetLeft + "px";

      const lastActiveDot = document.querySelector(".slider .dots li.active");
      if (lastActiveDot) {
        lastActiveDot.classList.remove("active");
      }

      const dots = document.querySelectorAll(".slider .dots li");
      dots[active].classList.add("active");
    }
  }, [active]);

  const next = useCallback(() => {
    setActive(prevActive =>
      prevActive + 1 <= lengthItems ? prevActive + 1 : 0
    );
    reloadSlider();
  }, [lengthItems, reloadSlider]);

  const prev = useCallback(() => {
    setActive(prevActive =>
      prevActive - 1 >= 0 ? prevActive - 1 : lengthItems
    );
    reloadSlider();
  }, [lengthItems, reloadSlider]);

  useEffect(() => {
    const intervalId = setInterval(() => next(), 3000);

    return () => clearInterval(intervalId);
  }, [active, next]);

  const handleDotClick = useCallback(
    key => {
      setActive(key);
      reloadSlider();
    },
    [reloadSlider]
  );

  return (
    <div className="slider">
      <div className="list">
        {items.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
            <div className="item">
              <img src={item.src} alt="" className="curved-image" />
            </div>
          </a>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={prev}>
          {"<"}
        </button>
        <button id="next" onClick={next}>
          {">"}
        </button>
      </div>
      <ul className="dots">
        {items.map((_, index) => (
          <li
            key={index}
            className={index + 1 === active ? "active" : ""}
            onClick={() => handleDotClick(index + 1)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Latest;
