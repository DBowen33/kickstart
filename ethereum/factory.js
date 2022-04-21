import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

// creates instance of campaign factory contract
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x4f7142e0a269c9f9f6540906Bff8c1689eb43a5C'
);

export default instance;

