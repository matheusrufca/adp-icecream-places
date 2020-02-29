import React from 'react';

export interface PlaceInfoModel {
  id: string;
  name: string;
  rating: number;
  isOpen: boolean;
  imageUrl: string;
  url: string;
  price: string;
  phone: string;
  location: {
    displayAddress: string;
    zipCode: string;
    city: string;
    state: string;
    country: string;
  },
}

interface PlaceInfoProps {
  data: PlaceInfoModel;
}

const PlaceInfo: React.FC<PlaceInfoProps> = ({data}) => {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <address>
          <div>{data.name}</div>

        </address>
      </div>
    </>
  );
};

export default PlaceInfo;
