import { RelatedBuilder } from "../../../../types";
import BuilderImage from "../../../assets/builder.svg";
import "./RelatedBuilderCard.sass";

interface RelatedBuilderCardProps {
  builder: RelatedBuilder;
}

export default function RelatedBuilderCard({
  builder,
}: RelatedBuilderCardProps) {
  return (
    <div className="related-builder-card">
      <div className="image">
        <img src={BuilderImage} alt="" />
      </div>
      <div className="details">
        <div className="tags">
          {builder.tags.map((tag) => (
            <span className="tag">{tag}</span>
          ))}
        </div>
        <div className="name">{builder.name}</div>
        <div className="description">{builder.description}</div>
        <div>
          <span className="price">{builder.price}</span>
          <span className="original-price">{builder.originalPrice}</span>
          <span className="discount">({builder.discount} Off)</span>
        </div>
        <a className="view-button" href="#">View Deal</a>
      </div>
    </div>
  );
}
