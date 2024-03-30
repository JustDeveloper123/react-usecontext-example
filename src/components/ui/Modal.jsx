import { cn } from '@utils';
import { createPortal } from 'react-dom';
import { Backdrop } from './';

const Modal = ({ children, active, onBackdropClick, className }) => {
  document.body.style.overflow = active ? 'hidden' : 'initial';

  const content = (
    <Backdrop
      className="flex items-center justify-center"
      active={active}
      onClick={onBackdropClick}
    >
      <div
        className={cn([
          'scroll relative z-[150] m-4 overflow-auto rounded-md bg-white px-4 py-6 shadow-xl',
          className,
        ])}
      >
        {children}
      </div>
    </Backdrop>
  );

  return createPortal(content, document.getElementById('backdrops'));
};

export default Modal;
