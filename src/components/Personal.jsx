import { Form } from "react-bootstrap";
import { Form, Button} from "semantic-ui-react"

class personal extends Component {

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;
        return(
            <Form color="red">
                <h1 className="ui centered">Enter User details </h1>
                <Form.Field>
                    <label>state</label>
                    <input placeholder="state of residence" onChange={this.props.handleChange('state')} defaultValue={values.state} />
                </Form.Field>
                <Form.Field>
                    <label>Address</label>
                    <input placeholder="address" onChange={this.props.handleChange('address')} defaultValue={values.address} />
                </Form.Field>
                <Form.Field>
                    <label>pincode</label>
                    <input placeholder="pincode" onChange={this.props.handleChange('pincode')} defaultValue={values.pincode} />
                </Form.Field>
                <Buton onClick={this.back}>Back</Buton>
                <Button onClick={this.saveAndContinue} >save and continue</Button>
            </Form>
        )
    }
}

export default Personal;