import { CompanyStatus } from './enums';

export type Align = 'left' | 'center' | 'right';

export type Company = {
    category: string;
    avatar: string;
    title: string;
    status: CompanyStatus;
    hasPromotions?: boolean;
    country: string;
    joinedAt: string;
    description?: string;
};

export type StatisticCard = {
    label: string;
    value: number;
};

export type SalesDetails = Array<{
    title: string;
    sold: number;
    income: number;
}>;

export type Promotions = Array<{
    company: string;
    title: string;
    discount: number;
}>;

export type CountriesCompanies = Array<{
    title: string;
    count: number;
}>;

export type Promotion = {
    title: string;
    description: string;
    discount: number;
    image: string;
}
