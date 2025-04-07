export interface PageProp {
  page?: string;
  currentPage?: string;
  whiteBg?: boolean;
}

export interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export interface ExperienceData {
  id: number;
  title: string;
  url: string;
  logo: string;
  startDate: string;
  endDate?: string;
  category: string;
}
