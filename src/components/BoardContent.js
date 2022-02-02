import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editContent, removeContent } from '../modules/boardReducer';
import { useHistory } from 'react-router-dom';
 
function BoardContent() {
    // useSelector로 boardReducer에 있는 selectRowData 값을 가져옴
    const { selectRowData } = useSelector(state => state.boardReducer)
 
    // title, content를 제어하기 위해 선언
    const [title, setTitle] = useState(selectRowData.title)
    const [content, setContent] = useState(selectRowData.content)
 
    // 함수형 컴포넌트에서 useDispatch 사용을 위해 선언
    const dispatch = useDispatch()
    // 함수형 컴포넌트에서 useNavigate 사용을 위해 선언
    const history = useHistory();
 
    // 수정
    const onChange = () => {
        const _inputData = {
            id: selectRowData.id,
            title: title,
            content: content
        }
        console.log('clickSave :: ', _inputData)
        // boadrReducer의 editContent함수에 변경 값을 전달
        dispatch(editContent(_inputData))
        // input 값 reset
        setTitle('')
        setContent('')
        // data dispatch 후 페이지 이동
        history.push('/')
    }

    // 삭제
    const onRemove = () => {
    	// reducer의 removeContent 함수에 삭제할 id 값을 전달한다.
        dispatch(removeContent(selectRowData.id))
        // input 값 초기화
        setTitle('')
        setContent('')
        // 페이지 이동
        history.push('/')
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
            <h2>상세보기</h2>
            <div>
                <div>
                    <input type='text' className='inputTitle' onChange={handleTitle} value={title} />
                </div>
                <div>
                    <textarea className='inputContent' onChange={handleContent} value={content} />
                </div>
                <div>
                    <button type='button' onClick={onChange} className='editBtn'>edit</button>
                    <button type='button' onClick={onRemove} className='deleteBtn'>delete</button>
                </div>
            </div>
        </div>
    )
}
 
export default BoardContent;