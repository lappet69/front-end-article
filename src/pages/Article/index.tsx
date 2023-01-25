import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import { News } from '../../interfaces/news.interface';
import { fetchArtilce } from '../../services/apiArticle';
import { defaultImg } from '../../utils/global';
import './article.css';


const Article = () => {
    const { articleId } = useParams();
    const [data, setData] = useState<News>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetchArtilce(Number(articleId)).then(res => { setData(res); setTimeout(() => { setLoading(false) }, 1300) })
    }, [])

    return (
        <div className='detail-article-container'>
            {loading ? <Loader /> :
                <div className='detail-article'>
                    <div>
                        <h1>{data?.title}</h1>
                        <img alt="example" src={data?.urlToImage || defaultImg()} />
                        <div className='detail-article-content'>
                            <p>{data?.content || data?.description}</p>
                        </div>
                        <div className='detail-article-source'>
                            <p>Published: {data?.publishedAt.toLocaleString().substring(0, 10)}</p>
                            <p>Author: {data?.author}</p>
                            <p>Source: {data?.source.name}</p>
                            <a href={data?.url} target="_blank">Original content</a>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Article