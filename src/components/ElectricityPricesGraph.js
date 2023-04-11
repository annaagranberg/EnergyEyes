import { useState, useEffect } from "react";
import { VictoryLine, VictoryChart } from "victory";

function ElectricityPricesGraph() {

  const [data, setData] = useState([]);
  const [formattedData, setFormattedData] = useState([]);
  const [date, setDate] = useState(["04-06"]);
/*2023/04-06_SE4 */
  useEffect(() => {
    async function fetchPrices() {
      setDate(date);
      const response = await fetch(
        "https://www.elprisetjustnu.se/api/v1/prices/2023/" + date + "_SE3.json"
        );
      const data = await response.json();
      setData(data);
      const formattedData = data.map(item => ({
        x: item.time_start,
        y: item.SEK_per_kWh
      }));

      setFormattedData(formattedData);
    }
    fetchPrices();
  }, []);

  return (
    <div>
<VictoryChart>
  <VictoryLine
    interpolation="natural"

    data={formattedData}
  />
</VictoryChart>    </div>
  );
}

export default ElectricityPricesGraph;