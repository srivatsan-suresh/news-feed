import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b2c2840d8ec24c9192df7cec0ad8f5b6&pageSize=12`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }

    prevPg = async () => {
        //console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b2c2840d8ec24c9192df7cec0ad8f5b6&page=${this.state.page - 1}&pageSize=12`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false
        });
    }

    nxtPg = async () => {
        //console.log("Next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b2c2840d8ec24c9192df7cec0ad8f5b6&page=${this.state.page + 1}&pageSize=12`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            });
        }
    }
    render() {
        return (
            <div>
                <div className='container my-3'>
                    <h2>Headlines</h2>
                    {this.state.loading && <Loading />}
                    <div className='row'>
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <NewsItems title={element.title ? element.title.slice(0, 50) : element.title} description={element.description ? element.description.slice(0, 50) : "Click to know"} imgURL={element.urlToImage ? element.urlToImage : "https://miro.medium.com/v2/resize:fit:1400/0*elAd2K7VkeYUD8cZ"} newsURL={element.url} />
                            </div>
                        })}

                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="button" disabled={this.state.page <= 1} onClick={this.prevPg} className="btn btn-dark">&larr;Previous</button>
                        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/12)} onClick={this.nxtPg} className="btn btn-dark">&rarr;Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News