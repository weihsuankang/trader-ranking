import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TraderRankingPage = () => {
  // 使用狀態來儲存排行榜數據，初期設置為空數組
  const [traderRankings, setTraderRankings] = useState([]);

  // 模擬數據，在後端 API 完成後將會從 API 獲取數據
  useEffect(() => {
    console.log("test");
    const fetchData = async () => {
      // 假設這是從 API 獲取的數據
      const mockData = [
        { id: 1, name: 'Trader A', winRate: 75, profit: 1500 },
        { id: 2, name: 'Trader B', winRate: 65, profit: 1200 },
        { id: 3, name: 'Trader C', winRate: 85, profit: 1800 },
      ];
      setTraderRankings(mockData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>帶單員排行榜</h1>
      <table>
        <thead>
          <tr>
            <th>名次</th>
            <th>名稱</th>
            <th>勝率 (%)</th>
            <th>收益 (USD)</th>
          </tr>
        </thead>
        <tbody>
          {traderRankings.map((trader, index) => (
            <tr key={trader.id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/trader/${trader.id}`}>{trader.name}</Link>
              </td>
              <td>{trader.winRate}</td>
              <td>{trader.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TraderRankingPage;
