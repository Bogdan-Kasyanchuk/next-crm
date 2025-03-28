'use client';

import CompanyForm from './company-form';

import Modal, { ModalProps } from '@/ui/modal';

export default function CompanyFormModal({ onClose, ...rest }: ModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => { onClose() }} />
    </Modal>
  );
}
