import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uriSave } from '../modules/uriReducer';
 
function ButtonHome() {
    // 함수형 컴포넌트에서 dispatch 하기 위해 사용
    const dispatch = useDispatch();
 
    // uriReduver의 uriSave 함수를 호출
    function onClick() {
        dispatch(uriSave('/BoardNew'))
    }
 
    return(
        // 클릭 시, BoardNew로 이동
        <Link to='/BoardNew'>
            <button onClick={onClick}>
                Write
            </button>
        </Link>
    );
}
 
export default ButtonHome;