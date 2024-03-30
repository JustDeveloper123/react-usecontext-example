import shopLogoUrl from '@assets/React-icon.svg';
import { appName } from '@constants';

const HeaderLogo = () => {
  return (
    <div className="mr-3 w-2/5">
      <a
        href={`/${appName}/`}
        className="inline-flex items-center gap-2 text-3xl transition duration-100 hover:brightness-90"
      >
        Shop
        <div className="h-8 w-8">
          <img
            src={shopLogoUrl}
            alt=""
            className="block h-full object-contain"
          />
        </div>
      </a>
    </div>
  );
};

export default HeaderLogo;
