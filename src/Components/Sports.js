import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  //document.title = `${cpaitalizeFirstLetter(props.category)} - NewsMonkey`


  const cpaitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=77a7b21c057b4419a16e04b53061397d&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    // props.setProgress(30);
    let parsedData = await data.json()
    // props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    // props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, [])

//   const handlePrevClick = async () => {
//     setPage(page - 1)
//     updateNews();
//   }

//   const handleNextClick = async () => {
//     setPage(page + 1)
//     updateNews();
//   }

  const fetchMoreData = async () => {
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=77a7b21c057b4419a16e04b53061397d&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)

  };

  return (
    <>
      <h1 className="text-center" style={{ marginTop: '90px' }}>NewsMonkey - Top {cpaitalizeFirstLetter(props.category)} Headlines</h1>
      {loading}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4>Loading...</h4>}
      >
        <div className="container">

          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>

    </>
  )

}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'sports',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News