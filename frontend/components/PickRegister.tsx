import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

function PickRegister({
    children,
}: {
    children: any;
}) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <AnimatePresence initial={true}>
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger>{children}</Dialog.Trigger>
                <Dialog.Portal>
                    <motion.div>
                        <Dialog.Overlay className="bg-white/25 z-50 fixed inset-0 grid place-items-center flex justify-center">
                            <motion.div
                                className="max-w-lg w-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{
                                    type: "spring",
                                    duration: 0.5,
                                }}
                            >
                                <Dialog.Content className="bg-base p-6 rounded-md max-w-lg w-full space-y-4">
                                    <div className="bg-white p-12 rounded-lg border-2">
                                        <Dialog.Close className="btn-outline px-6 flex justify-end items-end">
                                            الغاء
                                        </Dialog.Close>
                                    </div>
                                </Dialog.Content>
                            </motion.div>
                        </Dialog.Overlay>
                    </motion.div>
                </Dialog.Portal>
            </Dialog.Root>
        </AnimatePresence>
    );
}

export default PickRegister;
