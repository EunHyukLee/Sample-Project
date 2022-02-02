import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectRow } from '../modules/boardReducer'
 
function BoardList() {
    // useSelector로 boardReducer에 있는 inputData 값을 가져옴
    const {inputData} = useSelector(state => state.boardReducer)
    // useSelector로 boardReducer에 있는 lastId 값을 가져옴
    const {lastId} = useSelector(state => state.boardReducer)
 
	// 함수형 컴포넌트에서 useDispatch 사용을 위해 선언
    const dispatch = useDispatch();
 
	// reducer의 selectRow 함수에 선택한 id값을 넘겨줌
    const selectContent = (id) => {
        dispatch(selectRow(id))
    }
 
    return(
        <div>
            <h2>게시판</h2>
            <div>
                <table className='listTable'>
                    <tbody>
                        <tr>
                            <td className='listTableIndex th'>index</td>
                            <td className='listTableTitle th'>title</td>
                        </tr>
                        {lastId !== 0 ?
                            inputData.map(rowData => (
                                // rowData의 id 가 ''이 아닐때 목록을 보여줌
                                rowData.id !== '' &&
                                <tr>
                                    <td className='listTableIndex' onClick={() => selectContent(rowData.id)}>
                                        <Link to='/BoardContent'>{rowData.id}</Link>
                                    </td>
                                    <td className='listTableTitle' onClick={() => selectContent(rowData.id)}>
                                        <Link to='/BoardContent'>{rowData.title}</Link>
                                    </td>
                                </tr>
                            )) : 
                            // 작성된 목록이 없을 때 보여짐
                            <tr>
                                <td className='listTableIndex'></td>
                                <td className='listTableTitle noData'>작성된 글이 없습니다.</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
 
export default BoardList;

// lastId가 0이 아닐때만 목록을 보여줌

// 해당 글을 클릭하면 Link가 to로 컴포넌트 이동되며, td에 onClick 이벤트를 추가하여 id값을 전달
// 이 때, id값을 매개변수로 주기 위해 onClick을 함수형으로 전달

// useSelector를 통해 현재 state를 받아오고, 그 값에 따라 list를 보일 지, 내용을 없다고 나타낼 지 알려줌

// return 설명

// tbody: 테이블 내용 - 필수사항은 아니나 구분하기 편하게 하기 위해 사용
// td: table data의 약자
// tr: table row / td태그를 행으로 묶어줌


// 의문점
// 1. 왜 reducer의 selectRow 함수에 선택한 id값을 넘겨주는것