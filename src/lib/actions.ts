'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { CompanyStatusType } from '@/enums';
import { randomNumberMinMax } from '@/mock/randomNumber';
import { CompanyShema, PromotionShema } from '@/types';

import { countries, CodeCountry, categories, CodeCategory } from './../mock/data';
import { createCompany, createPromotion, deleteCompany, deletePromotion } from './data';

export async function actionCreateCompany(formData: FormData) {
    const newCompany: Omit<CompanyShema, 'id'> = {
        title: formData.get('title') as string,
        logo: formData.get('logo') as string,
        category: categories[formData.get('codeCategory') as CodeCategory],
        status: formData.get('status') as CompanyStatusType,
        country: {
            title: countries[formData.get('codeCountry') as CodeCountry],
            code: formData.get('codeCountry') as string,
        },
        joinedAt: new Date(formData.get('joinedAt') as string).toISOString(),
        hasPromotions: false,
        sold: randomNumberMinMax(100, 999).toString(),
        income: randomNumberMinMax(100, 9999).toString(),
        description: formData.get('description') as string
    };

    await createCompany(newCompany);
    revalidateTag('companies');
    redirect('/companies');
}

export async function actionDeleteCompany({ id }: { id: string }) {
    await deleteCompany(id);
    revalidateTag('companies');
}

export async function actionCreatePromotion(companyId: string, formData: FormData) {
    const newPromotion: Omit<PromotionShema, 'id' | 'companyId'> = {
        title: formData.get('title') as string,
        image: formData.get('image') as string,
        discount: formData.get('discount') as string,
        description: formData.get('description') as string
    };

    await createPromotion(companyId, newPromotion);
    revalidateTag('promotions');
    redirect(`/companies/${companyId}`);
}

export async function actionDeletePromotion({ companyId, id }: { companyId: string, id: string }) {
    await deletePromotion(companyId, id);
    revalidateTag('promotions');
}