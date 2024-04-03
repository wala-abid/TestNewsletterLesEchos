import { NewsletterItemType } from "@/types/type";
export function groupNewsletterBySite(newsletterItems: NewsletterItemType[]) {
  const groupedItems: Record<string, NewsletterItemType[]> = {};
  newsletterItems.forEach((item: NewsletterItemType) => {
    const { site } = item;

    if (!groupedItems[site]) {
      groupedItems[site] = [];
    }
    groupedItems[site].push(item);
  });

  return groupedItems;
}
