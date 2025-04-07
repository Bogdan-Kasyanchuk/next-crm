import { statisticLabel } from '@/mock/data';
import { CompanyMapper, CompanyShema, CountriesMapper, PromotionMapper, PromotionShema, PromotionsMapper, SalesMapper, StatisticsMapper } from '@/types';

export async function fetchStatistics() {
    try {
        const companiesData = await fetch(`${process.env.API_HOST}/companies`);
        const promotionsData = await fetch(`${process.env.API_HOST}/promotions`);

        if (!promotionsData.ok && !companiesData.ok) {
            console.log(
                'Companies error: ', companiesData.status,
                'Promotions error: ', promotionsData.status,
            );
        } else {
            const companies: CompanyShema[] = await companiesData.json();
            const promotions: PromotionShema[] = await promotionsData.json();

            const statistics: StatisticsMapper = [
                {
                    label: statisticLabel.totalPromotions,
                    value: promotions.length,
                },
                {
                    label: statisticLabel.totalCategories,
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
                    label: statisticLabel.newCompanies,
                    value: companies.filter(
                        (company) => new Date(company.joinedAt).getFullYear() > 1999
                    ).length
                },
                {
                    label: statisticLabel.totalActiveCompanies,
                    value: companies.filter((company) => company.status === 'active').length,
                },
            ];

            return statistics;
        }
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch the statistics.');
    }
}

export async function fetchSales() {
    try {
        const companiesData = await fetch(`${process.env.API_HOST}/companies`);

        if (!companiesData.ok) {
            console.log('Companies error: ', companiesData.status);
        } else {
            const companies: CompanyShema[] = await companiesData.json();

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
        }
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch the sales.');
    }
}

export async function fetchCategories() {
    try {
        const companiesData = await fetch(`${process.env.API_HOST}/companies`);

        if (!companiesData.ok) {
            console.log('Companies error: ', companiesData.status);
        } else {
            const companies: CompanyShema[] = await companiesData.json();

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
        }
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch the categories.');
    }
}

export async function fetchCountries() {
    try {
        const companiesData = await fetch(`${process.env.API_HOST}/companies`);

        if (!companiesData.ok) {
            console.log('Companies error: ', companiesData.status);
        } else {
            const companies: CompanyShema[] = await companiesData.json();

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
        }
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch the countries.');
    }
}

export async function fetchPromotions() {
    try {
        const companiesData = await fetch(`${process.env.API_HOST}/companies`);
        const promotionsData = await fetch(`${process.env.API_HOST}/promotions`);

        if (!promotionsData.ok && !companiesData.ok) {
            console.log(
                'Companies error: ', companiesData.status,
                'Promotions error: ', promotionsData.status,
            );
        } else {
            const companies: CompanyShema[] = await companiesData.json();
            const promotions: PromotionShema[] = await promotionsData.json();

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
        }
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch the promotions.');
    }
}

export async function fetchCompanies() {
    try {
        const companiesData = await fetch(
            `${process.env.API_HOST}/companies`,
            {
                next: { tags: ['companies'] }
            }
        );

        if (!companiesData.ok) {
            console.log('Companies error: ', companiesData.status);
        } else {
            const companies: CompanyShema[] = await companiesData.json();

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
        }
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch the companies.');
    }
}

export async function fetchCompany(id: string) {
    try {
        const companyData = await fetch(`${process.env.API_HOST}/companies/${id}`);

        if (!companyData.ok) {
            console.log('Company error: ', companyData.status);
        }

        const company: CompanyShema = await companyData.json();

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
        const promotionsData = await fetch(
            `${process.env.API_HOST}/promotions?companyId=${id}`,
            {
                next: { tags: ['promotions'] }
            }
        );

        if (!promotionsData.ok) {
            return [];
        }

        const promotions: PromotionMapper[] = await promotionsData.json();

        return promotions;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch the promotions of company.');
    }
}

export async function createCompany(newCompany: Omit<CompanyShema, 'id'>) {
    try {
        const companyData = await fetch(
            `${process.env.API_HOST}/companies`,
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newCompany)
            }
        );

        if (!companyData.ok) {
            console.log('Company error: ', companyData.status);
        } else {
            const company: CompanyShema = await companyData.json();

            console.log(`The company ${company.title} has been successfully added.`);
        }
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to added the company.');
    }
}

export async function deleteCompany(id: string) {
    try {
        const companyData = await fetch(
            `${process.env.API_HOST}/companies/${id}`,
            {
                method: 'DELETE',
            }
        );

        if (!companyData.ok) {
            console.log('Company error: ', companyData.status);
        } else {
            const company: CompanyShema = await companyData.json();

            if (company.hasPromotions) {
                const promotionsData = await fetch(`${process.env.API_HOST}/promotions?companyId=${id}`);

                if (!promotionsData.ok) {
                    console.log('Promotions error: ', promotionsData.status);
                } else {
                    const promotions: PromotionShema[] = await promotionsData.json();

                    for (const promotion of promotions) {
                        await deleteOnePromotion(promotion.id);
                    }
                }
            }

            console.log(`The company ${company.title} has been successfully deleted.`);
        }
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to delete the company.');
    }
}

export async function createPromotion(newPromotion: Omit<PromotionShema, 'id'>) {
    try {
        const promotionData = await fetch(
            `${process.env.API_HOST}/promotions`,
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newPromotion)
            }
        );

        if (!promotionData.ok) {
            console.log('Promotion error: ', promotionData.status);
        } else {
            const companyData = await fetch(
                `${process.env.API_HOST}/companies/${newPromotion.companyId}`,
                {
                    method: 'PUT',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ hasPromotions: true })
                }
            );

            if (!companyData.ok) {
                console.log('Company error: ', companyData.status);
            }

            const promotion: PromotionShema = await promotionData.json();

            console.log(`The promotion ${promotion.title} has been successfully added.`);
        }
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to added the company.');
    }
}

export async function deletePromotion(companyId: string, id: string) {
    try {
        const promotionData = await fetch(
            `${process.env.API_HOST}/promotions/${id}`,
            {
                method: 'DELETE',
            }
        );

        if (!promotionData.ok) {
            console.log('Promotion error: ', promotionData.status);
        } else {
            const promotionsData = await fetch(`${process.env.API_HOST}/promotions?companyId=${companyId}`);

            if (!promotionsData.ok) {
                console.log('Promotions error: ', promotionData.status);
            } else {

                const companyData = await fetch(
                    `${process.env.API_HOST}/companies/${companyId}`,
                    {
                        method: 'PUT',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify({ hasPromotions: false })
                    }
                );

                if (!companyData.ok) {
                    console.log('Company error: ', companyData.status);
                }
            }

            const promotion: PromotionShema = await promotionData.json();

            console.log(`The promotion ${promotion.title} has been successfully deleted.`);
        }
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to delete the promotion.');
    }
}

async function deleteOnePromotion(id: string) {
    try {
        const promotionData = await fetch(
            `${process.env.API_HOST}/promotions/${id}`,
            {
                method: 'DELETE',
            }
        );

        if (!promotionData.ok) {
            console.log('Promotion error: ', promotionData.status);
        } else {
            const promotion: PromotionShema = await promotionData.json();

            console.log(`The promotion ${promotion.title} has been successfully deleted.`);
        }
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to delete the promotion.');
    }
}