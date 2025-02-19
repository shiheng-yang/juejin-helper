const env = process.env || {};

module.exports = {
  /* 掘金Cookie */
  /* 6653 undefined1234*/
  COOKIE: '_tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227376819242085910031%2522%252C%2522user_unique_id%2522%253A%25227376819242085910031%2522%252C%2522timestamp%2522%253A1717549596276%257D; store-region=cn-js; store-region-src=uid; sid_guard=930c127030d406c690c20ed1ece6c8c2%7C1717636305%7C31536000%7CFri%2C+06-Jun-2025+01%3A11%3A45+GMT; uid_tt=bc2d5f4dcf4d3c90912e1e465cfe9f49; uid_tt_ss=bc2d5f4dcf4d3c90912e1e465cfe9f49; sid_tt=930c127030d406c690c20ed1ece6c8c2; sessionid=930c127030d406c690c20ed1ece6c8c2; sessionid_ss=930c127030d406c690c20ed1ece6c8c2; sid_ucp_v1=1.0.0-KDdiYWZiMDQ5ZmI5NTBiNDNjNDlkMDdjYzRkYmUzNGM3YTM0NWVmNTkKFwj6_LD1hM2WAhDRmYSzBhiwFDgHQPQHGgJsZiIgOTMwYzEyNzAzMGQ0MDZjNjkwYzIwZWQxZWNlNmM4YzI; ssid_ucp_v1=1.0.0-KDdiYWZiMDQ5ZmI5NTBiNDNjNDlkMDdjYzRkYmUzNGM3YTM0NWVmNTkKFwj6_LD1hM2WAhDRmYSzBhiwFDgHQPQHGgJsZiIgOTMwYzEyNzAzMGQ0MDZjNjkwYzIwZWQxZWNlNmM4YzI; passport_csrf_token=31aa8d241a1abe34b717bd37c4e34036; passport_csrf_token_default=31aa8d241a1abe34b717bd37c4e34036; csrf_session_id=2ecc0d7c9b6fdf0167188ad55d1d51e7',
  /* 多用户掘金Cookie, 当有1名以上用户时填写, 支持同时最多可配置5名用户 */
  /* 8783 大*/
  COOKIE_3: 'store-region=cn-js; store-region-src=uid; sid_guard=38a545cebc16e99217e67b265c90f699%7C1717550212%7C31536000%7CThu%2C+05-Jun-2025+01%3A16%3A52+GMT; uid_tt=a11150e21fd3093c1b5635980c12e9df; uid_tt_ss=a11150e21fd3093c1b5635980c12e9df; sid_tt=38a545cebc16e99217e67b265c90f699; sessionid=38a545cebc16e99217e67b265c90f699; sessionid_ss=38a545cebc16e99217e67b265c90f699; sid_ucp_v1=1.0.0-KGY3NGNlNzZmNTRmMmNlMzc4YzAzMmIyNjA3NjlhNWU2NGRkNjQwZTcKFwju77DUuoyVBBCE-f6yBhiwFDgHQPQHGgJscSIgMzhhNTQ1Y2ViYzE2ZTk5MjE3ZTY3YjI2NWM5MGY2OTk; ssid_ucp_v1=1.0.0-KGY3NGNlNzZmNTRmMmNlMzc4YzAzMmIyNjA3NjlhNWU2NGRkNjQwZTcKFwju77DUuoyVBBCE-f6yBhiwFDgHQPQHGgJscSIgMzhhNTQ1Y2ViYzE2ZTk5MjE3ZTY3YjI2NWM5MGY2OTk; csrf_session_id=080a673549704532919c78e8b3af2bd0; __tea_cookie_tokens_2608=%257B%2522user_unique_id%2522%253A%25226979823742491395614%2522%252C%2522web_id%2522%253A%25226979823742491395614%2522%252C%2522timestamp%2522%253A1734080810525%257D; _tea_utm_cache_2018={%22utm_source%22:%22practice%22%2C%22utm_medium%22:%22mission%22%2C%22utm_campaign%22:%22article%22}; _tea_utm_cache_2608={%22utm_source%22:%22pop_corner%22%2C%22utm_medium%22:%22web_entrance%22%2C%22utm_campaign%22:%22annual_2024%22}',
  /* 3797 yang*/
  COOKIE_2: '_tea_utm_cache_2608={%22utm_source%22:%22practice%22%2C%22utm_medium%22:%22practice_kol%22%2C%22utm_campaign%22:%22kol_xiaoman%22}; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227377186442160014902%2522%252C%2522user_unique_id%2522%253A%25227377186442160014902%2522%252C%2522timestamp%2522%253A1717635092175%257D; sid_guard=7ba57e79eb817add7a2081af5729c1cc%7C1733208109%7C31536000%7CWed%2C+03-Dec-2025+06%3A41%3A49+GMT; uid_tt=ba211ef0dd9b920829438c37ca9c2047; uid_tt_ss=ba211ef0dd9b920829438c37ca9c2047; sid_tt=7ba57e79eb817add7a2081af5729c1cc; sessionid=7ba57e79eb817add7a2081af5729c1cc; sessionid_ss=7ba57e79eb817add7a2081af5729c1cc; sid_ucp_v1=1.0.0-KDMyZGVkOWNlOTcxZmViMzlkNmE2ZjE4MDc3M2IzNzk0Zjc5ZDhlMzIKFgi-veDFvIx1EK3QuroGGLAUOAdA9AcaAmxmIiA3YmE1N2U3OWViODE3YWRkN2EyMDgxYWY1NzI5YzFjYw; ssid_ucp_v1=1.0.0-KDMyZGVkOWNlOTcxZmViMzlkNmE2ZjE4MDc3M2IzNzk0Zjc5ZDhlMzIKFgi-veDFvIx1EK3QuroGGLAUOAdA9AcaAmxmIiA3YmE1N2U3OWViODE3YWRkN2EyMDgxYWY1NzI5YzFjYw; store-region=cn-js; store-region-src=uid; _tea_utm_cache_2018={%22utm_source%22:%22practice%22%2C%22utm_medium%22:%22practice_kol%22%2C%22utm_campaign%22:%22kol_xiaoman%22}; is_staff_user=false; n_mh=wzqvH3nLFSRF0FTPZ5ZTGxDV6gFlpPGTmrjNGQhWnEk; csrf_session_id=3a6045fec41e62fed8c1e7b5d1ed37fb ',
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
  DINGDING_WEBHOOK: 'https://oapi.dingtalk.com/robot/send?access_token=50797c8f93cd4e8067faf35deb4293c640ebb983054880c953c85123dc9649fd',
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
