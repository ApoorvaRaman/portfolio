export function isLowEndDevice() {
  return (
    navigator.hardwareConcurrency &&
    navigator.hardwareConcurrency <= 4
  );
}
