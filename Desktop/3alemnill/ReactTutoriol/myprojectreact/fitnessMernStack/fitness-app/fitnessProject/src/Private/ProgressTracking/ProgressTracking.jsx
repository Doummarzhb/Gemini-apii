import React from 'react';
import style from './Progress.module.css'
import { BarChart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
const ProgressTracking = () => {
  const data = [
    { name: 'Week 1', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Week 2', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Week 3', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Week 4', uv: 2780, pv: 3908, amt: 2000 },
  ];

  return (
    <main className={style.maincontainer}>
    {/* Title */}
   

    {/* Cards Section */}
    <div className={style.maincards}>
      {/* Card 1: Products */}
      <div className={style.card}>
        <div className={style.cardinner}>
          <h3>PRODUCTS</h3>
          <BsFillArchiveFill className='card_icon'/>
        </div>
        <h1>300</h1>
      </div>

      {/* Card 2: Categories */}
      <div className={style.card}>
        <div className={style.cardinner}>
          <h3>CATEGORIES</h3>
          <BsFillGrid3X3GapFill className='card_icon'/>
        </div>
        <h1>12</h1>
      </div>

      {/* Card 3: Customers */}
      <div className={style.card}>
        <div className={style.cardinner}>
          <h3>CUSTOMERS</h3>
          <BsPeopleFill className='card_icon'/>
        </div>
        <h1>33</h1>
      </div>

      {/* Card 4: Alerts */}
      <div className={style.card}>
        <div className={style.cardinner}>
          <h3>ALERTS</h3>
          <BsFillBellFill className='card_icon'/>
        </div>
        <h1>42</h1>
      </div>
    </div>
    <div className={style.progresscontainer}> 
      <h4>Progress Tracking</h4>

      <div className={style.charts}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#d79447" />
            <Bar dataKey="uv" fill="#d79447" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#f9ac54" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#f9ac54" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    </main>
  );
};

export default ProgressTracking;