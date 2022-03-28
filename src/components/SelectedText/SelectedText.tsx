import { Label } from '@fluentui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import "./selectedText.css"

interface Props {
    label: string,
    totalPerson: number
}

export const SelectedText: React.FC<Props> = ({ label, totalPerson }) => {
    const { t } = useTranslation();
    return (
        <div className="ms-Grid-row gap-row">
            <div className="ms-Grid-col ms-sm12 ms-md4 ms-lg4">
                <Label className='engagement-label' required>{label}</Label>
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md8 ms-lg8">
                <div className='team-member-selected'>{totalPerson} {t("Person(s) selected")}</div>
            </div>
        </div>
    )
}