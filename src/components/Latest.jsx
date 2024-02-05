import React, { useState, useEffect, useCallback } from "react";
import "./Latest.css";
import img1 from "../assets/latest/fortnite.jpg";
import img2 from "../assets/latest/Bgmi.jpg";
import img3 from "../assets/latest/Cyberpunk.jpg";
import img4 from "../assets/latest/Valo.jpg";
import img5 from "../assets/latest/vaaloo.png";

const Latest = () => {
  const [active, setActive] = useState(0);

  const items = [img1, img2, img3, img4, img5];

  const lengthItems = items.length - 1;

  const reloadSlider = useCallback(() => {
    const slider = document.querySelector(".slider .list");
    const item = document.querySelectorAll(".slider .list .item")[active];
    slider.style.left = -item.offsetLeft + "px";

    const lastActiveDot = document.querySelector(".slider .dots li.active");
    lastActiveDot.classList.remove("active");

    const dots = document.querySelectorAll(".slider .dots li");
    dots[active].classList.add("active");
  }, [active]);

  const next = useCallback(() => {
    setActive((prevActive) =>
      prevActive + 1 <= lengthItems ? prevActive + 1 : 0
    );
    reloadSlider();
  }, [lengthItems, reloadSlider]);

  const prev = useCallback(() => {
    setActive((prevActive) =>
      prevActive - 1 >= 0 ? prevActive - 1 : lengthItems
    );
    reloadSlider();
  }, [lengthItems, reloadSlider]);

  useEffect(() => {
    const intervalId = setInterval(() => next(), 3000);

    return () => clearInterval(intervalId);
  }, [active, next]);

  const handleDotClick = useCallback(
    (key) => {
      setActive(key);
      reloadSlider();
    },
    [reloadSlider]
  );

  return (
    <div className="slider">
      <div className="list">
        {items.map((src, index) => (
          <div key={index} className="item">
            <img
              src={src}
              alt=""
              className="curved-image"
            />
          </div>
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
            className={index === active ? "active" : ""}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Latest;
