import { cn } from '@utils';

const Backdrop = ({ children, active, className, onClick }) => {
  return (
    <div
      className={cn([
        `fixed left-0 top-0 z-[100] h-full w-full bg-black/30 backdrop-blur-[1px] transition duration-300`,
        className,
      ])}
      style={{
        opacity: active ? '1' : '0',
        visibility: active ? 'visible' : 'hidden',
      }}
      data-element="close-cart-element"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Backdrop;
