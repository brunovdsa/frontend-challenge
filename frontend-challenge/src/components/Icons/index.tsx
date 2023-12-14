import {
  faCircleCheck,
  faCircleMinus,
  faCirclePlus,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconProps {
  style?: React.CSSProperties;
}

export function SearchIcon(props: IconProps) {
  return <FontAwesomeIcon icon={faMagnifyingGlass} style={props.style} />;
}

export function AddIcon(props: IconProps) {
  return <FontAwesomeIcon icon={faCirclePlus} style={props.style} />;
}

export function DeleteIcon(props: IconProps) {
  return <FontAwesomeIcon icon={faCircleMinus} style={props.style} />;
}

export function DoneIcon(props: IconProps) {
  return <FontAwesomeIcon icon={faCircleCheck} style={props.style} />;
}
