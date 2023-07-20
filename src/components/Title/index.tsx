import { Title as TitleStyles } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Title = (props: Props) => (
  <TitleStyles fontSize={props.fontSize}>{props.children}</TitleStyles>
)

export default Title
