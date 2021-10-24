import { DefaultProps, SvgProps } from './svg';

const MenuIcon: React.FC<SvgProps> = (props: SvgProps = DefaultProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fill="none">
    <path fill={props.fill} d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
  </svg>
);

export default MenuIcon;
