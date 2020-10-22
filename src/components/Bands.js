import React from 'react';
import Band from './Band'


const Bands = props => {
    const bands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deletedBand}/>)
    // renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)



    return(
        <div>
          {bands}
        </div>
      );
    };
  
  
  export default Bands;
  