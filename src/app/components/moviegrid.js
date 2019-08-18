import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../index';
import {
    CardText, CardHeader, CardBody,
} from 'reactstrap';

class Moviegrid extends Component {

    constructor(props) {

        super(props);

    }

    render() {
        let overview = this.props.movie.overview.substr(0, 140)

        let movieitem = (<div  className="shadow p-1 mb-5 bg-white rounded movielistitem">
            <img top className="movieposter" src={this.props.movie.poster_src} alt="Cardimagecap" />
            <Link to={`/movie/${this.props.movie.id}`} id="moviealltext">
                <CardHeader id="movietitle">{this.props.movie.title}</CardHeader>
                <CardBody id="movieoverview">
                    <CardText >{overview} . . . .  more</CardText>
                </CardBody>
            </Link>
        </div>);

        return movieitem

    }
}
export default Moviegrid;

