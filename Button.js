"use strict";

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const myStyle = {
        //     color: this.props.orangeColor,
        //     width: this.props.wide
        // }
        return (
            <button>
                {this.props.name}
            </button>
        );
    }
}

// function App(){
//     return (
//         <Button name="+"/>
//     );
// }
//
// let domContainer = document.querySelector('#root');
// let root = ReactDOM.createRoot(domContainer);
// root.render(<App />);

// export default Button;
