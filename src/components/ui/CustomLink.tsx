import { classNames, conditionalClass } from "@/common/classNames";
import { AnchorProps, Link } from "@nerimity/solid-router";
import { css } from "solid-styled-components";

interface CustomLinkProps extends AnchorProps {
  decoration?: boolean;
  noContextMenu?: boolean;
}

const noDecoration = css`
  all: unset;
  cursor: pointer;
  &:focus {
    outline: solid 1px;
  }
`;

export function CustomLink(props: CustomLinkProps) {
  const onContextMenu = (event: MouseEvent) => {
    if (!props.noContextMenu) return;
    event.preventDefault();
  }

  return <Link oncontextmenu={onContextMenu} {...props} class={classNames(conditionalClass(!props.decoration, noDecoration), props.class)} />
}