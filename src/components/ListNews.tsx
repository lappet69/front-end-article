import { useState } from 'react';
import { News } from '../interfaces/news.interface';

import { List } from 'antd';
import { defaultImg } from '../utils/global';
import './ListNews.css';


interface TApiResponse {
    articles: News[]
}


const ListNews = ({ articles }: TApiResponse) => {
    const [currentPage, setCurrentPage] = useState<Number>(5)
    return (
        <div className='list-container'>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (prev, page) => {
                        setCurrentPage(page)
                    },
                    pageSize: Number(currentPage),
                }}
                dataSource={articles}
                renderItem={(item, idx) => (
                    <List.Item
                        key={item.title}
                        className="list-container"
                        extra={
                            <img
                                width={280}
                                alt="logo"
                                className='img-news'
                                src={item.urlToImage || defaultImg()}
                            />
                        }
                    >
                        <div className='article-item'>
                            <a href={`/article/${idx}`}>{item?.title}</a>
                            <p>{item?.description}</p>
                        </div>
                        <div className='article-source'>
                            <p>Published: {new Date(item?.publishedAt).toLocaleDateString()}</p>
                            <p>Author: {item?.author}</p>
                            <p>Source: {item.source.name}</p>
                        </div>

                    </List.Item>
                )}
            />

        </div>

    )

}


export default ListNews