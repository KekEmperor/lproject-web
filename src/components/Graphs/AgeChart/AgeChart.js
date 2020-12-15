import React from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'
import { useTranslation } from 'react-i18next'

import styles from './AgeChart.module.scss'

function AgeChart({ under30, from30to50, over50 }) {
    const [t, i18n] = useTranslation()
    const data = [
        { name: t("Відсоток людей до 30 років"), value: under30 },
        { name: t("Відсоток людей від 30 до 50 років"), value: from30to50 },
        { name: t("Відсоток людей від 50 років"), value: over50 }
    ]

    const COLORS = ['#C70039', '#FFC300', '#FF5733']

    return (
        <div className={styles.wrapper}>
            <p>{t('Розподіл відвідувачів локації за віком')}</p>
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