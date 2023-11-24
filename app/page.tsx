"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { subtitle, title } from "@/components/primitives";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";
import { copyTextToClipboard } from "@/utils/copyToClipboard";
import { siteConfig } from "@/config/site";
import { GTM_ID, copyclick, linkclick } from "../utils/gtm";

const code = "rick52956";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleCopyCode = () => {
    console.log("copying code");
    copyTextToClipboard(code);
    onOpen();
    copyclick(GTM_ID);
  };

  const handleClick = () => {
    linkclick(GTM_ID);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Tesla&nbsp;</h1>
        <h1 className={title({ color: "red" })}>Referral Code&nbsp;</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          Use code <strong>{code}</strong> when ordering to{" "}
          <span className={title({ color: "red", size: "xs" })}>Save</span>{" "}
          with 6 Months Free Supercharging + 3 Months Full Self-Driving, or $500 off Solar *
        </h2>
      </div>

      <div className="flex gap-3">
        <Button radius="full" onClick={handleCopyCode}>
          Copy Code
        </Button>
        <Link
          onClick={handleClick}
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.tesla}
        >
          Visit Tesla
        </Link>
      </div>

      {/* <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            www.onepeloton.com{" "}
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "sm",
                variant: "faded",
              })}
              href={siteConfig.links.tesla}
            >
              Visit Tesla
            </Link>
          </span>
        </Snippet>
      </div> */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Copied to clipboard
              </ModalHeader>
              <ModalBody>
                <p>
                  Visit{" "}
                  <a
                    href="https://ts.la/rick52956"
                    style={{ textDecoration: "underline" }}
                    target="_blank"
                  >
                    www.tesla.com
                  </a>{" "}
                  to use code.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Link
                  onClick={handleClick}
                  isExternal
                  className={buttonStyles({
                    variant: "bordered",
                    radius: "full",
                  })}
                  href={siteConfig.links.tesla}
                >
                  Visit Tesla
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}
