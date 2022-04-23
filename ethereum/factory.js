import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

// creates instance of campaign factory contract
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x8698c23b99fc87AE28eBe5883823565F8A190c41'
);

export default instance;

