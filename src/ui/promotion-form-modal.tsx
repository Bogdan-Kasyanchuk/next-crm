'use client';

import PromotionForm from './promotion-form';

import Modal, { ModalProps } from '@/ui/modal';

export default function PromotionFormModal({ onClose, ...rest }: ModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <PromotionForm onSubmit={() => { onClose() }} />
    </Modal>
  );
}
