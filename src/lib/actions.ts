'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { CompanyStatusType } from '@/enums';
import { randomNumberMinMax } from '@/mock/randomNumber';
import { CompanyShema } from '@/types';

import { countries, Country } from './../mock/data';
import { createCompanyById, deleteCompanyById, deletePromotionById } from './data';

export async function createCompany(formData: FormData) {
    const newCompany: CompanyShema = {
        id: crypto.randomUUID(),
        title: formData.get('title') as string,
        logo: formData.get('logo') as string,
        category: formData.get('category') as string,
        status: formData.get('status') as CompanyStatusType,
        country: {
            title: countries[formData.get('countryCode') as Country],
            code: formData.get('countryCode') as string,
        },
        joinedAt: new Date(formData.get('joinedAt') as string).toISOString(),
        hasPromotions: false,
        sold: randomNumberMinMax(100, 999).toString(),
        income: randomNumberMinMax(100, 9999).toString(),
        description: formData.get('description') as string
    };

    await createCompanyById(newCompany);
    revalidateTag('companies');
    redirect('/companies');
}

export async function deleteCompany({ id }: { id: string }) {
    await deleteCompanyById(id);
    revalidateTag('companies');
}

export async function deletePromotion({ companyId, id }: { companyId: string, id: string }) {
    await deletePromotionById(companyId, id);
    revalidateTag('promotions');
}