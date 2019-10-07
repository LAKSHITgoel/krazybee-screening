import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchAllPhotos } from "../../../action/homeActions";
import Paginatior from "../lib/Paginator";
import Crousell from "../components/Crousell";

class CrousellContainer extends Component {
  componentDidMount() {
    this.props.fetchAllPhotos(this.props.id);
  }

  render() {
    const { id } = this.props;
    return this.props.photos[id] ? (
      <Paginatior
        key={id}
        data={this.props.photos[id] || []}
        pageSize={8}
        render={(renderdata, next, prev) => (
          <Crousell renderdata={renderdata} prev={prev} next={next} />
        )}
      />
    ) : (
      <p>Loading...</p>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.home.photos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchAllPhotos }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CrousellContainer);
