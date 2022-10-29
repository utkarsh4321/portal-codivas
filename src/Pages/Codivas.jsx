
import rightArrow from "./../Assets/Images/arrow-right.png";
import leftArrow from "./../Assets/Images/arrow-left.png";
import { useRef } from "react";


const Codivas = () => {

  //variables 

  const ref = useRef(null);

  const SampleCodiva = [{
    title: "Project 1",
    detail: "Project bases on this tech",
    city: "Cidade , UF"
  }, {
    title: "Project 2",
    detail: "Project bases on this tech",
    city: "Cidade , UF"
  }, {
    title: "Project 3",
    detail: "Project bases on this tech",
    city: "Cidade , UF"
  }, {
    title: "Project 4",
    detail: "Project bases on this tech",
    city: "Cidade , UF"
  }, {
    title: "Project 5",
    detail: "Project bases on this tech",
    city: "Cidade , UF"
  }, {
    title: "Project 6",
    detail: "Project bases on this tech",
    city: "Cidade , UF"
  }];

  const scrollLength = 100;

  // function to scroll via the left and right buttons

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };


  return (
    <div className="Project-content">
      <div className="project-header">
        <h1> {"< Projects >"}</h1>
      </div>
      <div className="project-info">
        <div className="button-container">
          <img src={leftArrow} alt="previous" onClick={() => scroll(-scrollLength)} />
        </div>
        <div className="project-card-container" ref={ref}>
          {SampleCodiva.map((item) => {
            return (
              <div id={item.title} className="project-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <p>{item.city}</p>
                <button>Apply</button>
              </div>
            )
          })}
        </div>
        <div className="button-container">
          <img src={rightArrow} alt="previous" onClick={() => scroll(scrollLength)} />
        </div>
      </div>
    </div>
  )
}

export default Codivas
