import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch("https://esp32-server-nine.vercel.app/getFullData").then(
			async (d) => setData(await d.json())
		);
	}, []);

	return (
		<div className="App">
			{data && <Line 
        options={[]}
        data={data.map(e=>e.body.temp)}
      /> }
		</div>
	);
}

export default App;
