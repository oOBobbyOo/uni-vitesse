import pagesJson from '@/pages.json'

export * from './is'

export function getIsTabbar() {
  if (!Object.keys(pagesJson).includes('tabBar'))
    return false

  const pages = getCurrentPages()
  const currPath = pages.at(-1)?.route
  return !!pagesJson.tabBar.list.find(e => e.pagePath === currPath)
}
