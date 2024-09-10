import { useState, useEffect } from "react";
import { timelineElements } from "../components/timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { RiCoupon2Fill } from "react-icons/ri";
import { GiPartyPopper } from "react-icons/gi";

export function TimelinePage() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupVisible(true);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timeout if component unmounts
  }, []);
  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <h1 className="title">Our first 6</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              date={element.date}
              dateClassName="date"
              className="timeline"
              contentStyle={{
                backgroundColor: "rgb(229, 179, 254)",
                color: "white",
                borderRadius: "25px",
              }}
              iconStyle={{ backgroundColor: "rgb(255, 203, 242)" }}
              contentArrowStyle={{
                borderRight: "20px solid rgb(229, 179, 254)",
              }}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <img
                className="images"
                key={element.id}
                src={element.image}
                alt="lol"
                style={{
                  borderRadius: 40,
                  padding: 20,
                }}
              />
              <Popup
                trigger={<button className="show-button">Show Message</button>}
                modal
                contentStyle={{
                  backgroundColor: "rgb(222, 170, 255)",
                  borderRadius: "20px",
                  padding: "30px",
                  border: "none",
                }}
              >
                {(close) => (
                  <div className="modal">
                    <div className="header">{element.title}</div>
                    <div className="content">{element.description}</div>
                    <div className="actions">
                      <button
                        className="button"
                        onClick={() => {
                          close();
                        }}
                      >
                        Hide message
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      {isPopupVisible && (
        <div className="coupon-div">
          <h1><GiPartyPopper/>  Congrats  <GiPartyPopper/></h1>
          <h4>You have won a "summon Josh anytime" coupon <RiCoupon2Fill/></h4>
          <button className="coupon-button" onClick={closePopup}>Claim</button>
        </div>
      )}
      
    </div>
  );
}
