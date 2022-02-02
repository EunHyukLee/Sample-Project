import React from 'react';
import { useSelector } from 'react-redux';
import ButtonHome from './ButtonHome';
import ButtonWrite from './ButtonWrite';
 
function Footer() {
	// store의 상태가 바뀔 때마다 상태를 받아옴
    const uri = useSelector(state => state.uriReducer.inputData)
 
    return(
        <div>
            <hr />
            <nav>
                <ul>
                    <li><ButtonHome /></li>
                    
                    {uri !== '/BoardNew' ?
                        <li><ButtonWrite /></li> : 
                        <li></li>
                    }
                </ul>
            </nav>
        </div>
    );
}
 
export default Footer;

 // path가 '/BoardNew'가 아닐경우 ButtonWrite를 실행
 /*{uri !== '/BoardNew' ?
   <li><ButtonWrite /></li> : 
    <li></li> */

// hr: 가로줄 넣기

// nav: 현재 웹 사이트에서 주요한 지점으로 이동할 수 있는 네비게이션 역할을 담당
// 즉 다른 페이지에 대한 링크를 제공하는 영역