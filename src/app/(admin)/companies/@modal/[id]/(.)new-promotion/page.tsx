'use client';

import { useRouter } from 'next/navigation';

import PromotionFormModal from '@/ui/promotion-form-modal';

export default function Page() {
  const router = useRouter();

  return <PromotionFormModal show={true} onClose={() => { router.back() }} />;
}
