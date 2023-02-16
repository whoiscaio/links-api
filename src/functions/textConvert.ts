export default function textConvert(text: string) {
  let newText = text.replace(/-/g, ' ')

  return newText.charAt(0).toUpperCase() + newText.substring(1)
}