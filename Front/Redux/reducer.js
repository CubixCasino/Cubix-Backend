const initialState = {
    users: [],
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case "getUsers":
            return {...state, users:action.payload}
    }
}

export default reducer