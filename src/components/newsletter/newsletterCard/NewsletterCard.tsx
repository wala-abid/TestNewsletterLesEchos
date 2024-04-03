import { Image } from "@chakra-ui/react";
import {
  ButtonCard,
  CardWrapper,
  Description,
  ImgBloc,
  Title,
} from "./NewsletterCardWrapper";

function NewsletterCard({
  title,
  description,
  img,
  ctoStatus,
}: {
  title: string;
  description: string;
  img: string;
  ctoStatus: boolean;
}) {
  return (
    <CardWrapper>
      <ImgBloc>
        <Image src={img} alt={description} width={300} height={200} />
        <Title>{title}</Title>
      </ImgBloc>
      <Description>{description}</Description>
      <ButtonCard ctostatus={ctoStatus.toString()}>
        {ctoStatus ? "S'inscrire" : "S'abonner"}
      </ButtonCard>
    </CardWrapper>
  );
}

export default NewsletterCard;
