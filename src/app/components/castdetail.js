import React from 'react';
import { Component } from 'react';
import $ from 'jquery'
import '../../index.css';
import * as myConst from '../urlfile';
class CastDetail extends Component {

    constructor(props) {
        super(props)
        this.state = { detail: null }
        
    }

    componentDidMount(){
        this.viewcastDetail(this.props.match.params.id)
    }

    viewcastDetail(id) {

        const url = myConst.castdetail+ id + myConst.languageapi

        $.ajax({
            url: url,
            success: (detail) => {
                // console.log(detail)
                var profilesrc = myConst.imgpth+ detail.profile_path
                const info = <div className='movie-list-files container' >
                    <div className="row">
                        <div className='image-file col-sm-6 col-lg-4'>
                            <img src={profilesrc} alt="movie-poster" />
                        </div>
                        <div className='movie-detail col-sm-8'>
                            <span className='detailtitle' >
                                <h4>{detail.name} </h4>
                            </span>
                            <h6>Birthday : {detail.birthday}</h6>
                            <h6>Place of Birth : {detail.place_of_birth}</h6>
                            
                            <div className="info">
                                
                                <p>{detail.biography}</p>
                            </div>
                            
                        </div>
                    </div>

                </div>

                this.setState({ detail: info })

            },
            error: (xhr, status, err) => {
                console.log("Failed to fetch")
            }
        })
    }

    render() {

        return (<React.Fragment>{this.state.detail}</React.Fragment>

        );
    }

}

export default CastDetail;

