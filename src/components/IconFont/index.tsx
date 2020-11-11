import React, { ReactElement, FC } from 'react';
import './index.module.scss';

interface IconFontProps {
  name: string;
  className?: string;
}

const IconFont: FC<IconFontProps> = (props: IconFontProps): ReactElement => {
  const { name, className } = props;
  return (
    <svg
      className={`icon icon-${name} ${className || ''}`}
      aria-hidden="true"
    >
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  );
};

export default IconFont;
