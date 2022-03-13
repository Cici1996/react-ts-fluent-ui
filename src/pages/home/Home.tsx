import React, { useEffect, useState } from 'react';
import './home.css'
import { Pivot, PivotItem } from '@fluentui/react';
import { SampleList, SampleListCommand } from '../../components';
import { NewsService } from '../../services/NewsService';
import { Panel } from '@fluentui/react/lib/Panel';
import { useBoolean } from '@fluentui/react-hooks';
import { generateNewsData, IDocument } from '../../components/sampleList/SampleListHelper';

const Home: React.FC = () => {
    const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
    const [allData, setallData] = useState<IDocument[]>()

    useEffect(() => {
        NewsService.getNews().then((x) => {
            setallData(generateNewsData(x?.data?.articles))
        })
    }, [])

    const onClickFromParent = () => {
        openPanel()
    }

    const onItemClicked = (item?: IDocument, index?: number, ev?: React.FocusEvent<HTMLElement>) => {
        console.log(item)
    }

    return (
        <div>
            <div className="title ms-fontSize-20 ms-fontWeight-semibold">Engagement</div>
            <Pivot className='pivot-engagement'>
                <PivotItem style={{ marginTop: "30px", marginBottom: "30px" }} headerText="Ongoing">
                    <SampleListCommand onClickNew={onClickFromParent} />
                    <SampleList allItems={allData} onActiveItemChanged={onItemClicked} />
                    <Panel
                        headerText="Selected Tester"
                        isOpen={isOpen}
                        onDismiss={dismissPanel}
                        closeButtonAriaLabel="Close"
                    >
                        <div style={{
                            display: 'flex',
                            gap: '10px',
                            borderBottom: "1px solid #000",
                            alignItems:"center",
                            paddingBottom:"10px"
                        }}>
                            <img src='https://ui-avatars.com/api/?name=Akhmad+Zaki' alt='Profile' style={{ borderRadius: "50%", width: "50px", height: "50px" }} />
                            <div>
                                <div>Ahmad Zaki</div>
                                <div>akmad.zaki@crowe.id</div>
                            </div>
                        </div>
                    </Panel>
                </PivotItem>
                <PivotItem headerText="Completed">
                    <SampleList />
                </PivotItem>
            </Pivot>
        </div>
    )
}

export default Home