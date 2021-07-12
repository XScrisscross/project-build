export const browserType = () => {
  let inBrowser = typeof window !== 'undefined'
  let inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform
  let weexPlatform = inWeex && WXEnvironment.platform.toLowerCase()
  let UA = inBrowser && window.navigator.userAgent.toLowerCase()
  let isIE = UA && /msie|trident/.test(UA)
  let isIE9 = UA && UA.indexOf('msie 9.0') > 0
  let isEdge = UA && UA.indexOf('edge/') > 0
  let isAndroid = (UA && UA.indexOf('android') > 0) || weexPlatform === 'android'
  let isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === 'ios'
  let isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
  let isPhantomJS = UA && /phantomjs/.test(UA)
  let isFF = UA && UA.match(/firefox\/(\d+)/)

  return {
    inBrowser,
    inWeex,
    weexPlatform,
    UA,
    isIE,
    isIE9,
    isEdge,
    isAndroid,
    isIOS,
    isChrome,
    isPhantomJS,
    isFF,
  }
}
