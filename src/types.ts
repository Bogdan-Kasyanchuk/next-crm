import { CompanyStatusType } from './enums';

export type Align = 'left' | 'center' | 'right';

export type CompanyShema = {
    id: string;
    title: string;
    logo: string;
    category: string;
    status: CompanyStatusType;
    country: {
        title: string;
        code: string;
    };
    joinedAt: string;
    hasPromotions: boolean;
    sold: string,
    income: string,
    description?: string;
};

export type CompanyMapper = {
    id: string;
    title: string;
    logo: string;
    category: string;
    status: CompanyStatusType;
    country: {
        title: string;
        code: string;
    };
    joinedAt: string;
    hasPromotions?: boolean;
    description?: string;
};

export type PromotionMapper = {
    id: string;
    companyId: string;
    title: string;
    image: string;
    discount: number;
    description?: string;
}

export type StatisticsMapper = Array<{
    label: string;
    value: number;
}>;

export type SalesMapper = Array<{
    id: string;
    title: string;
    logo: string;
    sold: number;
    income: number;
}>;

export type PromotionsMapper = Array<{
    title: string;
    discount: number;
    company: {
        id: string;
        title: string;
        logo: string;
    }
}>;

export type CountriesMapper = Array<{
    title: string;
    code: string;
    countCompanies: number;
}>;
