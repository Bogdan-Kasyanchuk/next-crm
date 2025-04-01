import {
    categoriesData,
    statisticsData,
    salesData,
    promotionsData,
    countriesData,
} from '@/mock/data';
import { CompanyMapper, CompanyShema, PromotionMapper } from '@/types';

export async function fetchStatisticsData() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 750));

        return statisticsData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchSalesData() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1750));

        return salesData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchCategoriesData() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        return categoriesData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchCountriesData() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        return countriesData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchPromotionsData() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1250));

        return promotionsData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchCompaniesData() {
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

export async function fetchCompanyData(id: string) {
    try {
        const data = await fetch(`${process.env.API_HOST}/companies/${id}`);
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

export async function fetchCompanyPromotionsData(id: string) {
    try {
        const data = await fetch(`${process.env.API_HOST}/companies/${id}/promotions`);

        if (data.status === 404) {
            return [];
        }

        const promotions: PromotionMapper[] = await data.json();

        return promotions;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch the promotions.');
    }
}