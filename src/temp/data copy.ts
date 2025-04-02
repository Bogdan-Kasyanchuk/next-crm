import {
    categoriesData,
    statisticsData,
    salesData,
    promotionsData,
    countriesData,
    companiesData,
    companyPromotionsData,
} from '@/temp/data';

export async function fetchStatistics() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 750));

        return statisticsData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchSales() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1750));

        return salesData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchCategories() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        return categoriesData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchCountries() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        return countriesData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchPromotions() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1250));

        return promotionsData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchCompanies() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return companiesData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchCompany(id: string) {
    const companyData = companiesData.find((company) => company.id === id);

    try {
        await new Promise((resolve) => setTimeout(resolve, 250));

        return companyData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchCompanyPromotions(id: string) {
    const promotionsData = companyPromotionsData.filter(
        (promotion) => promotion.companyId === id);

    try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        return promotionsData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}