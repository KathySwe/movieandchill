import React from 'react';
import { Component } from 'react';
import '../../index';
import { Link } from 'react-router-dom';
import {  Card, CardImg, CardBody,
  CardTitle} from 'reactstrap';

class CastComponent extends Component {

  constructor(props) {
    super(props);
    
  }


  render() {
   
    
    return (<React.Fragment>
              <Link to={`/castinfo/${this.props.objpass.id}`}  >
              
                <Card className="castlistcard" >

                  <CardImg top src={this.props.objpass.path} alt="Cast Profile Image" />

                  <CardBody >
                    
                    <CardTitle id="castlistlink">{this.props.objpass.name}</CardTitle>

                  </CardBody>
                </Card>
              </Link>
            </React.Fragment>)


  }


}
export default CastComponent;

