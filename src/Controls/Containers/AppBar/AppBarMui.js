import React, { useState } from 'react'
import AppBarMuiView from '../../Views/AppBar/AppBarMuiView'

const AppBarMui = props => {

    const [state, setState] = useState({
        isOpenMenu: false
    })

    const handleClickMenu = () => {
        console.log('handleClickMenu')
        setState(prevState => ({
            ...prevState,
            isOpenMenu: true
        }))
    }

    return (<>
        <AppBarMuiView
            isOpenMenu={state.isOpenMenu}
            onClickMenu={handleClickMenu}
        />
        
    </>)
}

export default AppBarMui
