
import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

export class News extends Component {
    // myurl is the default image to be shown when the image from the fetched date is null
    myurl = "https://i2.res.24o.it/images2010/2023/02/AEwMbUgC/images/8c27eaaa-98b1-11ed-af6b-e40be815b7b6-fotohome0.jpg"
    constructor() {

        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults:0
        }
    }
    async componentDidMount() {
        this.setState({loading:true})
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=48bb8c421c9546cb994a6f74a32d8a80&page=${this.state.page}&pageSize=10`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults:parsedData.totalResults,
            loading: false
        }
        )
    }
    render() {
        return (
            <div className="container my-3">
                <h2>News Monkey- Daily News Free</h2>
                {this.state.loading && <Spinner/>}
                <div className="row my-2" >
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4 my-3" key={element.url}>
                                <Newsitem title={element.title} description={element.description + '...'} imageUrl={element.urlToImage ? element.urlToImage : this.myurl} newsUrl={element.url} />
                            </div>

                        )
                    })
                    }
                </div>
                <div className="buttons d-flex justify-content-between">
                <button className="btn btn-dark btn-sm space-between" onClick={this.handlePrevClick} disabled={this.state.page <= 1}>Previous page</button>
                <button className="btn btn-dark btn-sm space-between" onClick={this.handleNextClick} disabled = {this.state.page>=Math.ceil(this.state.totalResults/20)}>Next page</button>
                </div>
            </div>
        )
    }
    // class methods
    handleNextClick = async () => {


        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=48bb8c421c9546cb994a6f74a32d8a80&page=${(this.state.page)+1}&pageSize=10`
        this.setState({
            loading:true

        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading:false
        })

    }
    handlePrevClick = async () => {
        this.setState({loading:true})
        let url = `https://newsapi.org/v2/top-headlines?q=corona&apiKey=48bb8c421c9546cb994a6f74a32d8a80&pageSize=10`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false
        })

    }

}

export default News