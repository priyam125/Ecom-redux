import React,{useState} from 'react'
import SHOP_DATA from './ShopData'
import CollectionPreview from '../../components/CollectionPreview'

const ShopPage = () => {

    const [collections, setCollections] = useState(SHOP_DATA)

    return (
        <div className='py-8 px-12'>
            {collections.map(({id, title, items, routeName}) => (
                <CollectionPreview key={id} title={title} items={items} routeName={routeName} />
            ))}
        </div>
    )
}

export default ShopPage
