import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        return (
            <>
               
              <input type="text" value={result} className="ans"/>
            </>
    )
        ;
    }
}


export default ResultComponent;
