import React from 'react';
import { Component } from 'react';
import $ from 'jquery'
import Moviegrid from './moviegrid'
import '../../index';
import { Container, Row, Col } from 'reactstrap';
import * as myConst from '../urlfile';
class MovieHome extends Component {

  constructor(props) {
    super(props);

    this.state = { rows: null }

  }

  componentDidMount() {

    this.movieFetch("");

  }

  searchMovie(event) {

    console.log(event.target.value)
    const value = event.target.value
    const boundObj = this
    boundObj.movieFetch(value)


  }

  movieFetch(title) {

      var urlStr = myConst.movielist

      if (title != "") {
        urlStr = myConst.moviesearch + title
      }

      var movieitems = []
      $.ajax({
        url: urlStr,
        success: (moviesresutl) => {
          const re = moviesresutl.results
         
          re.forEach((movie) => {
            
            movie.poster_src = myConst.imgpth + movie.poster_path

            const moviegrid = <Col md="6" xl="4"><Moviegrid movie={movie} /></Col>
            movieitems.push(moviegrid)

          })
          this.setState({ rows: movieitems })
        },
        error: (xhr, status, err) => {
          console.log("Failed to fetch")
        }

      })

  }

  render() {
            return (<React.Fragment>

              <input id="searchbox" 
               onChange={this.searchMovie.bind(this)} placeholder="Enter movie title" />

              <Container style={{ marginTop: 20 }}>

                <Row>
                  {this.state.rows}
                </Row>

              </Container>
              </React.Fragment>
            );
            
            
          }


}
export default MovieHome;

