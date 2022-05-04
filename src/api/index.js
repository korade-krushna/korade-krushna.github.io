import axios from 'axios';
export const getPlacesData = async (type, sw, ne) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,  {
                params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat,
                  bl_longitude: sw.lng,
                  tr_longitude: ne.lng,
                },
                headers: {
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                    'X-RapidAPI-Key': '937c3c9ebamsh23ff9b8bef52a51p18ebf1jsn2bea5d5c7ac8'
                }
                });


        return data;
    } catch (error) {
        console.log(error)
    }
};
export const getWeatherData = async (lat, lng) => {
  try {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
        params: { lat: lat, lon: lng },
        headers: {
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
          'X-RapidAPI-Key': '937c3c9ebamsh23ff9b8bef52a51p18ebf1jsn2bea5d5c7ac8'
        },
      });

      return data;
    
  } catch (error) {
    console.log(error);
  }
};