import classNames from 'classnames'
// eslint-disable-next-line import/no-internal-modules
import bindClassNames from 'classnames/bind'
// eslint-disable-next-line import/no-unresolved
import { ClassNamesFn } from 'classnames/types'

type CSSClasses = Readonly<{
  [className: string]: string
}>

// type ClassValue = string | undefined | null | false | ClassValue[] | { [className: string]: boolean | undefined | null | string }

// function error(className: string) {
//   throw new Error(`Classname ${className} doesn't exist in style file.`)
// }

// const classExistsChecker = (styles: CSSClasses) => (attribute: string) =>
//   typeof styles[attribute] === 'undefined' ? error(attribute) : true

export const mergeStyles = classNames
export const styleNames = (styles: CSSClasses): ClassNamesFn => {
  const sn = bindClassNames.bind(styles)
  // if (process.env.NODE_ENV !== 'production') {
  //   return function getClassName(...args: ClassValue[]) {
  //     const classExists = classExistsChecker(styles)
  //     args.forEach((arg) => {
  //       if (typeof arg === 'object' && arg !== null) {
  //         Object.keys(arg).forEach(classExists)
  //       } else if (arg) {
  //         classExists(arg)
  //       }
  //     })
  //     return sn(...args)
  //   }
  // }
  return sn
}
