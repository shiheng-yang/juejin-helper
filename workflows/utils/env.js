const env = process.env || {};

module.exports = {
  /* 掘金Cookie */
  COOKIE: '_tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227376819242085910031%2522%252C%2522user_unique_id%2522%253A%25227376819242085910031%2522%252C%2522timestamp%2522%253A1717549596276%257D; store-region=cn-js; store-region-src=uid; sid_guard=930c127030d406c690c20ed1ece6c8c2%7C1717636305%7C31536000%7CFri%2C+06-Jun-2025+01%3A11%3A45+GMT; uid_tt=bc2d5f4dcf4d3c90912e1e465cfe9f49; uid_tt_ss=bc2d5f4dcf4d3c90912e1e465cfe9f49; sid_tt=930c127030d406c690c20ed1ece6c8c2; sessionid=930c127030d406c690c20ed1ece6c8c2; sessionid_ss=930c127030d406c690c20ed1ece6c8c2; sid_ucp_v1=1.0.0-KDdiYWZiMDQ5ZmI5NTBiNDNjNDlkMDdjYzRkYmUzNGM3YTM0NWVmNTkKFwj6_LD1hM2WAhDRmYSzBhiwFDgHQPQHGgJsZiIgOTMwYzEyNzAzMGQ0MDZjNjkwYzIwZWQxZWNlNmM4YzI; ssid_ucp_v1=1.0.0-KDdiYWZiMDQ5ZmI5NTBiNDNjNDlkMDdjYzRkYmUzNGM3YTM0NWVmNTkKFwj6_LD1hM2WAhDRmYSzBhiwFDgHQPQHGgJsZiIgOTMwYzEyNzAzMGQ0MDZjNjkwYzIwZWQxZWNlNmM4YzI; passport_csrf_token=31aa8d241a1abe34b717bd37c4e34036; passport_csrf_token_default=31aa8d241a1abe34b717bd37c4e34036; csrf_session_id=7e02cd9eb95d8e8f930ec784a29a7a64',
  /* 多用户掘金Cookie, 当有1名以上用户时填写, 支持同时最多可配置5名用户 */
  COOKIE_2: 'tea_utm_cache_2608={%22utm_source%22:%22practice%22%2C%22utm_medium%22:%22dailynewtask%22%2C%22utm_campaign%22:%22jjmesg%22}; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227377186442160014902%2522%252C%2522user_unique_id%2522%253A%25227377186442160014902%2522%252C%2522timestamp%2522%253A1717635092175%257D; sid_guard=1ed49ef03d27ebb9308e3632217b3648%7C1717635203%7C31536000%7CFri%2C+06-Jun-2025+00%3A53%3A23+GMT; uid_tt=4bbde96404227de4d22f9a2626d733f4; uid_tt_ss=4bbde96404227de4d22f9a2626d733f4; si…ZTM2MzIyMTdiMzY0OA; ssid_ucp_v1=1.0.0-KDNjMjU1ZDFiODdkY2NjM2VjODczYTQ5NGU2YWY2Mzk3NmQ0NzI0Y2UKFgi-veDFvIx1EIORhLMGGLAUOAJA8QcaAmxmIiAxZWQ0OWVmMDNkMjdlYmI5MzA4ZTM2MzIyMTdiMzY0OA; store-region=cn-js; store-region-src=uid; passport_csrf_token=6d7e7d57f15bfd69064af3681b4143aa; passport_csrf_token_default=6d7e7d57f15bfd69064af3681b4143aa; _tea_utm_cache_2018={%22utm_source%22:%22practice%22%2C%22utm_medium%22:%22dailynewtask%22%2C%22utm_campaign%22:%22jjmesg%22}; csrf_session_id=3a6045fec41e62fed8c1e7b5d1ed37fb',
  COOKIE_3: env.COOKIE_3,
  COOKIE_4: env.COOKIE_4,
  COOKIE_5: env.COOKIE_5,
  /**
   * 邮箱配置
   * user 发件人邮箱, pass, 发件人密码, to收件人
   */
  EMAIL_USER: env.EMAIL_USER,
  EMAIL_PASS: env.EMAIL_PASS,
  EMAIL_TO: '418252769@qq.com',
  /**
   * 钉钉配置
   * https://open.dingtalk.com/document/robots/custom-robot-access
   */
  DINGDING_WEBHOOK: env.DINGDING_WEBHOOK,
  /**
   * PushPlus配置
   * http://www.pushplus.plus/doc/guide/openApi.html
   */
  PUSHPLUS_TOKEN: env.PUSHPLUS_TOKEN,
  /**
   * 企业微信机器人配置
   * https://developer.work.weixin.qq.com/document/path/91770
   */
  WEIXIN_WEBHOOK: env.WEIXIN_WEBHOOK,
  /**
   * server酱推送key
   * https://sct.ftqq.com/sendkey
   */
  SERVERPUSHKEY: env.SERVERPUSHKEY,
  /**
   * 飞书配置
   */
  FEISHU_WEBHOOK: env.FEISHU_WEBHOOK
};
