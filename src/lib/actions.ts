'use server';

import { revalidateTag } from 'next/cache';

import { deleteCompanyById } from './data';

export async function deleteCompany(id: string) {
    await deleteCompanyById(id);
    revalidateTag('companies');
}