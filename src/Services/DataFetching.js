


export default function DataFetching(setLoading, setDataHolder) {
    return async () => {
      try {
  
        setLoading(true);
        const response = await fetch('http://localhost:8081/HighWay2h/ServeletFetchData');
        const data = await response.json();
        console.log("this is data  : ", data);
        setDataHolder(data);
        setLoading(false);
      }
      catch {
        setLoading(false);
      }
    };
  }
  