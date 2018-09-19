import React from "react";

class Tabs extends React.Component {
  state = { selectedItem: 0 };
  getState(state = this.state) {
    return {
      selectedItem:
        this.props.selectedItem || state.selectedItem
    };
  }
  handleItemClick = index => {
    this.setState({ selectedItem: index },  () =>
      this.props.onStateChange && this.props.onStateChange(index)
    );
  }
  render() {
    return this.props.children({
      selectedItem: this.getState().selectedItem,
      handleItemClick: this.handleItemClick
    });
  }
}

export default Tabs;


