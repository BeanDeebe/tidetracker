import axios, { AxiosResponse } from 'axios';
import { parseString } from "xml2js";
import processXmlData from "./processXmlData";

export default async function fetchStationData() {
    try {
        const response = await axios.get('https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations.xml');
        return response.data;

    } catch (error) {
        console.error('Couldn\'t get station data:', error);
        return []
    }
};

