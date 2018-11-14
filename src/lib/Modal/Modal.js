import styled from "styled-components";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import H2 from "../Typography/H2";
import PropTypes from "prop-types";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 990;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 475px;
  height: 400px;
  background: #fff;
  padding: 10px;
  z-index: 999;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

export const CustomModalContent = ({
  children,
  id,
  title,
  handleCloseModal
}) => (
  <ModalContent id={id}>
    <TitleWrapper>
      <H2>{title}</H2>
      <span style={{ fontSize: "18px", cursor: "pointer" }}>
        <FontAwesomeIcon icon={faTimes} onClick={handleCloseModal} />
      </span>
    </TitleWrapper>
    <div>{children}</div>
  </ModalContent>
);

class CustomModal extends React.PureComponent {
  handleOverlayClick = e => {
    if (e) {
      e.stopPropagation();
      e.target.id === "modal-overlay" && this.props.handleCloseModal();
    } else {
      this.props.handleCloseModal();
    }
  };
  render() {
    const { isOpen, children, title, handleCloseModal } = this.props;
    return isOpen ? (
      <ModalWrapper onClick={this.handleOverlayClick} id="modal-overlay">
        <CustomModalContent
          id="modal-content"
          title={title}
          handleCloseModal={handleCloseModal}
        >
          {children}
        </CustomModalContent>
      </ModalWrapper>
    ) : null;
  }
}

CustomModal.propTypes = {
  children: PropTypes.any.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  title: PropTypes.string
};

CustomModal.defaultProps = {
  isOpen: false,
  title: "Modal title"
};

export default CustomModal;
