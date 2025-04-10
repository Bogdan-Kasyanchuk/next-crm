import { CodeCategory, CodeCountry } from '@/types';

export const user = {
    fullName: 'Adam Smith',
    avatar: '/images/avatar.png',
    email: 'adamsmith@gmail.com',
};

export const statisticLabel = {
    totalPromotions: 'Total promotions',
    totalCategories: 'Total categories',
    newCompanies: 'New companies',
    totalActiveCompanies: 'Total active companies',
};

export const categories: Record<CodeCategory, string> = {
    manufacturing: 'Manufacturing',
    trade: 'Trade',
    services: 'Services',
    education: 'Education',
    finance: 'Finance',
    construction: 'Construction',
    science: 'Science',
    information: 'Information',
};

export const countries: Record<CodeCountry, string> = {
    can: 'Canada',
    usa: 'USA',
    ita: 'Italy',
    ukr: 'Ukraine',
    deu: 'Germany',
    pol: 'Poland',
    fra: 'France',
    esp: 'Spain',
    gbr: 'Great Britain',
    che: 'Switzerland',
};

