import React from 'react'
import { LineChart, Line, XAxis, Legend } from 'recharts'

import styles from './TimeSeriesChart.module.scss'

function TimeSeriesChart({ timeline }) {
    console.log(timeline);

    return (
        <div className={styles.wrapper}>
            <LineChart>
                
            </LineChart>
        </div>
    )
}

export default TimeSeriesChart;