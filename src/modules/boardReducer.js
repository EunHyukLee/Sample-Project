// action type 설정
const _SAVE = 'DATA_SAVE';
const _SELECT = 'DATA_SELECT'
const _EDIT = 'DATA_EDIT'
const _DELETE = 'DATA_DELETE'

// dataSave action 생성
export const dataSave = (inputData) => ({
    type: _SAVE,
    inputData: {
        id: inputData.id,
        title: inputData.title,
        content: inputData.content
    }
})

// selectRow action 생성
// BoardContent에서 id값을 매개변수로 받음
export const selectRow = (id) => (
    console.log('reducer :: id :: ', id),
    {
    type: _SELECT,
    inputData: {
        id: id,
    }
})
 
// editContent action 생성
// 수정시 BoardContent에서 값을 받아옴
export const editContent = (inputData) => (
    console.log('reducer :: edit :: ', inputData),
    {
    type: _EDIT,
    inputData: {
        id: inputData.id,
        title: inputData.title,
        content: inputData.content
    }
})

// removeContent action 생성
// 삭제할 id값을 받아옴
export const removeContent = (id) => ({
    type: _DELETE,
    inputData: {
        id: id,
    }
})
 
// 초기값 설정
const initialState = {
    lastId: 0,
    inputData: [
        {
            id: '',
            title: '',
            content: ''
        }
    ],
    selectRowData: {}
}

// dispatch로 전달된 action.type에 따라 실행할 코드를 작성하면 이전 state에서 변경된 state를 확인하여 새로운 state를 반환
export default function boardReducer(state = initialState, action){
    switch(action.type) {
        case _SAVE:
            console.log(state.inputData)
            return {
                lastId: state.lastId + 1,
                inputData: state.inputData.concat({
                    ...action.inputData,
                    id: state.lastId + 1,
                })
            }
        case _SELECT:
            console.log(action)
            return {
                ...state,
                selectRowData: state.inputData.find(row => row.id === action.inputData.id)
            }
        case _EDIT:
            return {
                ...state,
                inputData: state.inputData.map(row =>
                    row.id === action.inputData.id ?
                    {...action.inputData} : row    
                ),
                selectRowData: {}
            }
        case _DELETE:
            return {
            	// lastId 값이 현재 삭제 요청된 id값과 동일하면 값을 줄여줌
                lastId: state.lastId === action.inputData.id ? state.lastId - 1 : state.lastId,
                // filter를 사용하여 state에 있는 값과 action.id 값이 동일하지 않은 값만 return 하여 state에 저장
                inputData: state.inputData.filter(row =>
                    row.id !== action.inputData.id
                ),
                selectRowData: {}
            }
        default:
            return state
    }
}