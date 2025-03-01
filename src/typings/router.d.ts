/**
 * Router 实例
 */
export declare interface Router {
  /**
   * 跳转到指定页面
   * @param to 路由要跳转的地址
   */
  push: (to: RouterLocationRaw) => void
  /**
   * 跳转新地址并替换当前页面
   * @param to 路由要跳转的地址
   */
  replace: (to: RouterLocationRaw) => void
  /**
   * 返回上一页
   * @param delta 返回的页面数，如果 delta 大于现有页面数，则返回到首页
   */
  back: (delta?: number) => void
}

/**
 * Router 配置
 * @param webview webview 路由地址
 */
export declare interface RouterConfig {
  webview?: string
}

/**
 * Router 跳转参数必填选项 path | url 二选一
 */
export declare type RouterLocationRequiredOnly = 'path' | 'url'

/**
 * Router 跳转参数混合类型
 */
export declare type RouterLocationMixtureRaw<T, K extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, K>
> &
{
  [P in K]-?: Required<Pick<T, P>> & Partial<Record<Exclude<K, P>, undefined>>
}[K]

/**
 * Router 跳转参数
 */
export declare type RouterLocationRaw =
  | string
  | RouterLocationMixtureRaw<
      RouteLocationOptions & LocationUniAppParams,
      RouterLocationRequiredOnly
    >

/**
 * Router 跳转参数选项
 */
export interface RouteLocationOptions {
  // 目标路由地址
  path: string
  //  路由参数
  query?: LocationQueryRaw
  // 是否替换当前页面
  replace?: boolean
  // 是否跳转到 tabBar 页面
  tabBar?: boolean
}

/**
 * Router Query 参数
 */
export declare type LocationQueryRaw = Record<string, string | number | undefined | null>
