const STORAGE_KEY = "bg_ref";

export function captureBgRef(): void {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get("bg_ref");
  if (ref) {
    localStorage.setItem(STORAGE_KEY, ref);
  }
}

export function getBgRef(): string | null {
  return localStorage.getItem(STORAGE_KEY);
}

export function appendBgRef(url: string): string {
  const ref = getBgRef();
  if (!ref) return url;
  try {
    const u = new URL(url);
    u.searchParams.set("bg_ref", ref);
    return u.toString();
  } catch {
    return url;
  }
}
