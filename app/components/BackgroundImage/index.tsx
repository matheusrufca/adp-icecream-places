import * as React from 'react';
import Img from 'components/Img';

interface Props {
  src: string;
  alt?: string;
  className?: string;
  width?: string;
  height?: string;
}
function BackgroundImage({ className, src, alt, width, height }: Props) {

  const style = {
    width,
    height,
    backgroundImage: `url(${src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <div
      style={{ ...style }}
      className={`position-relative ${className}`}>
      <img
        src={src}
        alt={alt}
        style={{
          opacity: 0,
        }}
        className="position-absolute w-100 h-100"
      />
    </div>
  );
}

export default BackgroundImage;
