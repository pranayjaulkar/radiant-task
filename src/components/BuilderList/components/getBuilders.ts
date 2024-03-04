import { Builder } from "../../../../types";

export const getBuilders = () => {
  const builders: Builder[] = [
    {
      name: "WixPro 72-Inch Responsive Website Builder",
      type: "builder",
      description:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      discount: "",
      highlights: {
        type: "descriptive",
        list: [
          {
            label: "[What you get]",
            description:
              "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
          },
          {
            label: "[What you get]",
            description:
              "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
          },
        ],
      },
      rating: 9.8,
      ratingInWord: "Exceptional",
      bestChoice: true,
      bestValue: false,
    },
    {
      name: "SiteCraft 68-Inch Ultimate Web Design Studio",
      type: "builder",
      description:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      discount: "",
      highlights: {
        type: "descriptive",
        list: [
          {
            label: "[What you get]",
            description:
              "Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
          },
          {
            label: "[What you get]",
            description:
              "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
          },
        ],
      },
      rating: 9.5,
      ratingInWord: "Exceptional",
      bestChoice: false,
      bestValue: true,
    },
    {
      name: "WixPro 72-Inch Responsive Website Builder",
      type: "builder",
      description:
        " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      discount: "",
      highlights: {
        type: "descriptive",
        list: [
          {
            label: "[What you get]",
            description:
              "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
          },
          {
            label: "[What you get]",
            description:
              "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
          },
        ],
      },
      rating: 9.3,
      ratingInWord: "Excellent",
      bestChoice: false,
      bestValue: false,
    },
    {
      name: "CDK Resposive Builder",
      type: "cdk",
      description:
        " An extensive library of widgets and apps, and detailed step-by-step guides",
      discount: "26%",
      highlights: {
        type: "bullets",
        list: [
          { prefix: "9.9", label: "Building Responsive" },
          { prefix: "8.9", label: "Cool" },
          { prefix: "8.9", label: "Docs" },
        ],
      },
      rating: 9.1,
      ratingInWord: "Excellent",
      bestChoice: false,
      bestValue: false,
    },
  ];
  return builders;
};
