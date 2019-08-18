import React from 'react';
import { Component } from 'react';
import $ from 'jquery'
import '../../index.css';
import CastComponent from './castlist'
import {Row, Col, Container} from 'reactstrap';
import * as myConst from '../urlfile';
class MovieDetail extends Component {
   
    constructor(props) {

        super(props)
        
        console.log(props.match.params.id)
      this.state = {
             moviedata: null,
              castlist: null
             }

    }
    componentDidMount(){

        this.fetchAllCast(this.props.match.params.id)
        this.fetchDetail(this.props.match.params.id)

    }

    
    fetchDetail(id) {

        const url =myConst.moviedetail+ id + myConst.languageapi
        $.ajax({
            url: url,
            success: (moviesresutl) => {
                const re = moviesresutl

                re.poster_src = myConst.imgpth+ re.poster_path

                var ge = re.genres
                var i;
                var s = [];
                for (i = 0; i < ge.length; i++) {
                    // console.log(ge[i].name)
                    s.push(<div className='movie-type' key={i}>{ge[i].name.toString()}</div>);
                }
                // console.log(s)
                var runtime, run
                // for the case >> some movie's runtime is null
                if (re.runtime != null) {

                    runtime = parseInt(re.runtime / 60)

                    runtime += " hr " 
                    if(re.runtime %60 >0)
                   {
                        runtime +=re.runtime % 6 + " min"

                   }
                    run = <span>Runtime :<span className='rating'>{runtime}</span></span>
                }
                else {
                    run = ""
                }
                const info = <div className='movie-list-files container' >
                    <div className="row">
                        <div className='image-file col-sm-6 col-lg-4'>
                            <img src={re.poster_src} alt="movie-poster" />
                        </div>
                        <div className='movie-detail col-sm-8'>
                            <span className='detailtitle' >
                                <h4>{re.title}</h4>
                            </span>

                            <div className="info">
                                <div className="genres" > {s} </div>
                                <span>Director  : {this.state.director}</span><br /><br />
                                <p>{re.overview}</p>
                            </div>
                            <div className='movie-rating'>

                                {run}<br /><br />
                                <span>Release Date :<span className='rating'>{re.release_date}</span></span><br /><br />
                                <span>Viewer Rating :<span className='rating'>{re.vote_average}/10</span></span>
                            </div>
                        </div>
                    </div>

                </div>

                this.setState({ moviedata: info })
                // console.log(re.original_title)
            },
            error: (xhr, status, err) => {
                console.log("Failed to fetch")
            }
        })
    }

    fetchAllCast(id) {

        const url = myConst.moviedetail + id + "/credits"+ myConst.languageapi
        var castList = []
        $.ajax({
            url: url,
            success: (allcast) => {
                var castval = allcast.cast
                
                //only take 6 top billed cast 
                for (var i = 0; i < 6; i++) {

                    var poster;
                    try {
                        if (castval[i].profile_path == null) {
                            //some cast don't have profile picture
                        } else {
                            poster = myConst.imgpth+ castval[i].profile_path
                            castval[i].path = poster
                            const castc = <Col md="2" xs="6" ><CastComponent objpass={castval[i]} /></Col>
                            castList.push(castc)
                        }
                      }
                      catch(err) {
                        
                      }
                    
                }
                var crew = allcast.crew
                var directorname;
                crew.forEach((member) => {
                    if (member.job == "Director") {
                        directorname = member.name
                    }
                })
                this.setState({ director: directorname })
               
                this.setState({ castlist: castList })

            },
            error: (xhr, status, err) => {
                console.log("Failed to fetch")
            }
        })
    }


    render() {
        var tem = this.state.castlist
      
        return (<React.Fragment>
            <div>{this.state.moviedata}</div>
            <hr />
            <Container >
                <h5>Too Cast Members :</h5><br></br>
                <Row id="castprofile">
                   
                    {tem}

                </Row>
            </Container>
            </React.Fragment>
        );
    }
}
export default MovieDetail;

