import React from "react";

class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: 'dummy name',
                location: 'kolkata'
            },
            count1: 0,
            count2: 0
        };
        console.log('constructor', props);
    }

    componentDidMount() {
        // console.log('componentDidMount will be called once after component is rendered');
        // best place to call api
        // this.timer = setInterval(() => {
        //     console.log('react op');
        // }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count1 !== prevState.count1) {
            
        }
        if (this.state.count2 !== prevState.count2) {
            
        }
        // console.log('componentDidUpdate will be called everytime after component is rendered & updated');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount will be called to destroy the component');
        clearInterval(this.timer);
    }

    render() {
        console.log('render');
        return (
            <div>
                <h2>Profile</h2>
                <h3>Name: {this.state.userInfo.name}</h3>
                <h3>Name: {this.state.userInfo.location}</h3>
                <h3>Count: {this.state.count1}</h3>
                <button onClick={(element) => {
                    console.log(this.state.count1 + 1);
                    this.setState({ count1: this.state.count1 + 1 });
                }}>update count1</button>
            </div>
        );
    }
}

export default ProfileClass;