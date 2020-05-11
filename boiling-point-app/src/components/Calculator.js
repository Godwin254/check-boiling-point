import React, { Component } from 'react'

//scale name
const scaleName = {
     c: 'celcius',
     f: 'farenheits'
}

//boiling verdict
function BoilingVerdict(props){
     const verd1 = {
          margin: 'auto',
          width: '30%',
          textAlign: 'center',
          color: 'white',
          fontSize: '20px',
          padding: '15px',
          fontWeight: 'bold',
          backgroundColor: 'blueviolet'
     }
     const verd2 = {
          margin: 'auto',
          width: '30%',
          textAlign: 'center',
          color: 'white',
          backgroundColor: 'red',
          fontSize: '20px',
          padding: '15px',
          fontWeight: 'bold'
     }

     if (props.celsius >= 100){
          return <p style = {verd1}>The water would boil</p>; 
     }else{
          return <p style = {verd2}>The water will not boil</p>;
     } 
}
//coversion to farenheits
const toFarenheits = (celsius) =>{
     return (celsius + 9/5) + 32;
}
//coversion to celcius
const toCelcius = (farenheits) =>{
     return (farenheits - 32) * 5/9;
}
//conversion bridge
const tryCovert = (temperature,convert) => {
     const input = parseFloat(temperature);
     if(Number.isNaN(input)){
          return '';
     }
     const output = convert(input);
     const rounded = Math.round(output * 1000) / 1000;
     return rounded.toString();
}

//temperature inputs
export class TemperatureInput extends Component {
     constructor(props){
          super(props)
          this.handleChange = this.handleChange.bind(this);
     }

     //handler method
     handleChange (e){
          this.props.onTemperatureChange(e.target.value);
     }

     //render method
     render() {
          const temperature = this.props.temperature;
          const scale = this.props.scale;
          return (
               <div>
                    <fieldset>
                         <legend>Enter temperature in {scaleName[scale]}:</legend>
                         <input value = {temperature} onChange = {this.handleChange} />
                    </fieldset>
               </div>
          );
     }
}

//calculator's component
class Calculator extends Component {
     constructor(props){
          super(props)
          this.state = {
               temperature: '',
               scale: 'c'
          }
     }

     //property method to handle celcius change
     handleCelciusChange = (temperature) =>{
          this.setState({
               scale: 'c',
               temperature
          })
     }
     //property method to handle farenheits change
     handleFarenheitsChange = (temperature) =>{
          this.setState({
               scale: 'f',
               temperature
          })
     }

     render() {
          const scale = this.state.scale;
          const temperature = this.state.temperature;
          const celsius = scale === 'f' ? tryCovert(temperature,toCelcius) : temperature ;
          const farenheits = scale === 'c' ? tryCovert(temperature,toFarenheits) : temperature ;

          return (
               <div>
               <TemperatureInput scale = 'c' temperature = {celsius} onTemperatureChange = {this.handleCelciusChange} />
               <TemperatureInput scale = 'f' temperature = {farenheits} onTemperatureChange = {this.handleFarenheitsChange}/>
               <BoilingVerdict celsius = {parseFloat(celsius)} />   
               </div>
          )
     }
}

export default Calculator
