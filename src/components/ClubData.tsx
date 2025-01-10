import React,{ useState, useEffect } from 'react'

// データの型を定義
interface Post {
  time: string;
  gaku: string;
  kumi: string;
  player: string;
  bukatuName: string;
  kibo: string;
}

const ClubData: React.FC = ({name}:any) => {
  const [data, setData] = useState<string[]>([]);
  
  const apiURL = 'https://script.google.com/macros/s/AKfycbwF5Nsh0VfmoTchqmRb7aSQONMbSyx9OAmmWrZfEFedBfO1hXOaEMYt3ZYvX9SweIE/exec'

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((json: Post[]) => {
        const filterData = json
          .filter((item) => item.player === name)
          .map((item) => item.bukatuName);
        setData(filterData);
      })
      .catch(() => alert("error"));
  }, []);

  console.log(data);
  return (
    <div>
      {!data || data.length === 0 ? (
        <div>Loading</div>
        ) : (
          data.map((title, index) => (
            <li key={index}>{title}</li>
          ))
        )}
    </div>
  );
};

export default ClubData
