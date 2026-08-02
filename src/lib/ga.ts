import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-GQ9XM82G0H";

export function initGA() {
  if (!MEASUREMENT_ID) {
    return;
  }

  ReactGA.initialize(MEASUREMENT_ID);
}

export function logPageView(path: string) {
  if (!MEASUREMENT_ID) {
    return;
  }

  ReactGA.send({ hitType: "pageview", page: path });
}

export function logEvent(action: string, category: string, label?: string, value?: number) {
  if (!MEASUREMENT_ID) {
    return;
  }

  ReactGA.event({ category, action, label, value });
}
