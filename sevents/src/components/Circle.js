import React, {Component} from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const PrettoSlider = withStyles({
    root: {
      color: '#9de0d1',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

class Circle extends React.Component{ 
    constructor(props){
        super(props); 
        this.state = {
            color: "red",
            radius: 50,
            value: 50
        }
       
    }
    
    changeColor = () => {
        var color = '#' +  Math.random().toString(16).substr(-6);
        this.setState({color:color});
    }
    changeSize = (size,value) => {
        this.setState({radius:value}); 
    }

    
    
    render(){
        return(
            <div>
            <Container maxWidth="sm">
                <br></br>
                <svg height="200" width="200">
                    <circle cx="100" cy="100" r={this.state.radius} fill={this.state.color} />
                </svg>
                <br></br><br></br>
                <p>Ajustar tamaño</p>
                <PrettoSlider  valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} onChange={this.changeSize}/>
                <br></br><br></br><br></br>
                <Button variant="outlined" color="default" onClick={this.changeColor}>
                    Cambiar color
                </Button>
            </Container>
            </div>
        );
    }
}

export default Circle;