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

const Message = ({ type, text, hasShadow, ...props }) => {
  const messageTypes = {
    warning: (
      <Card
        backgroundColor="khaki"
        hasShadow={hasShadow}
        textColor="tomato"
        {...props}
      >
        <MessageInnerWrapper>
          <FontAwesomeIcon style={iconStyles} icon={faExclamationCircle} />
          {text}
        </MessageInnerWrapper>
      </Card>
    ),
    error: (
      <Card
        backgroundColor="lightcoral"
        hasShadow={hasShadow}
        textColor="firebrick"
        {...props}
      >
        <MessageInnerWrapper>
          <FontAwesomeIcon style={iconStyles} icon={faTimesCircle} />
          {text}
        </MessageInnerWrapper>
      </Card>
    ),
    success: (
      <Card
        backgroundColor="lightgreen"
        hasShadow={hasShadow}
        textColor="seagreen"
        {...props}
      >
        <MessageInnerWrapper>
          <FontAwesomeIcon style={iconStyles} icon={faCheckCircle} />
          {text}
        </MessageInnerWrapper>
      </Card>
    ),
    default: (
      <Card
        backgroundColor="lightblue"
        hasShadow={hasShadow}
        textColor="royalblue"
        {...props}
      >
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
  theme: PropTypes.object,
  text: PropTypes.string,
  hasShadow: PropTypes.bool
};

Message.defaultProps = {
  theme: theme,
  hasShadow: true,
  type: "default"
};

export default Message;
