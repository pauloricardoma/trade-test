import { ReactNode } from 'react';

import ReactPortal from '../ReactPortal';
import Button from '../Button';
import { Overlay, Container, Footer } from './styles';

interface IModal {
  danger?: boolean;
  visible: boolean;
  isLoading?: boolean;
  title: string;
  children: ReactNode;
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel: () => void;
  onConfirm?: () => void;
  maxWidth?: string;
}

function Modal({
  danger,
  visible,
  isLoading,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
  maxWidth,
}: IModal) {
  if (!visible) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay>
        <Container
          danger={danger ? true : undefined}
          maxWidth={maxWidth}
        >
          <h1>{title}</h1>

          <div className="modal-body">
            {children}
          </div>

          <Footer>
            <button
              type="button"
              className="cancel-button"
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelLabel}
            </button>
            {onConfirm && (
              <Button
                type="button"
                onClick={onConfirm}
              >
                {confirmLabel}
              </Button>
            )}
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

export default Modal;
