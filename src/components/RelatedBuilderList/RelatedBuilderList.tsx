import { RelatedBuilder } from "../../../types";
import RelatedBuilderCard from "./components/RelatedBuilderCard";
import { getRelatedBuilders } from "./components/getRelatedBuilders";
import "./RelatedBulderList.sass";

export default function RelatedBuilderList() {
  const relatedBuilders: RelatedBuilder[] = getRelatedBuilders();
  return (
    <div className="related-builders-container">
      <h3 className="heading">Related Deals you might like for</h3>
      <div className="related-builders">
        {relatedBuilders.map((builder) => (
          <RelatedBuilderCard builder={builder} />
        ))}
      </div>
      <div className="sign-up">
        <span>Sign up and get exclusive special deals</span>
        <form action="#" className="sign-up-input">
          <input type="text" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
