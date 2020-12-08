import React from 'react'
import { Doughnut} from 'react-chartjs-2';
import { provinces} from '../../Components/Api/Api'

function DoughChart({basicData}) {

      //get the data array from the main object
      const lData = basicData.map((e)=>e.data.data) 

      //get the latest cases from the last array
      let lastData = lData.map((e)=>e[e.length -1])
  
      //add name of the provinces to every lastData object, so it's easier to map
      const newData = lastData.map((e,i)=>e['name'] = (provinces[i].Name))

      // const compare = (a,b)=>{
      //   const totalA = a.total_cases
      //   const totalB = b.total_cases

      //   let comparison = 0;
      //   if (totalA > totalB) {
      //     comparison = 1;
      //   } else if (totalA < totalB) {
      //     comparison = -1;
      //   }
      //   return comparison;
      // }



      
      // const compare = (a,b)=>{
      //   if (a > b) return -1;
      //   if (b > a) return 1;

      //   return 0;
      // }

      const total = lastData.map(data=>data.total_cases)
      const names= lastData.map(data=>data.name)

    return (
        <div>
            <Doughnut 
            
            data={{
                labels: names,
                datasets: [
                  {
                    label: 'Cases',
                    data: total,
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
