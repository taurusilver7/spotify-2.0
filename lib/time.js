// A helper function to calculate the song duration [in milliseconds in the API database].

export function msToMinsAndSecs(ms) {
  const mins = Math.floor(ms / 60000);
  const secs = Math.floor((ms % 60000) / 1000).toFixed(0);
  return secs == 60
    ? mins + 1 + ":00"
    : mins + ":" + (secs < 10 ? "0" : "") + secs;
}
