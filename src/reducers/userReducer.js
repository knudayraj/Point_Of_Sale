const userInitialValue = []

const UserReducer = (state = userInitialValue, action) => {
    switch(action.type){
        case 'USERS_INFO' : {
            return action.payload
        }
        default : {
            return [...state]
        }
    }
}

export default UserReducer