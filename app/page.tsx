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

const code = "VQMNQZ";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleCopyCode = () => {
    console.log("copying code");
    copyTextToClipboard(code);
    onOpen();
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Peleton&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Promo Code&nbsp;</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          Use code <strong>{code}</strong> at checkout to get{" "}
          <span className={title({ color: "pink", size: "xs" })}>$100 off</span>{" "}
          accessories when ordering a Peloton Bike, Bike+, Tread, or Row.*
        </h2>
      </div>

      <div className="flex gap-3">
        <Button radius="full" onClick={handleCopyCode}>
          Copy Code
        </Button>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.peleton}
        >
          Visit Peleton
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
              href={siteConfig.links.peleton}
            >
              Visit Peleton
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
                    href="https://www.onepeloton.com/"
                    style={{ textDecoration: "underline" }}
                    target="_blank"
                  >
                    www.onepeleton.com
                  </a>{" "}
                  to use code.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Link
                  isExternal
                  className={buttonStyles({
                    variant: "bordered",
                    radius: "full",
                  })}
                  href={siteConfig.links.peleton}
                >
                  Visit Peleton
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}
