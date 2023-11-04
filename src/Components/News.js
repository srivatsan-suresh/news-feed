import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    
    constructor() {
        super();
        this.state={
            articles:[]}
    }

    async componentDidMount() {
        let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=b2c2840d8ec24c9192df7cec0ad8f5b6";
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles});
    }
    render() {
        return (
            <div>
                <div className='container my-3'>
                    <h2>Headlines</h2>
                    <div className='row'>
                        {this.state.articles.map((element)=>{
                            return <div className='col-md-4' key={element.url}>
                            <NewsItems title={element.title?element.title.slice(0,50):element.title} description={element.description?element.description.slice(0,50):"Click to know"} imgURL={element.urlToImage?element.urlToImage:"https://miro.medium.com/v2/resize:fit:1400/0*elAd2K7VkeYUD8cZ"} newsURL={element.url} />
                        </div>
                        })}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default News