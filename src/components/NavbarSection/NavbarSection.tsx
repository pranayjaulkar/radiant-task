import Navbar from "./Navbar/Navbar";
import "./NavbarSection.sass";
import CheckCircled from "../../assets/checkCircled.svg";
import Info from "../../assets/info.svg";
import ChevronRight from "../../assets/chevronRight.svg";
import { useState } from "react";
import ChevronDown from "../../assets/chevronDown.svg";

export default function NavbarSection() {
  const filters = [
    "Top Relevent",
    "Featured",
    "Rating- Low to High",
    "Rating- High to Low",
  ];
  const [currenFilter, setCurrentFilter] = useState(filters[0]);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="nav-section">
        <h1 className="header">Best Website builders in the US</h1>
        <div className="status-bar">
          <div>
            <div>
              <img src={CheckCircled} alt="" />
              <span>Last Updated - February 22, 2020</span>
            </div>
            <div>
              <img src={Info} alt="" />
              Advertising Disclosure
            </div>
          </div>
          <div className="filter-parent">
            <div
              className="filter"
              onClick={() => setOpen((previousState) => !previousState)}
            >
              <span>{currenFilter}</span>
              {open ? (
                <img
                  style={{ transform: " rotate(180deg)" }}
                  src={ChevronDown}
                />
              ) : (
                <img src={ChevronDown} />
              )}
            </div>
            <div
              className="options"
              style={{ display: `${open ? "flex" : "none"}` }}
            >
              {filters.map((filter) => (
                <div
                  onClick={() => {
                    setOpen(false);
                    setCurrentFilter(filter);
                  }}
                >
                  {filter}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="tags">
          <div>Tools</div>
          <div>AWS Builder</div>
          <div>Start Build</div>
          <div>Build Supplier</div>
          <div>Tooling</div>
          <div>BlueHosting</div>
        </div>
        <div className="route">
          <div>Home</div>
          <img src={ChevronRight} alt="" />
          <div> Hosting for all</div>
          <img src={ChevronRight} alt="" />
          <div> Hosting</div>
          <img src={ChevronRight} alt="" />
          <div> Hosting</div>
          <img src={ChevronRight} alt="" />
          <div> Hosting</div>
        </div>
      </div>
    </div>
  );
}
