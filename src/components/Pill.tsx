import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontColor?: string;
}

const Pill = ({
  children,
  backgroundColor,
  fontSize,
  fontWeight,
  fontColor,
}: Props) => {
  return (
    <Container
      $fontColor={fontColor}
      $backgroundColor={backgroundColor}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
    >
      {children}
    </Container>
  );
};

export default Pill;

const Container = styled.span<{
  $fontColor?: string;
  $backgroundColor?: string;
  $fontSize?: string;
  $fontWeight?: string;
}>`
  display: inline-block;
  background-color: ${(props) => props.$backgroundColor || "#d6bcd5ff"};
  color: ${(props) => props.$fontColor || "black"};
  padding: 5px 10px;
  border-radius: 5px;
  margin: 5px;
  font-size: ${(props) => props.$fontSize || "14px"};
  font-weight: bold;

  user-select: none;
`;
