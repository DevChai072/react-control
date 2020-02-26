import React, {useState} from 'react'
import TableView from '../Views/TableView'

const Table = props => {

    const [state, setState] = useState({
        order: 'asc',
        orderBy: 'calories',
        selected: [],
        page: 0,
        dense: false,
        rowsPerPage: 5
    })

    const createData = (name, calories, fat, carbs, protein) => {
        return { name, calories, fat, carbs, protein }
    }
      
    const rows = [
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Donut', 452, 25.0, 51, 4.9),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Honeycomb', 408, 3.2, 87, 6.5),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Jelly Bean', 375, 0.0, 94, 0.0),
        createData('KitKat', 518, 26.0, 65, 7.0),
        createData('Lollipop', 392, 0.2, 98, 0.0),
        createData('Marshmallow', 318, 0, 81, 2.0),
        createData('Nougat', 360, 19.0, 9, 37.0),
        createData('Oreo', 437, 18.0, 63, 4.0),
    ]

    const descendingComparator = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) {
          return -1;
        }
        if (b[orderBy] > a[orderBy]) {
          return 1;
        }
        return 0;
    }
      
    const getComparator = (order, orderBy) => {
        return order === 'desc'
          ? (a, b) => descendingComparator(a, b, orderBy)
          : (a, b) => -descendingComparator(a, b, orderBy)
    }
      
    const stableSort = (array, comparator) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
          const order = comparator(a[0], b[0]);
          if (order !== 0) return order;
          return a[1] - b[1];
        });
        return stabilizedThis.map(el => el[0]);
    }

    const headCells = [
        { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
        { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
        { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
        { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
        { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
    ]

    const handleChangePage = (event, newPage) => {
        setState(prevState => ({
            ...state,
            page: newPage
        }))
    }

    const handleChangeRowsPerPage = event => {
        setState(prevState => ({
            ...state,
            rowsPerPage: parseInt(event.target.value, 10),
            page: 0
        }))
    }

    const handleChangeDense = event => {
        setState(prevState => ({
            ...state,
            dense: event.target.checked
        }))
    }

    return (<>
        <TableView 
            rows={rows}
            state={state}
            getComparator={getComparator}
            stableSort={stableSort}
            headCells={headCells}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            onChange={handleChangeDense}
        />
    </>)
}

export default Table
