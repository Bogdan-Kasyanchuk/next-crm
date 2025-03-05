import { CompanyStatus } from '@/enums';
import { Company, CountriesCompanies, Promotions, SalesDetails, StatisticCard } from '@/types';

export const statisticsData: StatisticCard[] = [
    {
        label: 'Total promotions',
        value: 432,
    },
    {
        label: 'Total categories',
        value: 8,
    },
    {
        label: 'New companies',
        value: 28,
    },
    {
        label: 'Total active companies',
        value: 670,
    },
];

export const salesData: SalesDetails = [
    {
        title: 'Costco Wholesale',
        sold: 42,
        income: 600,
    },
    {
        title: 'Costco Wholesale',
        sold: 432,
        income: 60,
    },
    {
        title: 'Costco Wholesale',
        sold: 42,
        income: 600,
    },
    {
        title: 'Costco Wholesale',
        sold: 111,
        income: 600,
    },
    {
        title: 'Costco Wholesale',
        sold: 432,
        income: 610,
    },
    {
        title: 'Costco Wholesale',
        sold: 222,
        income: 500,
    },
    {
        title: 'Costco Wholesale',
        sold: 432,
        income: 60,
    },
    {
        title: 'Costco Wholesale',
        sold: 432,
        income: 999,
    },
];

export const promotionsData: Promotions = [
    {
        company: 'Costco Wholesale',
        title: 'Norem ipsum dolor ',
        discount: 40,
    },
    {
        company: 'Costco Wholesale',
        title: 'Norem ipsum dolor ',
        discount: 4,
    },
    {
        company: 'Costco Wholesale',
        title: 'Norem ipsum dolor ',
        discount: 40,
    },
    {
        company: 'Costco Wholesale',
        title: 'Norem ipsum dolor ',
        discount: 4,
    },
    {
        company: 'Costco Wholesale',
        title: 'Norem ipsum dolor ',
        discount: 80,
    },
    {
        company: 'Costco Wholesale',
        title: 'Norem ipsum dolor ',
        discount: 33,
    },
    {
        company: 'Costco Wholesale',
        title: 'Norem ipsum dolor ',
        discount: 33,
    },
    {
        company: 'Costco Wholesale',
        title: 'Norem ipsum dolor ',
        discount: 77,
    },
    {
        company: 'Costco Wholesale',
        title: 'Norem ipsum dolor ',
        discount: 20,
    },
    {
        company: 'Costco Wholesale',
        title: 'Norem ipsum dolor ',
        discount: 80,
    },
    {
        company: 'Costco Wholesale',
        title: 'Norem ipsum dolor ',
        discount: 40,
    },
    {
        company: 'Costco Wholesale',
        title: 'Norem ipsum dolor ',
        discount: 4,
    },
    {
        company: 'Costco Wholesale',
        title: 'Norem ipsum dolor ',
        discount: 40,
    },
    {
        company: 'Costco Wholesale',
        title: 'Norem ipsum dolor ',
        discount: 4,
    },
    {
        company: 'Costco Wholesale',
        title: 'Norem ipsum dolor ',
        discount: 80,
    },
];

export const countriesData: CountriesCompanies = [
    {
        title: 'Canada',
        count: 4,
    },
    {
        title: 'USA',
        count: 10,
    },
    {
        title: 'Italia',
        count: 12,
    },
    {
        title: 'Ukraine',
        count: 8,
    },
    {
        title: 'Spain',
        count: 4,
    },
];

export const categoriesData: StatisticCard[] = [
    {
        label: 'Products',
        value: 4,
    },
    {
        label: 'Products',
        value: 8,
    },
    {
        label: 'Products',
        value: 28,
    },
    {
        label: 'Products',
        value: 99,
    },
    {
        label: 'Products',
        value: 41,
    },
    {
        label: 'Products',
        value: 10,
    },
    {
        label: 'Products',
        value: 2,
    },
    {
        label: 'Products',
        value: 33,
    },
];

export const companiesData: Company[] = [
    {
        category: 'Products',
        avatar: '/images/costo.png',
        title: 'Costco Wholesale',
        status: CompanyStatus.ACTIVE,
        hasPromotions: true,
        country: 'USA',
        joinedAt: '2023-07-14T15:00:00+03:00',
    },
    {
        category: 'Products',
        avatar: '/images/costo.png',
        title: 'Costco Wholesale',
        status: CompanyStatus.NOT_ACTIVE,
        hasPromotions: false,
        country: 'USA',
        joinedAt: '2023-07-14T15:00:00+03:00',
    },
    {
        category: 'Products',
        avatar: '/images/costo.png',
        title: 'Costco Wholesale',
        status: CompanyStatus.PENDING,
        hasPromotions: true,
        country: 'USA',
        joinedAt: '2023-07-14T15:00:00+03:00',
    },
    {
        category: 'Products',
        avatar: '/images/costo.png',
        title: 'Costco Wholesale',
        status: CompanyStatus.SUSPENDED,
        hasPromotions: false,
        country: 'USA',
        joinedAt: '2023-07-14T15:00:00+03:00',
    },
    {
        category: 'Products',
        avatar: '/images/costo.png',
        title: 'Costco Wholesale',
        status: CompanyStatus.ACTIVE,
        hasPromotions: true,
        country: 'USA',
        joinedAt: '2023-07-14T15:00:00+03:00',
    },
    {
        category: 'Products',
        avatar: '/images/costo.png',
        title: 'Costco Wholesale',
        status: CompanyStatus.NOT_ACTIVE,
        hasPromotions: false,
        country: 'USA',
        joinedAt: '2023-07-14T15:00:00+03:00',
    },
    {
        category: 'Products',
        avatar: '/images/costo.png',
        title: 'Costco Wholesale',
        status: CompanyStatus.PENDING,
        hasPromotions: true,
        country: 'USA',
        joinedAt: '2023-07-14T15:00:00+03:00',
    },
    {
        category: 'Products',
        avatar: '/images/costo.png',
        title: 'Costco Wholesale',
        status: CompanyStatus.SUSPENDED,
        hasPromotions: false,
        country: 'USA',
        joinedAt: '2023-07-14T15:00:00+03:00',
    },
];
