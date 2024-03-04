import { useState } from "react";
import "./Footer.sass";
import ChevronDown from "../../assets/chevronDown.svg";
export default function Footer() {
  const categories = [
    "Web Builder",
    "Hosting",
    "Data Center",
    "Robotic-Automation",
  ];

  const contacts = [
    "Contact",
    "Privacy Policy",
    "Terms of Service",
    "Categories",
    "About",
  ];

  const countries = ["United States", "India"];

  const [country, setCountry] = useState("United States");
  const [open, setOpen] = useState(false);

  return (
    <div className="footer">
      <div>
        <div className="footer_column">
          <h3>CATEGORIES</h3>
          <div className="footer_column_list">
            {categories.map((category) => (
              <div>
                <a href="#">{category}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="footer_column">
          <h3>CONTACT</h3>
          <div className="footer_column_list">
            {contacts.map((contact) => (
              <div>
                <a href="#">{contact}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="select">
          <div
            className="country"
            onClick={() => setOpen((previousState) => !previousState)}
          >
            <span>{country}</span>
            {open ? (
              <img style={{ transform: " rotate(180deg)" }} src={ChevronDown} />
            ) : (
              <img src={ChevronDown} />
            )}
          </div>
          <div style={{ height: "200px"}}>
            <div
              className="countries-list"
              style={{ display: `${open ? "flex" : "none"}` }}
            >
              {countries.map((country) => (
                <div
                  onClick={() => {
                    setOpen(false);
                    setCountry(country);
                  }}
                >
                  {country}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
