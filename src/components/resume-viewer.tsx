"use client";
import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { Button } from "./button";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

// Define the ref type for the Resume component
type ResumeMethods = {
  open: () => void;
  close: () => void;
};

function Resume({}, ref: React.ForwardedRef<ResumeMethods>) {
  const [open, setOpen] = React.useState(false);

  React.useImperativeHandle(
    ref,
    () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
    }),
    []
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="font-semibold text-lg md:text-2xl border-6 rounded-full px-8 py-4">
          Resume
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50" />
        <Dialog.Content className="fixed max-w-2xl w-full mx-auto min-h-[80vh] inset-0 z-50 flex flex-col justify-center px-6">
          <Dialog.Title className="relative text-xl font-bold text-center text-black mt-10 border-4 bg-white py-4 shadow">
            <Button asChild>
              <Link
                href="/assets/resume/tauhid-ahmed-resume.pdf"
                download="/assets/resume/tauhid-ahmed-resume.pdf"
                className="uppercase underline"
              >
                Download
              </Link>
            </Button>
            <Button
              className="absolute top-2 right-2"
              onClick={() => setOpen(false)}
            >
              <CgClose strokeWidth={2} />
            </Button>
          </Dialog.Title>
          <iframe
            title="Resume"
            src="/assets/resume/tauhid-ahmed-resume.pdf#toolbar=0"
            width="100%"
            height="100%"
            // style={{ border: "none" }}
            className="size-full"
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// Forward the ref with the correct type
export const ResumeViewer = React.forwardRef(Resume);
