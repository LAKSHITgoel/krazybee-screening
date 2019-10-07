import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchAllAlbums } from "../../../action/homeActions";
import ScrollDetector from "../lib/ScrollDetector";
import AlbumRendrer from "../components/AlbumRendrer";
import Paginator from "../lib/Paginator";

class AlbumContainer extends React.Component {
  componentDidMount() {
    this.props.fetchAllAlbums();
  }

  render() {
    return (
      <Paginator
        data={this.props.allAlbums}
        pageSize={4}
        render={(renderdata, next, prev) => (
          <ScrollDetector next={next} prev={prev}>
            <AlbumRendrer renderdata={renderdata} />
          </ScrollDetector>
        )}
      />
    );
  }
}

const mapStateToProps = state => ({
  allAlbums: state.home.allAlbums
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchAllAlbums }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumContainer);
