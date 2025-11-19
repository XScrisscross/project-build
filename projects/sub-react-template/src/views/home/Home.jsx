import React from 'react';
import './Home.scss';

const MyContext = React.createContext();

export function useMyContext() {
  return React.useContext(MyContext);
}

function Perent(props) {
  let [count, setCount] = React.useState(0);
  let [wanju, setWanju] = React.useState('wanju');

  // 不使用useState下  1 此处的status可以显示在视图中 2此处的status不会根据clickHandler1在视图中变化 3此处的status会根据wanju的变化而变化
  // status  关联下的逻辑wanju 变化了 status 也会变化
  // status  非关联下的逻辑count 变化了 status 不会变化
  // 与生命周期有关。。可能
  console.log(props,'props');
  let status = 'active';
  if (wanju === 'wanju') {
    status = 'active';
  } else {
    status = 'inactive';
  }

  const request = function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        count = count + 10;
        if (count > 5) {
          resolve(count);
        } else {
          reject('error');
        }
      }, 300);
    });
  };

  function clickHandler() {
    request().then(res => {
      console.log('clickHandler', '延迟了', '返回了' + res);
      setCount(res);
    });
  }

  function clickHandler1() {
    status = 'inactive';
    console.log('clickHandler1', '点击了');
    console.log('status', 'status的值变成了' + status);
    console.log('视图下status的值无变化了');
  }

  function play(params) {
    console.log('换一个玩具');
    setWanju('新玩具');
  }

  return (
    <>
      <MyContext.Provider value={{ count: count, wanju, play: play }}>
        <Children item={count} haha={clickHandler} />
        <div onClick={clickHandler1}>{ status }</div>
      </MyContext.Provider>
    </>
  );
}

function Children({ item, haha }) {
  return (
    <div onClick={haha}>
      <div>Children,ChildrenChildrenChildrenChildren + {item}</div>
      <CenterChildren props={item} xixi={haha} />
    </div>
  );
}

function CenterChildren({ props, xixi }) {
  return (
    <div onClick={xixi}>
      <div>CenterChildren, +++ CenterChildren + {props}</div>
      <GrandChildren props={props} xixi={xixi} />
    </div>
  );
}

function GrandChildren({ props, xixi }) {
  const obj = React.useContext(MyContext);
  console.log(obj, 'obj');

  return (
    <>
      <div onClick={xixi}>{props} + GrandChildrenGrandChildrenGrandChildrenGrandChildren</div>
      <div>context传值 - vue 的 inject provide {obj.count}</div>



      <div onClick={obj.play}> 孙子回应了玩具  </div>
      <div > 当前玩具：{ obj.wanju }  </div>
    </>
  );
}

export default class Home extends React.Component {
  state = {
    sum: '_______________________________',
  };

  clickHandler(params, e) {
    e.stopPropagation();
    console.log(params);
    console.log(e, 'e---');
  }

  render() {
    console.log(this.props,'+++++++++++++++++++');
    console.log(this,'+++++++++++++++++++');
    
    const arr = [1, 2, 3, 4, 5];
    const contentItems = arr.map((item, index) => (
      <div onClick={e => this.clickHandler(item, e)} key={index}>
        Item {item}
      </div>
    ));
    return (
      <div className='home-wraper'>
        <h2>Home Page</h2>
        {contentItems}

        <h1>
          <Perent props={ this.state.sum }/>
        </h1>
      </div>
    );
  }
}
