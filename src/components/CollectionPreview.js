import React from 'react'
import CollectionItem from './CollectionItem'

const CollectionPreview = ({title, items}) => {
    return (
        <div className='flex flex-col mb-8'>
            <h1 className='text-3xl mb-6'>{title}</h1>
            <div className='flex justify-between'>
                {items.filter((item, idx) => idx < 4).map((item) => {
                    console.log(item);
                    return (
                    <CollectionItem key={item.id} item={item} >{item.name}</CollectionItem>
                )})}
            </div>
        </div>
    )
}

export default CollectionPreview
