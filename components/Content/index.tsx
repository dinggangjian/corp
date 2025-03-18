import React from 'react';
import Image from 'next/image';

const Index = (props: any) => {
  console.log(props);
  return (
    <div className="h-full">
      <div className="absolute inset-0 h-full -z-10">
        <Image
          src={props.image}
          fill
          className="h-full"
          style={{ objectFit: 'cover' }}
          alt={props.text}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900"></div>
      </div>
      <div className="flex justify-center text-white text-6xl pt-60">
        <h1>{props.text}</h1>
      </div>
    </div>
  );
};
export default Index;
