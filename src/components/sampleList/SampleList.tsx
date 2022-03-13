import React from 'react'
import { DetailsList, DetailsListLayoutMode, SelectionMode, IColumn } from '@fluentui/react/lib/DetailsList';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { TooltipHost } from '@fluentui/react';
import { generateDocuments, IDocument } from './SampleListHelper';

const classNames = mergeStyleSets({
  fileIconHeaderIcon: {
    padding: 0,
    fontSize: '16px',
  },
  fileIconCell: {
    textAlign: 'center',
    selectors: {
      '&:before': {
        content: '.',
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '100%',
        width: '0px',
        visibility: 'hidden',
      },
    },
  },
  fileIconImg: {
    verticalAlign: 'middle',
    maxHeight: '16px',
    maxWidth: '16px',
  },
  controlWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  exampleToggle: {
    display: 'inline-block',
    marginBottom: '10px',
    marginRight: '30px',
  },
  selectionDetails: {
    marginBottom: '20px',
  },
});

const columns: IColumn[] = [
  {
    key: 'column1',
    name: 'File Type',
    className: classNames.fileIconCell,
    iconClassName: classNames.fileIconHeaderIcon,
    ariaLabel: 'Column operations for File type, Press to sort on File type',
    iconName: 'Page',
    isIconOnly: true,
    fieldName: 'name',
    minWidth: 16,
    maxWidth: 16,
    onRender: (item: IDocument) => (
      <TooltipHost content={`${item.fileType} file`}>
        <img src={item.iconName} className={classNames.fileIconImg} alt={`${item.fileType} file icon`} />
      </TooltipHost>
    ),
  },
  {
    key: 'column2',
    name: 'Name',
    fieldName: 'name',
    minWidth: 210,
    maxWidth: 350,
    isRowHeader: true,
    isResizable: true,
    isSorted: true,
    isSortedDescending: false,
    sortAscendingAriaLabel: 'Sorted A to Z',
    sortDescendingAriaLabel: 'Sorted Z to A',
    data: 'string',
    isPadded: true,
    onRender: (item: IDocument) => (
      <TooltipHost content={`${item.name}`}>
        <span>{item.name}</span>
      </TooltipHost>
    ),
  },
  {
    key: 'column3',
    name: 'Date Modified',
    fieldName: 'dateModifiedValue',
    minWidth: 70,
    maxWidth: 90,
    isResizable: true,
    data: 'number',
    onRender: (item: IDocument) => {
      return <span>{item.dateModified}</span>;
    },
    isPadded: true,
  },
  {
    key: 'column4',
    name: 'Modified By',
    fieldName: 'modifiedBy',
    minWidth: 70,
    maxWidth: 90,
    isResizable: true,
    isCollapsible: true,
    data: 'string',
    onRender: (item: IDocument) => {
      return <span>{item.modifiedBy}</span>;
    },
    isPadded: true,
  },
  {
    key: 'column5',
    name: 'File Size',
    fieldName: 'fileSizeRaw',
    minWidth: 70,
    maxWidth: 90,
    isResizable: true,
    isCollapsible: true,
    data: 'number',
    onRender: (item: IDocument) => {
      return <span>{item.fileSize}</span>;
    },
  },
];

interface Props {
  allItems? : IDocument[]
  onActiveItemChanged? : (item?: IDocument, index?: number, ev?: React.FocusEvent<HTMLElement>) => void
}

const SampleList: React.FC<Props> = ({allItems,onActiveItemChanged}) => {
  const dataItems:IDocument[] = (allItems == null) ? generateDocuments() : allItems;

  return (
    <DetailsList
      items={dataItems}
      columns={columns}
      selectionMode={SelectionMode.none}
      setKey="none"
      layoutMode={DetailsListLayoutMode.justified}
      isHeaderVisible={true}
      onActiveItemChanged={onActiveItemChanged}
    />
  )
}

export default SampleList