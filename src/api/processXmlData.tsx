import {parseString} from "xml2js";


export default function processXmlData(xmlData: string) {
    let stations;

    parseString(xmlData, (err, result) => {
        if (err) {
            console.error("error parsing", err);
        } else {
            const xmlStationRecord = result.Stations.Station;
            stations = xmlStationRecord.map((xmlStation: any) => ({
                id: xmlStation.id[0],
                name: xmlStation.name[0],
                state: xmlStation.state[0],
                lat: parseFloat(xmlStation.lat[0]),
                lng: parseFloat(xmlStation.lng[0]),
            }));
        }
    })
    return stations;
}