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
        // title:{
        //     display:true,
        //     text:"Amount Spent (₦)"
        // },
        min: 0
      }
    }
}