import React from 'react'

function Table({ basicData}) {

const AB = basicData[0].data.data
const lastAB = AB[AB.length -1]

const BC = basicData[1].data.data
const lastBC = BC[BC.length -1]

const MB = basicData[2].data.data
const lastMB = MB[MB.length -1]

const NB = basicData[3].data.data
const lastNB = NB[NB.length -1]

const NL = basicData[4].data.data
const lastNL = NL[NL.length -1]

const NS = basicData[5].data.data
const lastNS = NS[NS.length -1]

const NT = basicData[6].data.data
const lastNT = NT[NT.length -1]

const NU = basicData[7].data.data
const lastNU = NU[NU.length -1]

const ON = basicData[8].data.data
const lastON = ON[ON.length -1]

const PE = basicData[9].data.data
const lastPE = PE[PE.length -1]

const QC = basicData[10].data.data
const lastQC = QC[QC.length -1]

const SK = basicData[11].data.data
const lastSK = SK[SK.length -1]

const YT = basicData[12].data.data
const lastYT = YT[YT.length -1]

    return (

        <div>
            <table class="ui table striped unstackable">
                <thead>
                    <tr>
                        <th>Province</th>
                        <th>Cases</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Hospitalizations</th>
                        <th>Recoveries</th>
                        <th>Tests</th>
                    </tr>

                    <tr>
                        <td data-label="Province">Alberta</td>
                        <td data-label="Cases">{lastAB.total_cases}</td>
                        <td data-label="Deaths">{lastAB.total_fatalities}</td>
                        <td data-label="Active">{lastAB.total_cases - lastAB.total_recoveries - lastAB.total_fatalities}</td>
                        <td data-label="Recoveries">{lastAB.total_recoveries}</td>
                        <td data-label="Hospitalizations">{lastAB.total_hospitalizations}</td>
                        <td data-label="Cases">{lastAB.total_tests}</td>
                    </tr>
                    <tr>
                        <td data-label="Province">British Columbia</td>
                        <td data-label="Cases">{lastBC.total_cases}</td>
                        <td data-label="Deaths">{lastBC.total_fatalities}</td>
                        <td data-label="Active">{lastBC.total_cases - lastBC.total_recoveries - lastBC.total_fatalities}</td>
                        <td data-label="Recoveries">{lastBC.total_recoveries}</td>
                        <td data-label="Hospitalizations">{lastBC.total_hospitalizations}</td>
                        <td data-label="Cases">{lastBC.total_tests}</td>
                    </tr>
                    <tr>
                        <td data-label="Province">Manitoba</td>
                        <td data-label="Cases">{lastMB.total_cases}</td>
                        <td data-label="Deaths">{lastMB.total_fatalities}</td>
                        <td data-label="Active">{lastMB.total_cases - lastMB.total_recoveries - lastMB.total_fatalities}</td>
                        <td data-label="Recoveries">{lastMB.total_recoveries}</td>
                        <td data-label="Hospitalizations">{lastMB.total_hospitalizations}</td>
                        <td data-label="Cases">{lastMB.total_tests}</td>
                    </tr>
                    <tr>
                        <td data-label="Province">New Brunswick</td>
                        <td data-label="Cases">{lastNB.total_cases}</td>
                        <td data-label="Deaths">{lastNB.total_fatalities}</td>
                        <td data-label="Active">{lastNB.total_cases - lastNB.total_recoveries - lastNB.total_fatalities}</td>
                        <td data-label="Recoveries">{lastNB.total_recoveries}</td>
                        <td data-label="Hospitalizations">{lastNB.total_hospitalizations}</td>
                        <td data-label="Cases">{lastNB.total_tests}</td>
                    </tr>
                    <tr>
                        <td data-label="Province">Newfoundland and Labradow</td>
                        <td data-label="Cases">{lastNL.total_cases}</td>
                        <td data-label="Deaths">{lastNL.total_fatalities}</td>
                        <td data-label="Active">{lastNL.total_cases - lastNL.total_recoveries - lastNL.total_fatalities}</td>
                        <td data-label="Recoveries">{lastNL.total_recoveries}</td>
                        <td data-label="Hospitalizations">{lastNL.total_hospitalizations}</td>
                        <td data-label="Cases">{lastNL.total_tests}</td>
                    </tr>
                    <tr>
                        <td data-label="Province">Nova Scotia</td>
                        <td data-label="Cases">{lastNS.total_cases}</td>
                        <td data-label="Deaths">{lastNS.total_fatalities}</td>
                        <td data-label="Active">{lastNS.total_cases - lastNS.total_recoveries - lastNS.total_fatalities}</td>
                        <td data-label="Recoveries">{lastNS.total_recoveries}</td>
                        <td data-label="Hospitalizations">{lastNS.total_hospitalizations}</td>
                        <td data-label="Cases">{lastNS.total_tests}</td>
                    </tr>
                    <tr>
                        <td data-label="Province">Northwest Territories</td>
                        <td data-label="Cases">{lastNT.total_cases}</td>
                        <td data-label="Deaths">{lastNT.total_fatalities}</td>
                        <td data-label="Active">{lastNT.total_cases - lastNT.total_recoveries - lastNT.total_fatalities}</td>
                        <td data-label="Recoveries">{lastNT.total_recoveries}</td>
                        <td data-label="Hospitalizations">{lastNT.total_hospitalizations}</td>
                        <td data-label="Cases">{lastNT.total_tests}</td>
                    </tr>
                    <tr>
                        <td data-label="Province">Nunavat</td>
                        <td data-label="Cases">{lastNU.total_cases}</td>
                        <td data-label="Deaths">{lastNU.total_fatalities}</td>
                        <td data-label="Active">{lastNU.total_cases - lastNU.total_recoveries - lastNU.total_fatalities}</td>
                        <td data-label="Recoveries">{lastNU.total_recoveries}</td>
                        <td data-label="Hospitalizations">{lastNU.total_hospitalizations}</td>
                        <td data-label="Cases">{lastNU.total_tests}</td>
                    </tr>
                    <tr>
                        <td data-label="Province">Ontario</td>
                        <td data-label="Cases">{lastON.total_cases}</td>
                        <td data-label="Deaths">{lastON.total_fatalities}</td>
                        <td data-label="Active">{lastON.total_cases - lastON.total_recoveries - lastON.total_fatalities}</td>
                        <td data-label="Recoveries">{lastON.total_recoveries}</td>
                        <td data-label="Hospitalizations">{lastON.total_hospitalizations}</td>
                        <td data-label="Cases">{lastON.total_tests}</td>
                    </tr>
                    <tr>
                        <td data-label="Province">Prince Edward Island</td>
                        <td data-label="Cases">{lastPE.total_cases}</td>
                        <td data-label="Deaths">{lastPE.total_fatalities}</td>
                        <td data-label="Active">{lastPE.total_cases - lastPE.total_recoveries - lastPE.total_fatalities}</td>
                        <td data-label="Recoveries">{lastPE.total_recoveries}</td>
                        <td data-label="Hospitalizations">{lastPE.total_hospitalizations}</td>
                        <td data-label="Cases">{lastPE.total_tests}</td>
                    </tr>
                    <tr>
                        <td data-label="Province">Quebec</td>
                        <td data-label="Cases">{lastQC.total_cases}</td>
                        <td data-label="Deaths">{lastQC.total_fatalities}</td>
                        <td data-label="Active">{lastQC.total_cases - lastQC.total_recoveries - lastQC.total_fatalities}</td>
                        <td data-label="Recoveries">{lastQC.total_recoveries}</td>
                        <td data-label="Hospitalizations">{lastQC.total_hospitalizations}</td>
                        <td data-label="Cases">{lastQC.total_tests}</td>
                    </tr>                    
                    <tr>
                        <td data-label="Province">Saskatchewan</td>
                        <td data-label="Cases">{lastSK.total_cases}</td>
                        <td data-label="Deaths">{lastSK.total_fatalities}</td>
                        <td data-label="Active">{lastSK.total_cases - lastSK.total_recoveries - lastSK.total_fatalities}</td>
                        <td data-label="Recoveries">{lastSK.total_recoveries}</td>
                        <td data-label="Hospitalizations">{lastSK.total_hospitalizations}</td>
                        <td data-label="Cases">{lastSK.total_tests}</td>
                    </tr> 
                    <tr>
                        <td data-label="Province">Yukon</td>
                        <td data-label="Cases">{lastYT.total_cases}</td>
                        <td data-label="Deaths">{lastYT.total_fatalities}</td>
                        <td data-label="Active">{lastYT.total_cases - lastYT.total_recoveries - lastYT.total_fatalities}</td>
                        <td data-label="Recoveries">{lastYT.total_recoveries}</td>
                        <td data-label="Hospitalizations">{lastYT.total_hospitalizations}</td>
                        <td data-label="Cases">{lastYT.total_tests}</td>
                    </tr> 

                </thead>
                <tbody>    
                    
                </tbody>
            </table>
        </div>
    )
}

export default Table
