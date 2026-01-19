import React from 'react';
import { Zap } from 'lucide-react';

type Props = {
  alt?: string;
  imgClassName?: string;
  zapClassName?: string;
};

const Logo: React.FC<Props> = ({
  alt = 'Vijquant',
  imgClassName = 'absolute inset-0 w-full h-full object-cover',
  zapClassName = 'w-6 h-6 text-white',
}) => {
  return (
    <>
      <img
        src="/vijquant-images/company-logo/logo.png"
        alt={alt}
        className={imgClassName}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = 'none';
        }}
      />
      <Zap className={zapClassName} />
    </>
  );
};

export default Logo;
