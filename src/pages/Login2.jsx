import React, { lazy, Suspense, useReducer, useState } from "react";
import { Navbar } from "../components/Navbar";

const Modal = lazy(() => import("./Modal"));
export const Login2 = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex  flex-col gap-3 flex-grow items-center justify-center mt-16">
        {/*1. button-opne, modal appears- 2.there is x icon */}
        {/* state- define open and close by boolean value */}
        <button onClick={toggleModal}> open modal</button>

        {modal && (
          <Suspense fallback={<p>Loading</p>}>
            <Modal modal={modal} />
          </Suspense>
        )}
      </main>
    </div>
  );
};
