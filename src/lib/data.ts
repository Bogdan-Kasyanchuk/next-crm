import {
    categoriesData,
    statisticsData,
    salesData,
    promotionsData,
    countriesData,
    companiesData,
    companyPromotionsData,
} from '@/mock/data';

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
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return companiesData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchCompanyData(id: string) {
    const companyData = companiesData.find((company) => company.id === id);

    try {
        await new Promise((resolve) => setTimeout(resolve, 250));

        return companyData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchCompanyPromotionsData(id: string) {
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