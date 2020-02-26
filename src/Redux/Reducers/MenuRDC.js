

const initialStateMenu = [
    {
        menuId: 1,
        menuName: 'Text Input',
        pathTo: '/'
    }
]

export default (state = initialStateMenu, action) => {
    switch (action.type) {
        case 'foo':
            return
    
        default:
            return state
    }
}