import {
    categoriesData,
    statisticsData,
    salesData,
    promotionsData,
    countriesData,
    companiesData,
} from './placeholder-data';

export async function fetchCategoriesData() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        return categoriesData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchStatisticsData() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return statisticsData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchSalesData() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 5000));

        return salesData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchCountriesData() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        return countriesData;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchPromotionsData() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 2500));

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
