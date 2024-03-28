"use client";
import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import { USER_WITH_ONE_SUBSCRIPTION } from "@/mocks/user";
import { NewsletterItemType, UserType } from "@/types/type";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import NewsletterCard from "../newsletter/newsletterCard/NewsletterCard";
import UserSelector from "../UserSelector";
import {
  Container,
  Description,
  Header,
  HomeWrapper,
  NewsletterCardWrapper,
  Title,
  TitleSite,
} from "./HomeWrapper";

const Newsletter = () => {
  const [currentUser, setCurrentUser] = useState<UserType>(
    USER_WITH_ONE_SUBSCRIPTION
  );

  const groupBySite = Object.groupBy(
    NEWSLETTER_ITEMS.flat(1),
    (newsletter: NewsletterItemType) => newsletter.site
  );

  const ctoValue = (newsletter: NewsletterItemType) =>
    currentUser.subscriptions.some((sub) =>
      newsletter.subscriptions.includes(sub)
    );

  return (
    <HomeWrapper>
      <UserSelector setCurrentUser={setCurrentUser} />
      <Header>
        <Title>Newsletters</Title>
        <Description>
          Dans cette page, vous retrouvez l’ensemble des newsletters des Echos
          et des marques satellites. Ainsi, vous pouvez découvrir toutes nos
          newsletters selon vos centres d’intérêt et gérer plus facilement
          l’inscription à vos newsletters.
        </Description>
      </Header>

      <Container>
        {Object.entries(groupBySite).map(([site, newsletters]) => (
          <Box key={site} borderWidth="1px" borderRadius="lg" p={4}>
            <TitleSite>{site}</TitleSite>
            <NewsletterCardWrapper>
              {newsletters?.map((newsletter) => (
                <NewsletterCard
                  key={newsletter.id}
                  title={newsletter.title}
                  description={newsletter.description}
                  img={newsletter.image}
                  ctoStatus={ctoValue(newsletter)}
                />
              ))}
            </NewsletterCardWrapper>
          </Box>
        ))}
      </Container>
    </HomeWrapper>
  );
};

export default Newsletter;
