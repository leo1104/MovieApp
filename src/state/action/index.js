export const loadData=(data)=>{
return (dispatch)=>{
    dispatch({
        type:'load_data',
        payload:data
    })
}
}


export const loadActors=(data)=>{
return(dispatch)=>{
    dispatch({
        type:'load_actors',
        payload:data
    })
}
}