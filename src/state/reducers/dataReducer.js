const reducer=(state={
    loadData:[],
    loadActors:[]
},action)=>{
    if(action.type==='load_data'){
        return {...state,loadData:[...state.loadData,...action.payload]}
    }
    else if(action.type=='load_actors'){
        return {...state,loadActors:[...state.loadActors,action.payload]}
    }
    else{
        return state
    }
}

export default reducer