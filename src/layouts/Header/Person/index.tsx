import { StyledAvatar, StyledName, StyledPerson } from "./styles";

interface IProps {
  name: string;
}

export const Person = ({ name }: IProps) => {
  return (
    <StyledPerson>
      <StyledAvatar></StyledAvatar>
      <StyledName>{name}</StyledName>
    </StyledPerson>
  );
};