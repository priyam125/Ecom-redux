import React from 'react'
import CollectionItem from './CollectionItem'

const CollectionPreview = ({title, items}) => {
    return (
        <div className='flex flex-col mb-8'>
            <h1 className='text-3xl mb-6'>{title}</h1>
            <div className='flex justify-between'>
                {items.filter((item, idx) => idx < 4).map(({id,name, ...otherItems}) => (
                    <CollectionItem key={id} name={name} {...otherItems}>{name}</CollectionItem>
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview
