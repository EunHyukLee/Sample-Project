// action type 설정
const URI_SAVE = 'URI_SAVE';
 
// uriSave action 생성
// 버튼 클릭 시 호출될 함수
export const uriSave = (inputData) => ({
    type: URI_SAVE,
    inputData: inputData
})
 
// data 초기화
const initialState = {
    inputData: '/'
}
 
// store에 실질적으로 저장해주는 reducer
export default function uriReducer(state = initialState, action){
    switch(action.type) {
        case URI_SAVE:
            // {}은 초기값
            // Object.assing을 사용하여 state의 사본을 만듦
            return Object.assign({}, state, {
                inputData: action.inputData
            })
 
        default:
            return state
    }
}

// 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용됨
/* Object.assign({초기값, 객체들})
뒤에 있는 객체들이 초기값 부분과 합쳐짐 */

// Object.assing은 ES6사양이지만 구현된 브라우저가 많이 없으므로 ployfill이나 Babel을 사용해야함
