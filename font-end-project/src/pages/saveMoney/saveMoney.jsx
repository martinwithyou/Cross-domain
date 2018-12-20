import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import { connect } from 'react-redux';
import { getProData, togSelectPro, editPro } from '@/store/production/action';
import PropTypes from 'prop-types';
// import TouchableOpacity from '@/components/TouchableOpacity/TouchableOpacity';
import PublicHeader from '@/components/header/header';
import PublicAlert from '@/components/alert/alert';
import './saveMoney.less';

class Introduce extends Component{
  state = {
    alertStatus: false, //弹框状态
    alertTip: '', //弹框提示文字
    balance: {  //可提现金额
        balance: 0, 
    },
    applyNum: '', //输入值
  }
  static propTypes = {
    proData: PropTypes.object.isRequired,
    getProData: PropTypes.func.isRequired,
    togSelectPro: PropTypes.func.isRequired,
    editPro: PropTypes.func.isRequired,
  }


  // 初始化数据
  initData = async () => {
    try{
    //   let result = await API.getBalance();
    //   console.log(result);
    //   this.setState({balance: result});
    }catch(err){
      console.error(err);
    }
  }
  
  /**
   * 格式化输入数据
   * 格式为微信红包格式：最大 200.00
   * @param  {object} event 事件对象
   */
  handleInput = event => {
    let value = event.target.value;
    if((/^\d*?\.?\d{0,2}?$/gi).test(value)){
      if((/^0+[1-9]+/).test(value)) {
        value = value.replace(/^0+/,'');
      }
      if((/^0{2}\./).test(value)) {
        value = value.replace(/^0+/,'0');
      }
      value = value.replace(/^\./gi,'0.');
      if(parseFloat(value) > 200){
        value = '200.00';
      }
      this.setState({applyNum: value});
    }
  }

  submit = () =>{
    // postData('http://localhost:5000/delete', {id: 3,account:1000})
    postData('http://localhost:5000/delete',{id: 3,account:1000})
    .then(data => console.log(data)) // JSON from `response.json()` call
    .catch(error => console.error(error))

  function postData(url, data) {
  // Default options are marked with *
    return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
    .then(response => response.json()) // parses response to JSON
  }
    
  

  }
  
  /**
   * 提交判断条件
   */
  sumitForm = () => {
    let alertTip;
    if(!this.state.applyNum){
      alertTip = '请输入提现金额';
    }else if(parseFloat(this.state.applyNum) > this.state.balance.balance){
      alertTip = '申请提现金额不能大于余额';
    }else{
      alertTip = '申请提现成功';
    }

    this.setState({
      alertStatus: true,
      alertTip,
      applyNum: '',
    })
  }
  
  /*
  关闭弹框
   */
  closeAlert = () => {
    this.setState({
      alertStatus: false,
      alertTip: '',
      balance:100
    })
  }

  showTip = (item) => {
    console.log(item);
    this.setState({
      alertStatus: true,
      alertTip: "item",
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }
  
  componentDidMount(){
    if(!this.props.proData.dataList.length){
      //this.props.getProData();
    }
  }

  render(){
    return (
      <main className="common-con-top">
        <PublicHeader title='首页' confirm />
        <section className="pro-list-con">
          <div className="pro-list-title" >
          上海银行,用户存钱页面
          </div>
          <section className="broke-main-content">
          <form className="broke-form">
            <p>请输入储蓄金额（元）</p>
            <p>¥ <input type="text" value={this.state.applyNum} placeholder="0.00" onChange={this.handleInput} maxLength="5" /></p>
            <input className="feedback-sbmit" type="submit" onClick={this.submit} value="提交"/>
          </form>
          </section>
          <PublicAlert closeAlert={this.closeAlert} alertTip={this.state.alertTip} alertStatus={this.state.alertStatus} />
        </section>
      </main>
    )
  }
}


export default connect(state => ({
  proData: state.proData,
}), {
  getProData, 
  togSelectPro, 
  editPro
})(Introduce);