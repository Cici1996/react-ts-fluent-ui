import { DefaultButton, PrimaryButton} from '@fluentui/react'
import React, { useState } from 'react'
import { Content } from '../../components'
import { getPing, postPing } from '../../services'

const Home: React.FC = () => {
    const [name, setName] = useState<string>("")
    const [nameOther, setNameOther] = useState<string>("")

    const onGetData = async () => {
        await getPing().then((res) => {
            setName(res.data?.name)
        }).catch((err) => {
            console.log(err)
        })
    }

    const onPostData = async () => {
        await postPing().then((res) => {
            setNameOther(res.data?.name)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <Content title={"Home"}>
            <div style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
                <div style={{ flex: 1, textAlign: "center" }}>
                    <PrimaryButton onClick={onGetData}>Fetch Data</PrimaryButton>
                    {name !== "" &&
                        <div>
                            <span>Name : </span>
                            <span>{name}</span>
                        </div>

                    }
                </div>
                <div style={{ flex: 1, textAlign: "center" }}>
                    <DefaultButton onClick={onPostData} text='Post data' />
                    {nameOther !== "" &&
                        <div>
                            <span>Name : </span>
                            <span>{nameOther}</span>
                        </div>

                    }
                </div>
            </div>
        </Content>
    )
}

export default Home