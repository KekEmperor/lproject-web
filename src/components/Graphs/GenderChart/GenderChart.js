import React from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'

import styles from './GenderChart.module.scss'

function GenderChart({ women, men }) {
    const data = [
        { name: "Percent of women", value: women },
        { name: "Percent of men", value: men }
    ]

    const COLORS = ['#9FA8DA', '#3949AB', '#FF5733']

    return (
        <div className={styles.wrapper}>
            <p>Розподіл відвідувачів локації за статтю</p>
            <PieChart width={450} height={450}>
                <Pie data={data} innerRadius={40} legendType='rect'>
                    {
                        data.map((entry, index) => <Cell fill={COLORS[index]} />)
                    }
                </Pie>
                <Legend verticalAlign='bottom' layout='vertical' iconSize={16}/>
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default GenderChart;