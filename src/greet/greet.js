import React from "react";
const slogans = ["Отличный денек", "Я так люблю JSX", "React это жизнь"];


class Greet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slogan: 'Первое приветствие',
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
      this.setState({
          slogan: slogans[Math.floor(Math.random() * slogans.length)]
      })
  }

  render() {
    return <div>{this.state.slogan}</div>;
  }
}
export default Greet;
