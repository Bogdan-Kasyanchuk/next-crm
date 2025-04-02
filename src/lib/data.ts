import { CompanyMapper, CompanyShema, CountriesMapper, PromotionMapper, PromotionsMapper, SalesMapper, StatisticsMapper } from '@/types';

export async function fetchStatistics() {
    try {
        const dataPromotions = await fetch(`${process.env.API_HOST}/promotions`);
        const promotions: PromotionMapper[] = await dataPromotions.json();

        const dataCompanies = await fetch(`${process.env.API_HOST}/companies`);
        const companies: CompanyShema[] = await dataCompanies.json();

        const statistics: StatisticsMapper = [
            {
                label: 'Total promotions',
                value: promotions.length,
            },
            {
                label: 'Total categories',
                value: companies.reduce(
                    (acc, company) => {
                        if (acc.includes(company.category)) {
                            return acc;
                        }
                        return [...acc, company.category];

                    }, [] as string[]
                ).length
            },
            {
                label: 'New companies',
                value: companies.filter((company) => new Date(company.joinedAt).getFullYear() > 1999).length
            },
            {
                label: 'Total active companies',
                value: companies.filter((company) => company.status === 'active').length,
            },
        ];

        return statistics;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch the statistics.');
    }
}

export async function fetchSales() {
    try {
        const data = await fetch(`${process.env.API_HOST}/companies`);
        const companies: CompanyShema[] = await data.json();

        const sales: SalesMapper = companies.slice(0, 10).map(
            (company) => ({
                id: company.id,
                title: company.title,
                logo: company.logo,
                sold: company.sold,
                income: company.income,
            })
        );

        return sales;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch the sales.');
    }
}

export async function fetchCategories() {
    try {
        const data = await fetch(`${process.env.API_HOST}/companies`);
        const companies: CompanyShema[] = await data.json();

        const categories: StatisticsMapper = companies.reduce(
            (acc, company) => {
                if (acc.includes(company.category)) {
                    return acc;
                }
                return [...acc, company.category];

            }, [] as string[]
        ).map((category) => ({
            label: category,
            value: companies.filter((company) => company.category === category).length,
        }));

        return categories;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch the categories.');
    }
}

export async function fetchCountries() {
    try {
        const data = await fetch(`${process.env.API_HOST}/companies`);
        const companies: CompanyShema[] = await data.json();

        const countries: CountriesMapper = companies.reduce(
            (acc, company) => {
                if (acc.includes(company.country.code)) {
                    return acc;
                }
                return [...acc, company.country.code];

            }, [] as string[]
        ).map((code) => ({
            title: companies.find((company) => company.country.code === code)!.country.title,
            code: code,
            countCompanies: companies.filter((company) => company.country.code === code).length,
        }));

        return countries;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch the countries.');
    }
}

export async function fetchPromotions() {
    try {
        const dataPromotions = await fetch(`${process.env.API_HOST}/promotions`);
        const promotions: PromotionMapper[] = await dataPromotions.json();

        const dataCompanies = await fetch(`${process.env.API_HOST}/companies`);
        const companies: CompanyShema[] = await dataCompanies.json();

        const transformedPromotions: PromotionsMapper = promotions.slice(0, 20).map(
            (promotion) => {
                const company = companies.find((company) => company.id === promotion.companyId)!;

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

        return transformedPromotions;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch the promotions.');
    }
}

export async function fetchCompanies() {
    try {
        const data = await fetch(`${process.env.API_HOST}/companies`);
        const companies: CompanyShema[] = await data.json();

        const transformedCompanies = companies.map<CompanyMapper>(
            (company) => ({
                id: company.id,
                title: company.title,
                logo: company.logo,
                category: company.category,
                status: company.status,
                country: {
                    title: company.country.title,
                    code: company.country.code
                },
                joinedAt: company.joinedAt,
                hasPromotions: company.hasPromotions,
            })
        );

        return transformedCompanies;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch the companies.');
    }
}

export async function fetchCompany(id: string) {
    try {
        const data = await fetch(`${process.env.API_HOST}/companies/${id}`);

        if (!data.ok) {
            return undefined;
        }

        const company: CompanyShema = await data.json();

        const transformedCompany: CompanyMapper = {
            id: company.id,
            title: company.title,
            logo: company.logo,
            category: company.category,
            status: company.status,
            country: {
                title: company.country.title,
                code: company.country.code
            },
            joinedAt: company.joinedAt,
            description: company.description
        };

        return transformedCompany;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch the company.');
    }
}

export async function fetchCompanyPromotions(id: string) {
    try {
        const data = await fetch(`${process.env.API_HOST}/companies/${id}/promotions`);

        if (!data.ok) {
            return [];
        }

        const promotions: PromotionMapper[] = await data.json();

        return promotions;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch the promotions.');
    }
}