const getAllData = async () => {
  try {
    const result = await fetch('https://api-v3.mbta.com/routes?filter[type]=0,1', {method: 'GET'});
    const data = await result.json();
    return data;
  } catch(err) {
    console.log(err);
  }
}

const getLineData = async (line) => {
  try {
    const result = await fetch(`https://api-v3.mbta.com/stops?filter[route]=${line}`, {method: 'GET'});
    const data = await result.json();
    return data;
  } catch(err) {
    console.log(err);
  }
}


module.exports.getAllData = getAllData;
module.exports.getLineData = getLineData;