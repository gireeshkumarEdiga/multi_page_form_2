const { Component } = require("react");
import User from "./User";
import Personal from "./Personal";
import Confirm from "./Confirm";
import Success from "./Success";

class Main extends Component {
    state = {
        step :1,
        name : "",
        age : "",
        dob : "",
        state: "",
        address : "",
        pincode : "",
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step:step+1
        })
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step-1
        })
    }

    handleChange = input => event => {
        this.setState({[input] : event.target.value})
    }

    render() {
        const { name, age, dob, state, address, pincode} = this.state;
        const values = {  name, age, dob, state, address, pincode };
        switch(step) {
            case 1: return <User nextStep={this.nextStep} handleChange={this.handleChange} values={values} />

            case 2: return  <Personal nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} value={values} />

            case 3: return <Confirm nextStep={this.nextStep} prevStep={this.prevStep} value={values} />

            case 4: return <Success />
        }
    }
}

export default MainForm;