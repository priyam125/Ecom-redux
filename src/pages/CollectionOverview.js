import React from "react";
import { useSelector } from "react-redux";
import CollectionItem from "../components/CollectionItem";

const CollectionOverview = ({ match, history }) => {
  console.log(match.params.collection);

  const collections = useSelector((state) => state.shop.collections);
  console.log(collections);


  return (
    <div className="flex flex-col py-8 px-12">
      <div className="text-3xl mb-6">{match.params.collection}</div>
      <div className="flex flex-wrap items-center">
        {collections
          .find((collection) => collection.title == match.params.collection)
          .items.map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionOverview;
