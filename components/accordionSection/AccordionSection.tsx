import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const AccordionSection = () => {
  return (
    <>
      <div className="mb-14 pt-10 mx-10 flex flex-col gap-6">
        <div className="text-center">
          <p className="text-4xl mb-2">FAQs</p>
          <div className="bg-orange-700 h-1 w-16 mx-auto"></div>
        </div>
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What items can I sell on the platform?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                You can sell a variety of used educational materials, including
                textbooks, study guides, and other academic resources.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Is there a fee for listing my items?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Listing your items is completely free!</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What should I do if I encounter issues with a transaction?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Contact us immediately. We're here to help resolve any issues
                and ensure a smooth transaction.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How do I edit or remove a listing?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                To edit or remove a listing, go to your profile, find the item,
                and select the appropriate option. You can make changes at any
                time.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How does the search and browse functionality work on the
                platform?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                You can search for specific items using keywords or browse
                categories. Use filters to narrow down your search and find
                exactly what you're looking for.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default AccordionSection;
