import { useCallback, useEffect, useState } from "react"
import Opinion from "./Opinion"

const OpinionList = () => {
  const [dataList, setDataList] = useState([]);
  const fetchData = useCallback(
    async () => {
      const resp = await fetch('https://fir-demo-e7c01-default-rtdb.asia-southeast1.firebasedatabase.app/opinion.json')
      const data = await resp.json()
      const tmpDataList = [...dataList]

      for (const key in data) {
        tmpDataList.push({
          stuff: data[key].stuff,
          opinion: data[key].opinion,
          image: data[key].image,
        })

      }
      setDataList(tmpDataList)
    }, [dataList]
  )
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      {dataList.map((dat) => {
        return (
          <Opinion stuff={dat.stuff} opinion={dat.opinion} image={dat.image}></Opinion>
        )

      })}
    </>

  );
}

export default OpinionList;