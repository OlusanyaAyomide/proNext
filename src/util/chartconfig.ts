export const chartConfig = {
    maintainAspectRatio: false,
    fill:'origin',
    responsive: true,
    plugins: {
      filler: {
        propagate: true
    },
      legend: {
        display:false
      },
      title: {
        display: false,
      },
    },
    scales: {
    x: {
        grid: {
          display: false,
          borderColor:"red"
        }
      },
    y: {
 
        min: 0,
        ticks:{
          stepSize: 1
        }
      }
    }
}