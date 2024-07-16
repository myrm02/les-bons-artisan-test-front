import styled from "styled-components"
import PropTypes from 'prop-types';

const ButtonComponent = styled.button`
  color: white;
  background-color: grey;
  border-radius: 133px;
  padding: 19px;
  &:hover {
    background-color: grey;
  }
  &.danger {

  }
`

export default function Button(props){

    const action = () => {
        props.clickAction()
    };

    return(
        <div>
            <ButtonComponent onClick={() => action()}>{props.label}</ButtonComponent>
        </div>
    )
}

Button.propTypes = {
    clickEvent: PropTypes.func.isRequired, 
    label: PropTypes.string.isRequired,
  }