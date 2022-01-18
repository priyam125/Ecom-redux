import React from 'react'

const CollectionOverview = ({match, history}) => {
    console.log(match.params.collection);
    return (
        <div>
            Collection
        </div>
    )
}

export default CollectionOverview
