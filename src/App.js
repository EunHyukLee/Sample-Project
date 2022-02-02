import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
 
import BoardList from './components/BoardList';
import BoardNew from './components/BoardNew';
import BoardContent from './components/BoardContent';
import Footer from './components/Footer';
 
function App () {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path='/' component={BoardList} exact/>
            <Route path='/BoardNew' component={BoardNew}/>
            <Route path='/BoardContent' component={BoardContent}/>
          </Switch>
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  )
}
 
export default App;

// react-router-dom을 사용하기 위해 Router로 감쌈
// 클릭시 path마다 열릴 컴포넌트를 각각 작성