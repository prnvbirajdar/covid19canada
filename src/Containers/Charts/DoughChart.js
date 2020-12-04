import React from 'react'
import { Doughnut} from 'react-chartjs-2';

function DoughChart() {
    return (
        <div>
            <Doughnut 
            
            data={{
                labels: ["AB","BC","MB","NB","NL","NS","NT","NU",'ON',"PE",'QC',"SK",'YT'],
                datasets: [
                  {
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3,4,6,10,2,3,6,1],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.4)',
                      'rgba(68, 162, 23, 0.4)',
                      'rgba(255, 206, 86, 0.4)',
                      'rgba(75, 192, 192, 0.4)',
                      'rgba(153, 102, 255, 0.4)',
                      'rgba(255, 159, 64, 0.4)',
                      "rgba(128, 0, 0, 0.4)",
                      "rgba(0, 0, 128, 0.4)",
                      "rgba(170, 110, 40, 0.4)",
                      "rgba(136, 128, 128, 0.4)",
                      "rgba(250, 2, 9, 0.4)",
                      "rgba(145, 30, 180, 0.4)",
                      "rgba(170, 255, 9, 0.4)",

                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(68, 162, 23, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                      "rgba(128, 0, 0, 1)",
                      "rgba(0, 0, 128, 1)",
                      "rgba(170, 110, 40, 1)",
                      "rgba(136, 128, 128, 1)",
                      "rgba(250, 2, 9, 1)",
                      "rgba(145, 30, 180, 1)",
                      "rgba(70, 255, 9, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
            
              },
            {
                labels: ["AB","BC","MB","NB","NL","NS","NT","NU",'ON',"PE",'QC',"SK",'YT'],
                datasets: [
                  {
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3,4,6,10,2,3,6,1],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.4)',
                      'rgba(68, 162, 23, 0.4)',
                      'rgba(255, 206, 86, 0.4)',
                      'rgba(75, 192, 192, 0.4)',
                      'rgba(153, 102, 255, 0.4)',
                      'rgba(255, 159, 64, 0.4)',
                      "rgba(128, 0, 0, 0.4)",
                      "rgba(0, 0, 128, 0.4)",
                      "rgba(170, 110, 40, 0.4)",
                      "rgba(136, 128, 128, 0.4)",
                      "rgba(250, 2, 9, 0.4)",
                      "rgba(145, 30, 180, 0.4)",
                      "rgba(170, 255, 9, 0.4)",

                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(68, 162, 23, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                      "rgba(128, 0, 0, 1)",
                      "rgba(0, 0, 128, 1)",
                      "rgba(170, 110, 40, 1)",
                      "rgba(136, 128, 128, 1)",
                      "rgba(250, 2, 9, 1)",
                      "rgba(145, 30, 180, 1)",
                      "rgba(70, 255, 9, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
                
               
              }}
              options= {{
                responsive: true,
                legend: {
                    position:"left",
                },                       
                cutoutPercentag:50,

            }
            }
            
            />
        </div>
    )
}

export default DoughChart
