import React from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'

import styles from './AgeChart.module.scss'

function AgeChart({ under30, from30to50, over50 }) {
    const data = [
        { name: "Percent of people under 30 years", value: under30 },
        { name: "Percent of people from 30 to 50 years", value: from30to50 },
        { name: "Percent of people from 50 years", value: over50 }
    ]

    const COLORS = ['#C70039', '#FFC300', '#FF5733']

    return (
        <div className={styles.wrapper}>
            <p>Розподіл відвідувачів локації за віком</p>
            <PieChart width={450} height={450}>
                <Pie data={data} innerRadius={40} legendType='rect'>
                    {
                        data.map((entry, index) => <Cell fill={COLORS[index]} />)
                    }
                </Pie>
                <Legend align='center' layout='vertical' iconSize={16}/>
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default AgeChart;