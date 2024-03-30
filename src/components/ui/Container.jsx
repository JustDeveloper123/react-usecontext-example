import { cn } from '@utils';

const Container = ({ children, className }) => {
  return (
    <div className={cn(['m-auto w-full max-w-7xl px-5', className])}>
      {children}
    </div>
  );
};

export default Container;
