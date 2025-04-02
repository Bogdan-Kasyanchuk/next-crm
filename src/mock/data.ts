import { CompanyMapper, CountriesMapper, PromotionMapper, PromotionsMapper, SalesMapper, StatisticsMapper } from '@/types';

import { COMPANIES, PROMOTIONS } from './db';
import { randomNumberMax, randomNumberMinMax } from './randomNumber';

//Dashboard
export const statisticsData: StatisticsMapper = [
    {
        label: 'Total promotions',
        value: randomNumberMax(),
    },
    {
        label: 'Total categories',
        value: randomNumberMax(20),
    },
    {
        label: 'New companies',
        value: randomNumberMinMax(50, 199),
    },
    {
        label: 'Total active companies',
        value: randomNumberMinMax(100, 999),
    },
];

export const salesData: SalesMapper = COMPANIES.slice(0, 8).map(
    (company) => ({
        id: company.id,
        title: company.title,
        logo: company.logo,
        sold: randomNumberMax(),
        income: randomNumberMax(9999),
    })
);

export const categoriesData: StatisticsMapper = COMPANIES.reduce(
    (acc, company) => {
        if (acc.includes(company.category)) {
            return acc;
        }
        return [...acc, company.category];

    }, [] as string[]
).map((category) => ({
    label: category,
    value: randomNumberMax(50),
}));

export const countriesData: CountriesMapper = COMPANIES.reduce(
    (acc, company) => {
        if (acc.includes(company.country.code)) {
            return acc;
        }
        return [...acc, company.country.code];

    }, [] as string[]
).map((code) => ({
    title: COMPANIES.find((company) => company.country.code === code)!.country.title,
    code: code,
    countCompanies: randomNumberMax(20),
}));

export const promotionsData: PromotionsMapper = PROMOTIONS.map(
    (promotion) => {
        const company = COMPANIES.find((company) => company.id === promotion.companyId)!;

        return {
            title: promotion.title,
            discount: promotion.discount,
            company: {
                id: company.id,
                title: company.title,
                logo: company.logo,
            }
        };
    }
);

//Companies
export const companiesData: CompanyMapper[] = COMPANIES;

//Promotions
export const companyPromotionsData: PromotionMapper[] = PROMOTIONS;