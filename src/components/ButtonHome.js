import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uriSave } from '../modules/uriReducer'
 
function ButtonHome() {
	// 함수형 컴포넌트에서 dispatch 하기 위해 사용
    const dispatch = useDispatch();
 
	// uriReducer의 uriSave 함수를 호출
    function onClick() {
        dispatch(uriSave('/'))
    }
 
    return(
        // 클릭 시, BoardList로 이동
        <Link to='/'>
            <button onClick={onClick}>
                Home
            </button>
        </Link>
    );
}
 
export default ButtonHome;