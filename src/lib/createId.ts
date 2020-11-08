let id: number=parseInt(window.localStorage.getItem('_idMax')||'0')||0
function CreateId() { 
    id++
    return id 
}
export default CreateId