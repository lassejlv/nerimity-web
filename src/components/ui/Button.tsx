import Icon from '@/components/ui/icon/Icon';
import { JSX, JSXElement } from 'solid-js';
import { styled } from 'solid-styled-components';
import Text from './Text';

interface Props {
  onMouseLeave?: (event: MouseEvent) => void;
  onMouseEnter?: (event: MouseEvent) => void;
  color?: string;
  class?: string;
  label?: string; 
  margin?: number | number[];
  padding?: number | number[];
  iconSize?: number;
  textSize?: number;
  iconName?: string;
  onClick?: (event: MouseEvent) => void;
  primary?: boolean;
  customChildren?: JSXElement
  customChildrenLeft?: JSXElement
  styles?: JSX.CSSProperties
}

const ButtonContainer = styled("button")<{padding?: number | number[]; margin?: number | number[]}>`
  all: unset;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  flex-shrink: 0;
  padding: ${props => props.padding !== undefined ? 
    typeof props.padding === "object" ? props.padding.join("px ") : props.padding  
  : 5}px;
  margin: ${props => props.margin !== undefined ? 
    typeof props.margin === "object" ? props.margin.join("px ") : props.margin  
  : 5}px;
  color: white;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  background-color: rgba(255, 255, 255, 0.08);
  border: solid 1px rgba(255, 255, 255, 0.1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.15);
  }

  :nth-child(2) {
    margin-left: 5px;
  }
`;

export default function Button(props: Props) {

  const color = () => props.color || "var(--primary-color)";

  const style = () => ({
    ...(props.primary ? {"background-color": color()} : undefined),
    ...props.styles
  })


  return (
    <ButtonContainer padding={props.padding} margin={props.margin} style={style()}  class={`${props.class} button`} onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
      {props.customChildrenLeft && props.customChildrenLeft}
      { props.iconName && <Icon size={props.iconSize} name={props.iconName} color={props.primary ? 'white' : color()} /> }
      { props.label && <Text size={props.textSize || 14} class='label' color={props.primary ? 'white' : color()}>{props.label}</Text> }
      {props.customChildren && props.customChildren}
    </ButtonContainer>
  )
}