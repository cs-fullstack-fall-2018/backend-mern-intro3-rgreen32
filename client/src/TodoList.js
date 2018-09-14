import React, {Component} from 'react';



class TodoList extends Component {

    render() {
        var forEachItem = this.props.arr.map(
            EachItem => {
                var state;
                if(EachItem.isDone == true){
                    state = false
                }else{
                    state = true
                }
                return (

                    <div>
                        <p>{EachItem.username}</p>
                        <p>{EachItem.todo}</p>
                        <p>{state.toString()}</p>
                    </div>
                )
            }
        );
        //console.log(this.props.arr);
        return (
            <div>
                <h2>{forEachItem}</h2>
            </div>
        );
    }

}

export default TodoList;