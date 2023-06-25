import React, { Component } from 'react'
import loadingimg from './Loadingimg.jpg'
export class Newsitem extends Component {
    render() {
        // let pps = this.props;
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt={loadingimg} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target = "__blank" className="btn btn-primary btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem