import { Form } from "react-bootstrap";
import { Form, Button} from "semantic-ui-react"

class User extends Component {

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values } = this.props;
        return(
            <Form>
                <h1 className="ui centered">Enter User details </h1>
                <Form.Field>
                    <label>Full Name</label>
                    <input placeholder="name" onChange={this.props.handleChange('name')} defaultValue={values.name} />
                </Form.Field>
                <Form.Field>
                    <label>Age</label>
                    <input placeholder="age" onChange={this.props.handleChange('age')} defaultValue={values.age} />
                </Form.Field>
                <Form.Field>
                    <label>date of birth</label>
                    <input placeholder="date of birth" onChange={this.props.handleChange('dob')} defaultValue={values.dob} />
                </Form.Field>
                <Button onClick={this.saveAndContinue} >save and continue</Button>
            </Form>
        )
    }
}

export default User;