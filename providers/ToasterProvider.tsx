"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
    return (
        <Toaster
            toastOptions={{
                style: {
                    background: "#121212",
                    color: "#fff",
                },
            }}
        />
    )
}

export default ToasterProvider;