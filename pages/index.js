import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes'
import Labels from '../labels.json'

class CampaignIndex extends Component {

    // static: function is not assigned to instance of class; function is assigned to class itself
    // campaigns is rendered on server side, not client (can test by disabling JS execution browser)
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                <Link route={`/campaigns/${address}`}>
                    <a>{Labels.viewCampaign}</a>
                </Link>
                ),
                fluid: true
            };
        });

        return <Card.Group items={ items } />
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>{Labels.openCampaigns}</h3>

                    <Link route="/campaigns/new">
                        <a>
                            <Button floated="right" content={Labels.createCampaign} icon="add circle" primary></Button>
                        </a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        )
    }
}

export default CampaignIndex;