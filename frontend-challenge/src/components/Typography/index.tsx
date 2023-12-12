import { ReactNode } from 'react';

import { B1, B2, H1, H2, H3, H4, H5, H6 } from './styles';

interface TypographyProps {
  children: ReactNode;
}

export function Headline1(props: TypographyProps) {
  return <H1>{props.children}</H1>;
}

export function Headline2(props: TypographyProps) {
  return <H2>{props.children}</H2>;
}

export function Headline3(props: TypographyProps) {
  return <H3>{props.children}</H3>;
}
export function Headline4(props: TypographyProps) {
  return <H4>{props.children}</H4>;
}
export function Headline5(props: TypographyProps) {
  return <H5>{props.children}</H5>;
}
export function Headline6(props: TypographyProps) {
  return <H6>{props.children}</H6>;
}

export function Body1(props: TypographyProps) {
  return <B1>{props.children}</B1>;
}
export function Body2(props: TypographyProps) {
  return <B2>{props.children}</B2>;
}
