import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../constants";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faTimesCircle,
  faInfoCircle,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

const iconStyles = {
  fontSize: "28px",
  marginRight: "10px"
};

const MessageInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Message = ({ type, text, ...props }) => {
  const messageTypes = {
    warning: (
      <Card backgroundColor="khaki" textColor="tomato" {...props}>
        <MessageInnerWrapper>
          <FontAwesomeIcon style={iconStyles} icon={faExclamationCircle} />
          {text}
        </MessageInnerWrapper>
      </Card>
    ),
    error: (
      <Card backgroundColor="lightcoral" textColor="firebrick" {...props}>
        <MessageInnerWrapper>
          <FontAwesomeIcon style={iconStyles} icon={faTimesCircle} />
          {text}
        </MessageInnerWrapper>
      </Card>
    ),
    success: (
      <Card backgroundColor="lightgreen" textColor="seagreen" {...props}>
        <MessageInnerWrapper>
          <FontAwesomeIcon style={iconStyles} icon={faCheckCircle} />
          {text}
        </MessageInnerWrapper>
      </Card>
    ),
    default: (
      <Card backgroundColor="lightblue" textColor="royalblue" {...props}>
        <MessageInnerWrapper>
          <FontAwesomeIcon style={iconStyles} icon={faInfoCircle} />
          {text}
        </MessageInnerWrapper>
      </Card>
    )
  };
  return messageTypes[type];
};

Message.propTypes = {
  type: PropTypes.oneOf([ "warning", "error", "success", "default" ]),
  width: PropTypes.number,
  height: PropTypes.number,
  theme: PropTypes.object,
  text: PropTypes.string
};

Message.defaultProps = {
  theme: theme,
  type: "default"
};

export default Message;
