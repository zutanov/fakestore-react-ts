import React, { ReactNode, memo } from 'react';
import { SModal, SModalClose, SModalTitle, SModalWindow } from './modal';
import CloseIcon from '../../assets/icons/cross.svg';

interface ModalProps {
    onClose: (e: any) => void;
    visible: boolean;
    title: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = memo(({ visible, onClose, title, children }) => {
    return visible ? (
        <SModal id='modal' onClick={onClose}>
            <SModalWindow>
                <SModalClose src={CloseIcon}></SModalClose>
                <SModalTitle>{title}</SModalTitle>
                {children}
            </SModalWindow>
        </SModal>
    ) : null;
});

export default Modal;
