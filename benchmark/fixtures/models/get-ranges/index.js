
import { __clear } from '../../../../lib/utils/memoize'

export default function (text) {
  text.getRanges()
}

export function before(state) {
  const text = state.document.getFirstText()
  return text
}

export function after() {
  __clear()
}

