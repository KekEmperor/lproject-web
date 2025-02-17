import React from 'react'
import { ResponsiveContainer, Scatter, ScatterChart, XAxis, CartesianGrid, YAxis } from 'recharts'
import moment from 'moment'
import { useTranslation } from 'react-i18next'

import styles from './TimeSeriesChart.module.scss'

function TimeSeriesChart({ timeline }) {
    const [t, i18n] = useTranslation();

    return (
        <div className={styles.wrapper}>
            <p>{t('Розподіл відвідувачів локації у часі')}</p>
            <ResponsiveContainer width='95%' height={350} >
                <ScatterChart data={timeline}>
                    <CartesianGrid />
                    <XAxis dataKey="time" type="number" domain={['auto', 'auto']} tickFormatter={(unixTime) => moment(unixTime).format('HH:mm DD.MM')} />
                    <Scatter type="monotone" dataKey="amount" line={{ stroke: '#FF0F0F' }} lineType='joint' />
                    <YAxis allowDecimals={false} />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TimeSeriesChart;