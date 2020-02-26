import React from 'react'
import 'react-virtualized/styles.css'
import {Column, Table} from 'react-virtualized'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import List from 'react-virtualized/dist/commonjs/List'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    flexContainer: {
        display: 'flex',
        wordBreak: 'break-all',
        boxSizing: 'border-box',
    },
    table: {
        '& .ReactVirtualized__Table__headerRow': {
            textAlign: "center",
            paddingLeft: "10px"
        },
        '& .ReactVirtualized__Table__row': {
            paddingLeft: "10px"
        },
        '& .ReactVirtualized__Table__rowColumn': {
            whiteSpace: 'normal'
        },
        width: "100%",
    },
    evenRow: {
        borderBottom: 'solid 1px #eeeeee',
        borderTop: 'solid 1px #eeeeee',
    },
    oddRow: {
        backgroundColor: "#f0f5fb",
    },
    rootCheckbox: {
        '&$checked': {
            color: '#1381C4',
        },
        width: "30px",
        height: 'auto'
    },
    checked: {},
}))

const VirtualizedView = props => {

    const classes = useStyles()
    const {
        rowCount,
        columns,
        sortProcess,
        rowGetter,
        headerRenderer,
        onClickRow,
        cellRenderer,
        style
    } = props

    const rowClassName = ({ index }) => { // index for each row
        return (index % 2 === 0) ? classes.evenRow : classes.oddRow
    }

    const noRowsRenderer = () => {
        return <div className={classes.noRows}>ไม่พบข้อมูล</div>
    }

    return (
        <div style={style}>
            <AutoSizer>
                {({ width, height }) => {
                    return (
                    <Table
                        width={width}
                        height={height}
                        headerHeight={50}
                        rowHeight={50}
                        rowCount={rowCount}
                        rowGetter={rowGetter}
                        sort={sortProcess}
                        rowStyle={{
                            paddingRight: "0px",
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: "12px",
                            boxSizing: 'border-box',
                        }}
                        className={classes.table}
                        rowClassName={rowClassName}
                        noRowsRenderer={noRowsRenderer}
                        onRowClick={onClickRow}
                    >
                        {
                            columns.map(({headerName, key, align, columnWidth}, index) => 
                                <Column 
                                    label={headerName} 
                                    dataKey={key} 
                                    width={columnWidth} 
                                    className={classes.flexContainer}
                                    headerRenderer={headerProps => headerRenderer({
                                        ...headerProps,
                                        columnIndex: index,
                                        columKey: key,
                                        align: align
                                    })}
                                    cellRenderer={cellRendererProps => cellRenderer({
                                        ...cellRendererProps,
                                        rowIndex: index,
                                        dataKey: key,
                                        align: align,
                                        classes: classes
                                    })}
                                />
                            )
                        }
                    </Table>
                )}}
            </AutoSizer>
        </div>
    )
}

export default VirtualizedView