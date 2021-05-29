import React, { Component } from 'react';

class CalculBMI extends Component {
    constructor(props){
        super(props)
        this.Ref_resultat = React.createRef();
        this.onSubmitBMI=this.onSubmitBMI.bind(this)
        this.onChangeHandler=this.onChangeHandler.bind(this)
        this.state={
            poids:0,
            taille:0,
            BMI:0
        }
    }
    CalculerBMI(){
        if( this.state.poids===0 || this.state.taille===0){
                alert("veuillez remplir tout les champs !")
        }else{
           var bmi;
            bmi=this.state.poids/Math.pow(this.state.taille/100,2)
            this.setState({BMI:bmi})
            console.log(bmi) 
            this.Ref_resultat.current.innerHTML=bmi.toString().substr(1,5)
        }
        
    }
    onSubmitBMI(e){
        e.preventDefault();
            this.CalculerBMI()
    }
    onChangeHandler(e){
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <div className="pt-5">
                <div className="row">
                    
                    <div className="col-md-12">
                        <div className="jumbotron">
                            <div className="form-group">
                                <label>Votre poids</label>
                                <input className="form-control" type="text" name="poids" placeholder="en kg" onChange={this.onChangeHandler}></input>
                            </div>
                            <div className="form-group">
                                <label>Votre taille</label>
                                <input className="form-control" type="text" name="taille" placeholder="en cm" onChange={this.onChangeHandler}></input>
                            </div>
                            <div className="form-group">
                            <input className="btn btn-info" type="button" value="Calculer" onClick={this.onSubmitBMI}></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>

                <div className="row">
                    
                    <div className="col-md-12">
                        <div className="jumbotron">
                            <div className="form-group">
                                 <label>Résultat</label>
                                 <h3 ref={this.Ref_resultat}>.</h3>
                            </div>
                           
                        </div>
                    </div>
               
                </div>
            </div>
        );
    }
}

export default CalculBMI;