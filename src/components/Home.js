import React, { Component } from 'react';
import MonNav from './MonNav';
import CalculBMI from './CalculBMI';
import AdVerticaleGauche from './AdVerticaleGauche';

class Home extends Component {
    render() {
        return (
            <div>
              <MonNav/>
              <div className="row">
                  <div className="col-md-4">
                      <AdVerticaleGauche/>
                  </div>
                  <div className="col-md-4">
                  <CalculBMI />
                  </div>
                  <div className="col-md-4">
                     
                  </div>
              </div>
                
            </div>
        );
    }
}

export default Home;