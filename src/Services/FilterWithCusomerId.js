

export default function FilterWithCusomerId(dataHolder, search) {
    return dataHolder.filter((data) => {
      if (search === "") {
  
        return data;
      }
      else if (data.cust_number.toString().includes(search)) {
  
        return data;
      }
    });
  }