export default function truncateTextByLetter(text, length) {
    if (typeof text !== "string" || typeof length !== "number") {
      return "";
    }
  
    if (text.length <= length) {
      return text + "...";
    }
  
    return text.slice(0, length) + "...";
  }
  