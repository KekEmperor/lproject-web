import React from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'
import { useTranslation } from 'react-i18next'

import styles from './GenderChart.module.scss'

function GenderChart({ women, men }) {
    const [t, i18n] = useTranslation()
    
    const data = [
        { name: t("Відсоток жінок"), value: women },
        { name: t("Відсоток чоловіків"), value: men }
    ]

    const COLORS = ['#9FA8DA', '#3949AB', '#FF5733']

    return (
        <div className={styles.wrapper}>
            <p>{t('Розподіл відвідувачів локації за статтю')}</p>
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