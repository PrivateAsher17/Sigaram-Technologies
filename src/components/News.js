import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps = {
        pagesize : 6,
        country : 'in',
        category : 'general'

    }
    static propTypes = {
        pagesize : PropTypes.number,
        country : PropTypes.string,
        category : PropTypes.string

    }

    capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    constructor(props){
        super(props);
        // console.log("Hello I am a constructor from News Component");
        this.state={
            articles: [],
            page: 1,
            totalResults: 0,
            loading:false
        }
        document.title = this.capitalizeFirstLetter(this.props.category)
    }


    async componentDidMount(){
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pagesize}`
        this.props.setProgress(30)
        this.setState({loading:true})
        let data = await fetch(url);
        this.props.setProgress(50)
        let parsedData = await data.json();
        this.props.setProgress(70)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        console.log(parsedData);
        this.props.setProgress(100)
    }

    fetchMoreData = async() => {
        this.setState({page: this.state.page+1})

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pagesize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })
      };

    render() {
        return (
            <div className='container my-3 mt-5' style={{paddingTop:'20px'}}>
                <h1 className='text-center' >Sigaram News - Top {this.capitalizeFirstLetter(this.props.country)} Headlines </h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className='container'>
                <div className='row'>
                    {this.state.articles.map((element)=>{
                        return <div className='col-md-4' key={element.url}>
                        <NewsItem title={element.title?element.title:''} description={element.description?element.description:''} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />   
                    </div>
                    })}
                
                </div>
                </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default News
