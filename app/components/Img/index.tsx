import * as React from 'react';

interface Props {
  src: string | object;
  alt?: string;
  className?: string;
}
function Img({ className, src, alt }: Props) {
  return <img className={className} src={src as string} alt={alt} />;
}

export default Img;
