import React from 'react';
import './engagement.css'
import { Pivot, PivotItem, MessageBar, } from '@fluentui/react';
import { Content, PersonList, SampleListCommand } from '../../components';
import { Panel, PanelType } from '@fluentui/react/lib/Panel';
import { useBoolean } from '@fluentui/react-hooks';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
    const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onClickFromParent = () => {
        //openPanel()
        navigate("/engagement/new")
    }

    return (
        <>
            <MessageBar>{t("Message about the state of this view")}</MessageBar>
            <Content title={"Engagement"}>
                <Pivot className='pivot-engagement'>
                    <PivotItem style={{ marginTop: "30px", marginBottom: "30px" }} headerText="Ongoing">
                        <SampleListCommand onClickNew={onClickFromParent} onClickRestore={openPanel} />
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
                    </PivotItem>
                </Pivot>
            </Content>
        </>
    )
}

export default Home