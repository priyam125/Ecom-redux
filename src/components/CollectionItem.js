import React from 'react'

const CollectionItem = ({ name, imageUrl, price}) => {
    return (
        <div className='collection-item flex flex-col items-center mr-4 shadow-lg'>
            <div style={{
                backgroundImage: `url(${imageUrl})`
            }} className='bg-cover bg-center w-full h-full mb-1'/>
            <div className='flex w-full h-1/12 justify-between text-lg'>
                <span className='w-11/12 mb-4'>{name}</span>
                <span className='w-1/12'>{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem
