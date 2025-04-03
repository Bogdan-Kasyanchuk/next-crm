'use server';

import { revalidateTag } from 'next/cache';

import { deleteCompanyById, deletePromotionById } from './data';

export async function deleteCompany(id: string) {
    await deleteCompanyById(id);
    revalidateTag('companies');
}

export async function deletePromotion(companyId: string, id: string) {
    await deletePromotionById(companyId, id);
    revalidateTag('promotions');
}