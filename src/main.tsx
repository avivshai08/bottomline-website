import { StrictMode, type ReactNode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

type RootApi = {
  createRoot?: (el: Element) => { render: (node: ReactNode) => void };
  hydrateRoot?: (el: Element, node: ReactNode) => void;
  default?: {
    createRoot: (el: Element) => { render: (node: ReactNode) => void };
    hydrateRoot?: (el: Element, node: ReactNode) => void;
  };
};

function isHydrationMismatch(err: unknown) {
  const msg = err instanceof Error ? err.message : String(err);
  return /Minified React error #(418|419|422|423|425)/.test(msg);
}

function showError(err: unknown) {
  if (isHydrationMismatch(err)) return;
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
  const hydrateRoot = mod.hydrateRoot ?? mod.default?.hydrateRoot;
  if (!createRoot) {
    throw new Error("ReactDOM.createRoot is unavailable");
  }

  const app = (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );

  const prerendered = Boolean(rootEl.querySelector(".site-header"));
  if (prerendered && hydrateRoot) {
    hydrateRoot(rootEl, app);
  } else {
    createRoot(rootEl).render(app);
  }
} catch (err) {
  showError(err);
}
