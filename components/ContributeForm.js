import React, { Component } from 'react'
import { Form, Input, Message, Button } from 'semantic-ui-react'
import Campaign from '../ethereum/campaign'

class ContributeForm extends Component {
    state = {
        value: '',
        loading: false
    };

    onSubmit = (event) => {
        event.preventDefault();
        const campaign = Campaign(this.props.address);

    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <label>Amount to Contribute</label>
                <Form.Field>
                    <Input
                        label='ether'
                        labelPosition='right'
                        value={this.state.value}
                        onChange={event => this.setState({ value: event.target.value })}/>
                </Form.Field>
                <Button primary>Contribute!</Button>
            </Form>
        );
    }
}

export default ContributeForm