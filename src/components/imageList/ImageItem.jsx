import React from 'react'

const ImageItem = ({item}) => {
    console.log(item);
  return (
    <div className="w-[380px] h-[280px] mt-5">
      <img src={item.urls.small} alt="" className="w-full h-full rounded-[5px] object-cover"/>
    </div>
  )
}

export default ImageItem
