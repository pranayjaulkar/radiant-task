export type Builder = {
  name: string;
  type: string;
  description: string;
  discount: string;
  highlights: {
    type: "descriptive" | "bullets";
    list: {
      label: string;
      description?: string;
      prefix?: string;
    }[];
  };
  rating: number;
  ratingInWord: string;
  bestChoice: boolean;
  bestValue: boolean;
};
export type RelatedBuilder = {
  name: string;
  description: string;
  discount: string;
  price: string;
  originalPrice: string;
  tags: string[];
};
