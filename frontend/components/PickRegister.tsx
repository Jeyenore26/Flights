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
                        <Dialog.Overlay className="bg-white/25 z-50 fixed inset-0  flex justify-center  items-center">
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
                                <Dialog.Content className="bg-white p-6 rounded-md max-w-lg w-full space-y-4 ">
                                    <div dir="rtl" className=" flex justify-start">
                                        <div>
                                            <Dialog.Title className="font-bold text-2xl">
                                                اختار نوع الحساب
                                            </Dialog.Title>

                                        </div>
                                        <Link href={'./registergroup'}>
                                            <button>
                                                click me
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="flex justify-end">
                                        <Dialog.Close className="border-black border-2 rounded-full px-6 hover:bg-black/10 active:bg-black/20">
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
