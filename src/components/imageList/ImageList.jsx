import React from 'react'
import ImageItem from './ImageItem';

const ImageList = ({images}) => {
    // console.log(images);
  return (
    <>
    <div className="grid grid-cols-4 h-full pb-[40px]">
    {
        images.map((item,index)=>{
            return <ImageItem key={index} item={item}/>
        })
    }
    </div>
    </>
  )
}

export default ImageList
