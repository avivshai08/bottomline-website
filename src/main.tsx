import { StrictMode, type ReactNode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

type RootApi = {
  createRoot?: (el: Element) => { render: (node: ReactNode) => void };
  default?: {
    createRoot: (el: Element) => { render: (node: ReactNode) => void };
  };
};

function showError(err: unknown) {
  const root = document.getElementById("root");
  if (!root) return;
  const message =
    err instanceof Error ? `${err.message}\n\n${err.stack ?? ""}` : String(err);
  root.innerHTML = `<pre dir="ltr" style="padding:24px;white-space:pre-wrap;color:#b42318;font:14px/1.5 ui-monospace,monospace">${message.replace(/</g, "&lt;")}</pre>`;
}

window.addEventListener("error", (event) => {
  showError(event.error || event.message);
});
window.addEventListener("unhandledrejection", (event) => {
  showError(event.reason);
});

try {
  const rootEl = document.getElementById("root");
  if (!rootEl) throw new Error("Missing #root");

  const mod = ReactDOMClient as RootApi;
  const createRoot = mod.createRoot ?? mod.default?.createRoot;
  if (!createRoot) {
    throw new Error("ReactDOM.createRoot is unavailable");
  }

  createRoot(rootEl).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
} catch (err) {
  showError(err);
}
