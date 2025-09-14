import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

function Note() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("p", { children: [
      "Count: ",
      count
    ] }),
    /* @__PURE__ */ jsx("button", { onClick: () => setCount(count + 1), children: "Increment" }),
    /* @__PURE__ */ jsx("button", { onClick: () => setCount(count - 1), children: "Sub" })
  ] });
}

export { Note as N };
