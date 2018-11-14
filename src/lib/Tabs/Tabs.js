import React from "react";
import PropTypes from "prop-types";

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: this.props.selectedItem || 0
    };
  }
  handleItemClick = index => {
    this.setState(
      { selectedItem: index },
      () => this.props.onStateChange && this.props.onStateChange(index)
    );
  };
  render() {
    return this.props.children({
      selectedItem: this.state.selectedItem,
      handleItemClick: this.handleItemClick
    });
  }
}

Tabs.propTypes = {
  children: PropTypes.func.isRequired
};

export default Tabs;
