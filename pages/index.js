import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {

    // static: function is not assigned to instance of class; function is assigned to class itself
    // campaigns is rendered on server side, not client (can test by disabling JS execution browser)
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    }

    render() {
        return <div>{this.props.campaigns[0]}</div>
    }
}

export default CampaignIndex;