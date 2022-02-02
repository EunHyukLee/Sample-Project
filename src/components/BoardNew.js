import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dataSave } from '../modules/boardReducer';
import { uriSave } from '../modules/uriReducer'
import { useHistory } from 'react-router-dom';
 
function BoardNew() {
	// title, content를 제어하기 위해 선언
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
 
	// 함수형 컴포넌트에서 useDispatch 사용을 위해 선언
    const dispatch = useDispatch();
    
    //data dispatch 후 list 페이지로 이동하기 위해 선언
    const history = useHistory();
 
    const onSave = () => {
    	// reducer에 선언된 초기값과 동일한 타입으로 data값 설정
        const _inputData = {
            id: '',
            title: title,
            content: content
        }
        // 리듀서의 dataSave 함수에 dispatch
        dispatch(dataSave(_inputData))
        // input 값 reset
        setTitle('')
        setContent('')
        // data dispatch 후 페이지 이동
        // submit 버튼 클릭 후 dispatch 후 list 페이지로 이동할 때 새로고침 되면 store에 저장되어 있는 state값이 초기화 되기 때문에 userNavigate를 이용하여 페이지 이동함.
        history.push('/')
        // 페이지 이동 시 footer의 button 설정을 위해 dispatch ***
        dispatch(uriSave('/'))
    }
 
    // onChange 이벤트가 발생하면 e.target.value 값을 통하여 이벤트 객체에 담겨있는 현재의 텍스트 값을 읽어옴.
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleContent = (e) => {
        setContent(e.target.value)
    }
 
    return(
        <div>
            <h2>글 작성</h2>
            <div>
                <div>
                    <input type='text' className='inputTitle' placeholder='제목을 입력하세요' onChange={handleTitle} value={title} />
                </div>
                <div>
                    <textarea className='inputContent' placeholder='내용을 입력하세요' onChange={handleContent} value={content} />
                </div>
                <div>
                    <button type='button' onClick={onSave}>submit</button>
                </div>
            </div>
        </div>
    )
}
 
export default BoardNew;

// 클릭을 이용해 이동할 때는 Link 컴포넌트를 사용하고, 함수내에서 페이지를 이동할 때는 useNavigate안의 navigate를 사용하면 됨