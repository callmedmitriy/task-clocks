import React from 'react'

export default class ClocksView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: ''
    };
  }

  componentDidMount() {
    this.timerID = setInterval (
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    let date = new Date()
    let hours = parseInt(date.getUTCHours() + this.props.zone) > 23 ? 24 - parseInt(date.getUTCHours() + this.props.zone) : parseInt(date.getUTCHours() + this.props.zone)
    this.setState({
      date: hours+':'+date.getMinutes()+':'+date.getSeconds()
    })
  }

  render() {
    return (
      <div className="clocks">
        <div className="title">{this.props.name}</div>
        <div className="clocks">{this.state.date}</div>
        <button onClick={() => this.props.remove(this.props.id)}>Удалить</button>
      </div>
    )
  }
}