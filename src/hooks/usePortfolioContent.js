import { siteContent } from "../data/siteContent";

const usePortfolioContent = () => {
  const year = new Date().getFullYear();

  return {
    ...siteContent,
    year,
  };
};

export default usePortfolioContent;
