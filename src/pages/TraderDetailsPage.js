import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TraderDetailsPage = () => {
  const { traderId } = useParams(); // 從 URL 獲取 traderId
  const [traderData, setTraderData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // 模擬 API 獲取的帶單員數據
      const mockTraderData = {
        id: traderId,
        name: 'Trader A',
        winRate: 75,
        profit: 1500,
        trades: [
          { id: 1, date: '2024-10-01', type: 'Buy', amount: 500, result: 50 },
          { id: 2, date: '2024-10-02', type: 'Sell', amount: 300, result: -20 },
        ],
      };
      setTraderData(mockTraderData);
    };

    fetchData();
  }, [traderId]);

  if (!traderData) return <p>Loading...</p>;

  return (
    <div>
      <h1>{traderData.name} 的詳細資料</h1>
      <p>勝率：{traderData.winRate}%</p>
      <p>收益：${traderData.profit}</p>

      <h2>交易紀錄</h2>
      <table>
        <thead>
          <tr>
            <th>日期</th>
            <th>類型</th>
            <th>金額</th>
            <th>結果</th>
          </tr>
        </thead>
        <tbody>
          {traderData.trades.map((trade) => (
            <tr key={trade.id}>
              <td>{trade.date}</td>
              <td>{trade.type}</td>
              <td>${trade.amount}</td>
              <td>{trade.result > 0 ? '+' : ''}{trade.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TraderDetailsPage;
