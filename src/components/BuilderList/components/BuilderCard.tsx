import BuilderImage from "../../../assets/builder.svg";
import StarIcon from "../../../assets/starFilled.svg";
import StarFilledIcon from "../../../assets/star.svg";
import "./BuilderCard.sass";
import { useState } from "react";
import ChevronDown from "../../../assets/chevronDown.svg";
import { Builder } from "../../../../types";
import BestChoice from "../../../assets/bestChoice.svg";
import BestValue from "../../../assets/bestValue.svg";

interface BuilderCardProps {
  builder: Builder;
  i: number;
  children?: React.ReactNode;
}

export default function BuilderCard({
  builder,
  i,
  children,
}: BuilderCardProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div key={builder.name} className="card">
      <div className="tag">
        {builder.bestChoice ? (
          <div>
            <img src={BestChoice} alt="" />
            Best Choice
          </div>
        ) : builder.bestValue ? (
          <div>
            <img src={BestValue} alt="" />
            Best Value
          </div>
        ) : null}
        <span>{i}</span>
      </div>
      <div className="builder-image">
        <img src={BuilderImage} alt="" />
        <span>{builder.type === "builder" ? "Builder" : "CDK"}</span>
      </div>
      <div className="card-details">
        <div className="title">
          <span>{builder.name}- </span>
          {builder.description}
        </div>
        {builder.discount && (
          <div className="discount">{builder.discount} off</div>
        )}
        <div className="highlights">
          <span>Main highlights</span>
          {builder.highlights.type === "descriptive" ? (
            <>
              <div
                className="descriptive"
                style={{
                  maxHeight: showMore ? "fit-content" : "72px",
                  overflowY: showMore ? "unset" : "hidden",
                }}
              >
                {builder.highlights.list.map((highlight) => (
                  <div className="highlight">
                    <span>{highlight.label}: </span>
                    <span>{highlight.description}</span>
                  </div>
                ))}
              </div>
              <div
                className="show"
                onClick={() => setShowMore((prevState) => !prevState)}
              >
                Show More
                {showMore ? (
                  <img
                    style={{ transform: "rotate(180deg)" }}
                    src={ChevronDown}
                    alt=""
                  />
                ) : (
                  <img src={ChevronDown} alt="" />
                )}
              </div>
            </>
          ) : (
            <div className="bullets">
              {builder.highlights.list.map((highlight) => (
                <div className="highlight-bullet">
                  <span className="prefix">{highlight.prefix}</span>
                  <span>{highlight.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {children}
      </div>
      <div className="action">
        <div className="rating">
          <div className="value">{builder.rating}</div>
          <div>{builder.ratingInWord}</div>
          <div>
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarFilledIcon} alt="" />
          </div>
        </div>
        <div className="view-button">View</div>
      </div>
    </div>
  );
}
