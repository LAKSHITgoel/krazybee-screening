import React from "react";

class Paginator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  next = () => {
    const { currentPage } = this.state;
    const { pageSize } = this.props;
    console.log("next clicked");
    let dataLength = this.props.data.length;
    let totalPages = dataLength / pageSize;
    let nextPage = currentPage + 1;
    let newStartIndex = (nextPage - 1) * pageSize;
    if (newStartIndex <= totalPages) {
      this.setState({ currentPage: nextPage });
      return true;
    }
    return false;
  };

  prev = () => {
    const { currentPage } = this.state;
    const { pageSize } = this.props;
    console.log("prev clicked");
    let prevPage = currentPage - 1;
    let newStartIndex = (prevPage - 1) * pageSize;
    if (newStartIndex >= 0) {
      this.setState({ currentPage: prevPage });
      return true;
    }
    return false;
  };

  getDataChunk = () => {
    let arr = [];
    const { currentPage } = this.state;
    const { data, pageSize } = this.props;
    let startIndex = (currentPage - 1) * pageSize;
    if (data.length !== 0) {
      for (let i = 0; i < pageSize; i++) {
        arr.push(data[startIndex]);
        startIndex++;
      }
    }
    return arr;
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.data.length !== this.props.data.length) {
      this.forceUpdate();
    } else if (prevState.currentPage !== this.state.currentPage) {
      this.forceUpdate();
    }
  }

  render() {
    return this.props.render(this.getDataChunk(), this.next, this.prev);
  }
}

export default Paginator;
