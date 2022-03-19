import React, { useEffect, useState } from 'react';
import './engagement.css'
import { Pivot, PivotItem, MessageBar, } from '@fluentui/react';
import { Content, PersonList, SampleList, SampleListCommand } from '../../components';
import { NewsService } from '../../services/NewsService';
import { Panel, PanelType } from '@fluentui/react/lib/Panel';
import { useBoolean } from '@fluentui/react-hooks';
import { generateNewsData, IDocument } from '../../components/sampleList/SampleListHelper';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
    const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
    const [allData, setallData] = useState<IDocument[]>()
    const { t } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        NewsService.getNews().then((x) => {
            setallData(generateNewsData(x?.data?.articles))
        })
    }, [])

    const onClickFromParent = () => {
        //openPanel()
        navigate("/engagement/new")
    }

    const onItemClicked = (item?: IDocument, index?: number, ev?: React.FocusEvent<HTMLElement>) => {
        console.log(item)
    }

    return (
        <>
            <MessageBar>{t("Message about the state of this view")}</MessageBar>
            <Content title={"Engagement"}>
                <Pivot className='pivot-engagement'>
                    <PivotItem style={{ marginTop: "30px", marginBottom: "30px" }} headerText="Ongoing">
                        <SampleListCommand onClickNew={onClickFromParent} onClickRestore={openPanel} />
                        <SampleList allItems={allData} onActiveItemChanged={onItemClicked} />
                        <Panel
                            headerText="Add Tester(s)"
                            type={PanelType.custom}
                            customWidth="500px"
                            isOpen={isOpen}
                            onDismiss={dismissPanel}
                            closeButtonAriaLabel="Close"
                        >
                            <PersonList name={"Akhmad Zaki"} email={"akhmad.zaki@crowe.id"} />
                            <PersonList name={"Ahcmadinata"} email={"ahcmadinata@crowe.id"} />
                            <div style={{ position: "absolute", bottom: 0, marginBottom: "10px" }}>
                                <PrimaryButton text="Select" allowDisabledFocus />
                            </div>
                        </Panel>
                    </PivotItem>
                    <PivotItem headerText="Completed">
                        <SampleList />
                    </PivotItem>
                </Pivot>
            </Content>
        </>
    )
}

export default Home