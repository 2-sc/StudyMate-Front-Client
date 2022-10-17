import React, { useEffect, useState } from 'react';
import Calendar from '../../components/calendar/Calendar';
import dummyData from '../../components/graph/dummyData';
import Graph from '../../components/graph/Graph';
function Log() {
  const [resultData, setResultData] = useState();
  useEffect(() => console.log(resultData), [resultData]);
  return (
    <>
      <Calendar resultData={resultData} setResultData={setResultData} />
      <Graph data={dummyData} />
    </>
  );
}
export default Log;
