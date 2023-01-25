import {
    SearchOutlined
} from '@ant-design/icons';
import { Button, Modal, Select, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import ListNews from '../../components/ListNews';
import Loader from '../../components/Loader';
import { fetchArticles } from '../../services/apiArticle';
import { categories, countries } from '../../utils/global';
import './Home.css';



const Home = () => {
    const [data, setData] = useState([]);

    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState<boolean>(true)
    const [modalOpen, setModalOpen] = useState(false);
    const [state, setState] = useState({
        country: 'id',
        category: 'health'
    })



    const handlerModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        fetchArticles(state.country, state.category)
            .then(res => {
                if (res.status === "error") {
                    setErrorMessage(res.message)
                    setTimeout(() => { setErrorMessage("") }, 5000)
                } else if (res.articles.length === 0) {
                    setErrorMessage("No articles found, Try to find another country and category")
                    setModalOpen(false)
                    setTimeout(() => { setErrorMessage("") }, 10000)
                } else {
                    setData(res.articles);
                    setTimeout(() => { setLoading(false); setModalOpen(false) }, 1300)
                    localStorage.setItem('news', JSON.stringify(res.articles))
                }
            })
            .catch(error => {
                console.error(error);
            })
    }
    useEffect(() => {
        fetchArticles(state.country, state.category)
            .then(res => {
                if (res.status === "error") {
                    setErrorMessage(res.message)
                    setTimeout(() => { setErrorMessage("") }, 5000)
                } else {
                    setData(res.articles);
                    setTimeout(() => { setLoading(false) }, 1300)
                    localStorage.setItem('news', JSON.stringify(res.articles))
                }
            })
            .catch(error => {
                console.error(error);
            })
    }, [])
    return (
        <div className='home-container'>
            <Button type="default" className='button-search' onClick={() => setModalOpen(true)}>
                <SearchOutlined />
            </Button>
            {errorMessage && <div className=''>{errorMessage}</div>}
            {loading ? <Loader /> :
                <ListNews articles={data} />
            }
            <Modal
                title="Search Articles"
                centered
                open={modalOpen}
                onOk={(e) => handlerModal(e)}
                onCancel={() => setModalOpen(false)}
            >
                <Space wrap>
                    <Select
                        placeholder='Select Country'
                        style={{ width: 240 }}
                        options={countries}
                        onChange={(e) => setState({ ...state, country: e })}
                    />
                    <Select
                        placeholder="Select Category"
                        style={{ width: 240 }}
                        options={categories}
                        onChange={(e) => setState({ ...state, category: e })}
                    />

                </Space>
            </Modal>
        </div>
    )
}

export default Home