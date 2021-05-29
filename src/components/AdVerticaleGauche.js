import React, { Component } from 'react';

class AdVerticaleGauche extends Component {

    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }

    render() {
        const style_annonce={display:"block"}
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                    <ins className="adsbygoogle"
                        style={style_annonce}
                        data-ad-client="ca-pub-3894117874855824"
                        data-ad-slot="5848903180"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdVerticaleGauche;