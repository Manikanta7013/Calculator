import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <>
            <button className='sky' name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                <button className='sky' name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button className='sky' name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button className='sky' name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                


                <button  className='all' name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button  className='all' name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button  className='all' name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button  style={{backgroundColor:'grey'}} className='all' name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>


                <button  className='all' name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button className='all' name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button className='all' name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button style={{backgroundColor:'grey'}} className='all' name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>

                <button className='all' name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button className='all' name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button className='all' name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button style={{backgroundColor:'grey'}} className='all'  name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>


                <button style={{backgroundColor:'grey'}} className='all' name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button className='all' name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
               
                <button style={{backgroundColor:'grey'}} className='all' name="/" onClick={e => this.props.onClick(e.target.name)}>??</button>
                <button style={{backgroundColor:'red'}}className='all' name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
            </>
        );
    }
}


export default KeyPadComponent;