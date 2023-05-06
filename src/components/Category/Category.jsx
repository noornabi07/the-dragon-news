import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../News/NewsCard/NewsCard';
import useTitle from '../../Hooks/useTitle';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    useTitle('Category')
    return (
        <div>
            {id && <h2>This is category news: {categoryNews.length}</h2>}
            {
                categoryNews.map(news => <NewsCard 
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;