import BackgroundImage from 'components/BackgroundImage';
import H2 from 'components/H2';
import React from 'react';
import ReactStars from 'react-stars';
import Rating from 'components/Rating';

export interface PlaceInfoModel {
  id: string;
  name: string;
  rating: number;
  isOpen: boolean;
  imageUrl: string;
  url: string;
  price: string;
  phone: string;
  reviewCount: number;
  location: {
    displayAddress: string;
    zipCode: string;
    city: string;
    state: string;
    country: string;
  };
}

interface PlaceInfoProps {
  data: PlaceInfoModel;
}

const PlaceInfo: React.FC<PlaceInfoProps> = ({ data }) => {
  return (
    <>
      <article className="row py-2">
        <div className="col-9">
          <H2 className="title">{data.name}</H2>
          <Rating
            rating={data.rating}
            reviewCount={data.reviewCount}
          />
          <address className="address text-secondary mb-0">
            {data.location.displayAddress}
          </address>
          <div>
            {data.isOpen && (<small className="text-success">Aberto agora</small>)}
            {!data.isOpen && (<small className="text-success">Fechado agora</small>)}
          </div>
        </div>
        <div className="col-3">
          <BackgroundImage
            src={data.imageUrl}
            className="w-100"
            height="100px"
            alt="Place picture"
          />
        </div>
      </article>
    </>
  );
};

export default PlaceInfo;
