import React, { useState, useEffect,useRef} from 'react'
import VirtualizedView from '../../Views/Table/VirtualizedView'
import * as Utils from '../../../Utilities/Utils'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@material-ui/core/Checkbox'
import {
    Grid,
    IconButton,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

const Virtualized = props => {

    const {
        disableSortColumnIndexList = [0,3],
        checkboxColumnKey = ["_checkbox"],
        actionColumnKey = ["_action"],
        listSelectedCheckboxID = ['1001', '1002'],
    } = props

    const [state, setState] = useState({
        sortedList: [],
        listChecked: []
    })

    // var currentColumnSort = null //สามารถใช้ทำ innitial column ที่ต้องการ sort ได้
    const currentColumnSort = useRef(null)
    const currentSortDirection = useRef('ASC')

    // const list = [] // test data null
    const list = [
        {
            id: '1001',
            name: 'Brian Vaughn',
            other: 'Phasellus vulputate odio commodo tortor sodales, et vehicula ipsum viverra.',
        },
        {
            id: '1002',
            name: 'Peter Brimer',
            other: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '1003',
            name: 'Brian Vaughn',
            other: 'Phasellus vulputate odio commodo tortor sodales, et vehicula ipsum viverra.',
        },
        {
            id: '1004',
            name: 'Peter Brimer',
            other: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: '1005',
            name: 'Brian Vaughn',
            other: 'Phasellus vulputate odio commodo tortor sodales, et vehicula ipsum viverra.',
        },
        {
            id: '1006',
            name: 'Peter Brimer',
            other: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ]

    const headerData = [
        {
            key: '_checkbox',
            headerName: '',
            columnWidth: '50',
            align: 'center',
        },
        {
            key: 'name',
            headerName: 'Name',
            columnWidth: '100',
            align: 'left',
        },
        {
            key: 'other',
            headerName: 'The description label',
            columnWidth: '300',
            align: 'left',
        },
        {
            key: '_action',
            headerName: '',
            columnWidth: '100',
            align: 'center',
        },
    ]

    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            sortedList: list,
            listChecked: listSelectedCheckboxID
        }))
    }, [])

    const rowGetter = ({index}) => {
        let dataRowSort = [...state.sortedList]
        if (currentColumnSort.current) {
            if (currentSortDirection.current === 'ASC') {
                dataRowSort = Utils.sortObjASC(dataRowSort, currentColumnSort.current)
            } else {
                dataRowSort = Utils.sortObjDESC(dataRowSort, currentColumnSort.current)
            }
            return dataRowSort[index]
        } else {
            return state.sortedList[index]
        }
    }

    const sortProcess = ({ sortBy }) => {
        let dataRowSort = [...state.sortedList]

        if (currentColumnSort.current === sortBy) {
            if (currentSortDirection.current == 'DESC') {
                dataRowSort = Utils.sortObjASC(dataRowSort, sortBy)
                currentSortDirection.current = 'ASC'
            } else {
                dataRowSort = Utils.sortObjDESC(dataRowSort, sortBy)
                currentSortDirection.current = 'DESC'
            }

        } else {
            dataRowSort = Utils.sortObjDESC(dataRowSort, sortBy)
            currentColumnSort.current = sortBy //currentSort
            currentSortDirection.current = 'DESC'
        }

        setState(prevState => ({
            ...prevState,
            sortedList: dataRowSort
        }))
    }

    const headerRenderer = ({ label, columnIndex, columKey }) => {
        const isEnableSort = (disableSortColumnIndexList.indexOf(columnIndex) === -1)
        return (
            <div style={{ cursor: (isEnableSort) ? "pointer" : "unset" }}>
                <span style={{ fontWeight: "bold" }}>{label}</span>

                {
                    (isEnableSort) ?
                        (columKey === currentColumnSort.current && currentSortDirection.current === "DESC")
                            ?
                            <span><ArrowDropDownIcon fontSize={'inherit'} /></span>
                            :
                            <span><ArrowDropUpIcon fontSize={'inherit'} /></span>

                        : null
                }
            </div>
        )
    }

    const handleClickRow = (rowData) => {
        console.log('handleClickRow', rowData)
    }

    const handleClickCheckbox = (rowIndexId) => e => {
        e.stopPropagation()
        console.log('handleClickCheckbox', rowIndexId)
        if (state.listChecked.indexOf(rowIndexId) !== -1) { // หาเจอลบออก
            setState(prevState => ({
                ...prevState,
                listChecked: state.listChecked.filter(itm => itm !== rowIndexId)
            }))
        }
        else {
            setState(prevState => ({
                ...prevState,
                listChecked: [...state.listChecked, rowIndexId]
            }))
        }
    }

    const onClickEditDialog = (rowData) => e => {
        e.stopPropagation()
        console.log('onClickEditDialog', rowData)
    }

    const onClickDelDialog = (rowData) => e => {
        e.stopPropagation()
        console.log('onClickDelDialog', rowData)
    }

    const cellRenderer = ({ cellData, rowIndex, rowData, dataKey, align, classes }) => {

        let cellAlign = 'flex-start' //= (align) ? align : "left"
        if (align) {
            switch (align) {
                case 'center':
                    cellAlign = 'center'
                    break
                case 'right':
                    cellAlign = 'flex-end'
                    break
                case 'left':
                    break
                default:
                    cellAlign = 'flex-start'
                    break;
            }
        }

        if (checkboxColumnKey.indexOf(dataKey) !== -1) {
            return <Grid container justify={cellAlign}>
                <Grid item>
                    <Checkbox
                        checked={(state.listChecked.indexOf(rowData.id) !== -1) ? true : false}
                        color="primary"
                        onChange={handleClickCheckbox(rowData.id)}
                        classes={{
                            root: classes.rootCheckbox,
                            checked: classes.checked
                        }} 
                    />
                </Grid>
            </Grid>
        }
        else if (actionColumnKey.indexOf(dataKey) !== -1) {
            return <Grid container direction="row" justify={cellAlign}>
                <Grid item>
                    <IconButton aria-label="edit">
                        <EditIcon onClick={onClickEditDialog(rowData)} />
                    </IconButton>
                    <IconButton aria-label="clear">
                        <HighlightOffIcon onClick={onClickDelDialog(rowData)} />
                    </IconButton>
                </Grid>
            </Grid>
        }
        else {
            return (
                <Grid container justify={cellAlign} style={{ width: "100%" }}>
                    <Grid item>
                        {cellData}
                    </Grid>
                </Grid>
            )
        }

    }

    return <VirtualizedView
        rowCount={state.sortedList.length}
        columns={headerData}
        sortProcess={sortProcess}
        rowGetter={rowGetter}
        headerRenderer={headerRenderer}
        onClickRow={handleClickRow}
        cellRenderer={cellRenderer}
    />
}

export default Virtualized
