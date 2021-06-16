const AccessRights=(state=false,action)=>{
    switch(action.type){
        case 'ACC':
            return action.payload;
        default:
            return state;
    }
}
export default AccessRights;