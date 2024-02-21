"use client";

import React, { useEffect } from "react";

export default function Home() {
  const [text, setText] = React.useState(
    "I am an instruction text that is too long to fit in the container."
  );
  return (
    <main className="flex min-h-[100vh] items-stretch">
      <div className="flex gap-1 flex-col  w-1/2 items-start p-24 justify-center border-r shrink-0">
        <label className="text-gray-500">Instruction text</label>
        <textarea
          rows={10}
          className="p-2 w-[400px] border rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="flex w-1/2 items-center justify-center">
        <div className="p-8 border-red-200">
          <AutoScroller text={text}>
            <h1 className="scrollable-content text-center text-4xl font-bold w-full">
              {text}
            </h1>
          </AutoScroller>
        </div>
      </div>
    </main>
  );
}

const AutoScroller = ({ children, text }) => {
  const scrollRef = React.useRef(null);
  const [isScrollable, setIsScrollable] = React.useState(false);

  React.useEffect(() => {
    setIsScrollable(
      scrollRef.current.scrollHeight > scrollRef.current.clientHeight
    );
  }, [text]);

  return (
    <div
      ref={scrollRef}
      data-scrollable={isScrollable}
      className="scroller size-full pt-[0.2em] bg-gray-200 h-[1.5em] flex items-start text-4xl border-red-500 border overflow-visible resize"
    >
      {children}
    </div>
  );
};
