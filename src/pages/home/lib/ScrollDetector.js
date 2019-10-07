import React from "react";

class ScrollDetector extends React.Component {
  constructor(props) {
    super(props);
    this.onScrollToBottom = React.createRef();
    this.onScrollToTop = React.createRef();
  }

  componentDidMount() {
    window.onscroll = e => {
      let c = document.getElementById("container");
      if (window.innerHeight + window.scrollY > c.scrollHeight) {
        // you're at the bottom of the page
        const next = () => this.props.next() && window.scrollTo(0, 300);
        setTimeout(next(), 100);
      } else if (window.scrollY < 150) {
        // at Top
        const prev = () => this.props.prev() && window.scrollTo(0, 300);
        setTimeout(prev(), 100);
      }
    };
  }

  render() {
    return (
      <>
        <div ref={this.onScrollToTop}></div>
        {this.props.children}
        <div ref={this.onScrollToBottom}></div>
      </>
    );
  }
}

export default ScrollDetector;
