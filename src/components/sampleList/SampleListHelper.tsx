import { IColumn } from "@fluentui/react";
import { News } from "../../models/Models";

// class SampleListHelper{
//     makan():void{

//     } 
// }

const FILE_ICONS: { name: string }[] = [
    { name: 'accdb' },
    { name: 'audio' },
    { name: 'code' },
    { name: 'csv' },
    { name: 'docx' },
    { name: 'dotx' },
    { name: 'mpp' },
    { name: 'mpt' },
    { name: 'model' },
    { name: 'one' },
    { name: 'onetoc' },
    { name: 'potx' },
    { name: 'ppsx' },
    { name: 'pdf' },
    { name: 'photo' },
    { name: 'pptx' },
    { name: 'presentation' },
    { name: 'potx' },
    { name: 'pub' },
    { name: 'rtf' },
    { name: 'spreadsheet' },
    { name: 'txt' },
    { name: 'vector' },
    { name: 'vsdx' },
    { name: 'vssx' },
    { name: 'vstx' },
    { name: 'xlsx' },
    { name: 'xltx' },
    { name: 'xsn' },
];

export interface IDetailsListDocumentsExampleState {
    columns: IColumn[];
    items: IDocument[];
    selectionDetails: string;
    isModalSelection: boolean;
    isCompactMode: boolean;
    announcedMessage?: string;
}

export interface IDocument {
    key: string;
    name: string;
    value: string;
    iconName: string;
    fileType: string;
    modifiedBy: string;
    dateModified: string;
    dateModifiedValue: number;
    fileSize: string;
    fileSizeRaw: number;
}

const randomFileIcon = () => {
    const typeDoc: string = FILE_ICONS[Math.floor(Math.random() * FILE_ICONS.length)].name;
    return {
        typeDoc,
        url: `https://static2.sharepointonline.com/files/fabric/assets/item-types/16/${typeDoc}.svg`,
    };
}

const _randomFileSize = () => {
    const fileSize: number = Math.floor(Math.random() * 100) + 30;
    return {
        value: `${fileSize} KB`,
        rawSize: fileSize,
    };
}

const _randomDate = (start: Date, end: Date) => {
    const date: Date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return {
        value: date.valueOf(),
        dateFormatted: date.toLocaleDateString(),
    };
}

const LOREM_IPSUM = (
    'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut ' +
    'labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut ' +
    'aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
    'eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt '
).split(' ');
let loremIndex = 0;
const _lorem = (wordCount: number) => {
    const startIndex = loremIndex + wordCount > LOREM_IPSUM.length ? 0 : loremIndex;
    loremIndex = startIndex + wordCount;
    return LOREM_IPSUM.slice(startIndex, loremIndex).join(' ');
}

export const generateDocuments = () => {
    const items: IDocument[] = [];
    for (let i = 0; i < 20; i++) {
        const randomDate = _randomDate(new Date(2012, 0, 1), new Date());
        const randomFileSize = _randomFileSize();
        const randomFileType = randomFileIcon();
        let fileName = _lorem(2);
        fileName = fileName.charAt(0).toUpperCase() + fileName.slice(1).concat(`.${randomFileType.typeDoc}`);
        let userName = _lorem(2);
        userName = userName
            .split(' ')
            .map((name: string) => name.charAt(0).toUpperCase() + name.slice(1))
            .join(' ');
        items.push({
            key: i.toString(),
            name: fileName,
            value: fileName,
            iconName: randomFileType.url,
            fileType: randomFileType.typeDoc,
            modifiedBy: userName,
            dateModified: randomDate.dateFormatted,
            dateModifiedValue: randomDate.value,
            fileSize: randomFileSize.value,
            fileSizeRaw: randomFileSize.rawSize,
        });
    }
    return items;
}

export const generateNewsData = (data:News[]) => {
    const items: IDocument[] = [];
    data.forEach((item,index:number) => {  
        items.push({
            key: index.toString(),
            name: item.title,
            value: item.author,
            iconName: item.urlToImage,
            fileType: item.author,
            modifiedBy: item.author,
            dateModified: new Date(item.publishedAt).toLocaleDateString(),
            dateModifiedValue: new Date(item.publishedAt).valueOf(),
            fileSize: item.author,
            fileSizeRaw: 10,
        })
    });
    return items;
}
