import BuilderCard from "./components/BuilderCard";
import { getBuilders } from "./components/getBuilders";
import { Builder } from "../../../types";
import Check from "../../assets/check.svg";
import "./BuilderList.sass";

export default function BuilderList() {
  const builders: Builder[] = getBuilders();

  return (
    <div className="list">
      {builders.map((builder, i) =>
        builder.type === "cdk" ? (
          <BuilderCard i={i + 1} builder={builder}>
            <div className="features">
              Why we love it
              <div className="feature">
                <img src={Check} alt="" />
                Documentation
              </div>
              <div className="feature">
                <img src={Check} alt="" />
                Easy Use
              </div>
              <div className="feature">
                <img src={Check} alt="" />
                Out of Box
              </div>
            </div>
          </BuilderCard>
        ) : (
          <BuilderCard i={i + 1} builder={builder} />
        )
      )}
    </div>
  );
}
